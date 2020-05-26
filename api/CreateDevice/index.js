const storage = require('azure-storage');

var tableSvc = storage.createTableService(process.env.STORAGE_ACCOUNT, process.env.ACCOUNT_KEY);

module.exports = async function (context, req) {
    if (req.body) {
        const payload = createPayload(req.body);
        tableSvc.insertOrReplaceEntity (process.env.TABLE, payload, function (error, result, response) {
            if (!error) {
                context.res = {
                    status: 500,
                    body: error
                }
            }
            context.res = response
        });
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

const createPayload = (body) => {
    return {
        PartitionKey: { '_': 'devices' },
        RowKey: { '_': body.name },
        name: { '_': body.name },
        owner: { '_': body.owner },
        ownermail: { '_': body.ownermail },
        price: { '_': +body.price, '$': 'Edm.Double' },
        note: { '_': body.note },
    }

}