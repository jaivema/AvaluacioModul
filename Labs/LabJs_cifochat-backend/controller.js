const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler =  (event, context, callback) => {
    
    // create api ApiGatewayManagementApi to make a POST from lambda to engine by connectionid
    let apiGatewayManagementApi = new AWS.ApiGatewayManagementApi({ 
        apiVersion: '2018-11-29',    
        endpoint: 'https://xxxxxxx.execute-api.eu-central-1.amazonaws.com/test/',
        region: 'eu-central-1'
    });
    
    console.log(event.body);
    //console.log(event);
    const connectionId = event.requestContext.connectionId;
    const sourceIp = event.requestContext.identity.sourceIp;
    const requestTime = event.requestContext.requestTime;
    
    var bodyJSON = JSON.parse(event.body);
    var chatId = bodyJSON.chatId;
    var userId = bodyJSON.userId;
    var text = bodyJSON.text;
    
    //const chatId = event.body.chatId;
    //const userId = event.body.userId;
    //const text = event.body.text;
    
    console.log("connectionId", connectionId);
    console.log("sourceIp", sourceIp);
    console.log("requestTime", requestTime);
    console.log("chatId", chatId);
    console.log("userId", userId);
    console.log("text", text);
    
    let timestampEpoch = new Date().getTime();
    
    saveConversation (connectionId, sourceIp, requestTime, timestampEpoch, chatId, userId, text).then(() => {
        callback(null, 
            {statusCode: 200, 
            body: JSON.stringify('sent at ' + requestTime)
            // body: ''
            });  
    });
    
    let connection = "";
    let stringData = "";
    let jsonData = "";
    getChatConnections(chatId).then((dataConnections) => {
    
        dataConnections.Items.forEach((record) => {
            console.log("record: " + JSON.stringify(record));
            connection = record.connectionId;
            
            if (connection != connectionId){
                jsonData = {
                    "action" : "conversation",
                    "time" : requestTime,
                    "chatId" : chatId,
                    "userId" : userId ,
                    "text" : text
                };
                stringData = JSON.stringify(jsonData);
               
                console.log("connection: " + connection);
                //json-object created to send data to user-chatId
                //with the connectionId and the text ... or whatever
                const paramsToSendToChatGroup = {
                    ConnectionId: connection,
                    Data: stringData 
                };
                
                //ApiGatewayManagementApi makes a POST
                // post https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayManagementApi.html#postToConnection-property
                 apiGatewayManagementApi.postToConnection(paramsToSendToChatGroup, function(err, data) {
                        if (err) console.log(err, err.stack); // an error occurred
                        else     console.log(data);           // successful response
                    });
                    
            }    
        });
    }); 
    
 };
 
// put item https://docs.aws.amazon.com/cli/latest/reference/dynamodb/put-item.html
function saveConversation (connectionId , sourceIp,requestTime, timestampEpoch, chatId, userId, text) {
return ddb.put({
    TableName:
        'cifoChat',     
    Item: {connectionid : connectionId,
        sourceip: sourceIp, 
        requesttime: requestTime,
        timestampEpoch:timestampEpoch,
        chatId: chatId ,
        userId : userId + "#" + timestampEpoch,
        text: text
        }
        
    }).promise();
}

function getChatConnections(chatId){    
    return ddb.scan({        
        TableName: 'activeConnectionsPool',
        FilterExpression: 'chatId = :chat',
        ExpressionAttributeValues: { ':chat': chatId }
    }).promise();
}
