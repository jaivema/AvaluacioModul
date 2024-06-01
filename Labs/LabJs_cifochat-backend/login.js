const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    //console.log(event);
    const connectionId = event.requestContext.connectionId;
    const sourceIp = event.requestContext.identity.sourceIp;
    const requestTime = event.requestContext.requestTime;
    
    console.log("connectionId", connectionId);
    console.log("sourceIp", sourceIp);
    console.log("requestTime", requestTime);
    
    //let timestampEpoch = new Date().getTime();
    
    var bodyJSON = JSON.parse(event.body);
    const chatId = bodyJSON.chatId;
    const userId = bodyJSON.userId;
    
    const response = {
        "action" : "logged in",
        "connectionId" : connectionId,
        "time" : requestTime
        };

    try {
    await updateLogin(connectionId, chatId, userId);
        return {statusCode: 200, 
                body: JSON.stringify(response)};
    } catch (err) {
        return { error: err };
    }
};

// put item https://docs.aws.amazon.com/cli/latest/reference/dynamodb/put-item.html
async function updateLogin(connectionId, chatId, userId){
  try {
    await ddb.update({
        TableName: 'activeConnectionsPool', 
        Key: { connectionId : connectionId, },
        UpdateExpression: 'SET #chat = :chi, #ui = :usi',
        ExpressionAttributeNames: { '#chat': 'chatId', '#ui' : 'userId',}, 
        ExpressionAttributeValues: {':chi': chatId , ':usi' : userId},
        ReturnValues:"UPDATED_NEW"   
    }).promise();
  } catch (err) {
    return err;
  }
}
    
