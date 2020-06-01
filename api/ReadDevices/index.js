const storage = require('azure-storage');

module.exports = async function (context, req) {

    if (req.method == "GET") {
        context.res = {
            status: 200,
            body: context.bindings.deviceEntity
        }
    }
};

