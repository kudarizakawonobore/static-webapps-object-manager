const storage = require('azure-storage');
let tableSvc = storage.createTableService(process.env.STORAGE_ACCOUNT, process.env.ACCOUNT_KEY);

module.exports = async function (context, req) {

    if (req.method == "GET") {
        context.res = {
            status: 200,
            body: context.bindings.deviceEntity
        }
    }
};

