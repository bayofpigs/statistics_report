/* 
 * Append flash (temporary messages) information to res.locals
 */
var flash = require('connect-flash');

module.exports = function() {
  return function(req, res, next) {
    var error_messages = req.flash('error');
    var info_messages = req.flash('info');
    var success_messages = req.flash('success');
    res.locals.messages = [];
    for(var i in error_messages) {
      res.locals.messages.push({type: 'danger', message: error_messages[i]});
    }
    for(var i in info_messages) {
      res.locals.messages.push({type: 'info', message: info_messages[i]});
    }
    for(var i in success_messages) {
      res.locals.messages.push({type: 'success', message: success_messages[i]});
    }   
    next();
  }
};