const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log(event);
    const connectionId = event.requestContext.connectionId;
    const sourceIp = event.requestContext.identity.sourceIp;
    const requestTime = event.requestContext.requestTime;
    
    console.log("connectionId", connectionId);
    console.log("sourceIp", sourceIp);
    console.log("requestTime", requestTime);
    
    let timestampEpoch = new Date().getTime();
    
    const response = {message: 'connection done', connectionId : connectionId};

    
    try {
    await addConnection(connectionId , sourceIp, requestTime, timestampEpoch);
        return {statusCode: 200, 
                body: JSON.stringify(response)};
    } catch (err) {
        return { error: err };
    }
    
  
    
    
};

// put item https://docs.aws.amazon.com/cli/latest/reference/dynamodb/put-item.html
async function addConnection(connectionId, sourceIp, requestTime, timestampEpoch){
  try {
    await ddb.put(
        {
    TableName:
        'activeConnectionsPool',     
    Item: {
        connectionId : connectionId,
        sourceIp: sourceIp, 
        requesttime: requestTime,
        timestampEpoch:timestampEpoch,
        chatId : "notLoginChat",
        userId : "notLoginUser" 
    }
    }).promise();
  } catch (err) {
    return err;
  }
}
   