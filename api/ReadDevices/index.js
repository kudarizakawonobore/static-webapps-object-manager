const storage = require('azure-storage');
let tableSvc = storage.createTableService(process.env.STORAGE_ACCOUNT, process.env.ACCOUNT_KEY);

module.exports = async function (context, req) {

    if (req.method == "GET") {
        // context.log("---------------")
        // let query = new storage.TableQuery()
        //     .where('PartitionKey eq ?', 'devices');
        // tableSvc.queryEntities(process.env.TABLE, query, null, (error, result, response) => {
        //     context.log(response.body.value)
        //     context.res.json(response.body.value);
        //     context.res.body = "hoge"
        //     context.done();
        // });
        context.res = {
            status: 200,
            body: context.bindings.deviceEntity
        }
    }
};

