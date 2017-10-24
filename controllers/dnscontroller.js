var checkdns = require('checkdnsjson');

exports.dns_lookup = function (req, res) {
    let type = req.params.type ? req.params.type : false;
    let resp = checkdns.nslookup(req.params.lookup, type, (resp) => {
        if (resp.error) {
            if (resp.notfound)
                res.status(404);
            else
                res.status(500);
            res.json(resp.error);
        } else
            res.send(resp);

        return;
    });

};