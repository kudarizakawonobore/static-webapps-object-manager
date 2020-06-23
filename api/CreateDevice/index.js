const atob = require('atob');
module.exports = async function (context, req) {
    if (req.body) {
        context.bindings.blobBinding = toBin(req.body.image);
        context.bindings.tableBinding = [];
        tablePush(context, req.body);
        context.done();
    }
    else {
        context.res = {
            status: 400,
            body: "Bad Request please pass properties, name, owner, ownermail, price, note"
        };
    }
};

const tablePush = (context, body) => {
    context.bindings.tableBinding.push({
            PartitionKey: "devices",
            RowKey: body.name,
            name: body.name,
            owner: body.owner,
            ownermail: body.ownermail,
            price: body.price,
            note: body.note,
            path: `${body.filename}.${body.extention}`
        })
}

const toBin = (base64) => {
    var bin = atob(base64.replace(/^.*,/, ''));
    var buffer = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
    }
    return buffer;
}
