/*
 * GET users listing.
 */

exports.choise = function(req, res) {
    // res.json(req.params);

    //get the name of the template requested 
    var template = req.params[0];
    res.render(template, {title: template});

    // res.send("respond with a resource");
};