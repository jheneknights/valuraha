
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('welcome', { title: 'Welcome - Login/Sign-up' });
};