const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler =  (event, context, callback) => {
    console.log(event);
    var connectionId = event.requestContext.connectionId;
    var sourceIp = event.requestContext.identity.sourceIp;
    var requestTime = event.requestContext.requestTime;
    console.log("connectionId", connectionId);
    console.log("sourceIp", sourceIp);
    console.log("requestTime", requestTime);
    
    //let timestampEpoch = new Date().getTime();
    //console.log("timestampEpoch", timestampEpoch);
    
    deleteConnectionId(connectionId).then(() => {
        callback(
            null,
            {statusCode: 200,} 
        );
    });
    
    function deleteConnectionId(connectionid) {
        return ddb.delete({
            TableName: 'activeConnectionsPool',
            Key: { connectionId : connectionid, },
        }).promise();
    }
};


 
