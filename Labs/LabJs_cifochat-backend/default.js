exports.handler = async (event) => {
    
    console.log(event);
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from CIFO Chat! Be careful wiht your ROUTE, it is not right'),
    };
    return response;
};
