module.exports = function(Handlebars) {

var templates = {};

templates["gallery/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <figure>\n          <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.images),stack1 == null || stack1 === false ? stack1 : stack1.standard_resolution)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.images),stack1 == null || stack1 === false ? stack1 : stack1.low_resolution)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"by @"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n          </a>\n        </figure>\n      </li>\n    ";
  return buffer;
  }

  buffer += "<header id=\"header\">\n  <h1>#"
    + escapeExpression(((stack1 = ((stack1 = depth0.params),stack1 == null || stack1 === false ? stack1 : stack1.hashtag)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n</header>\n\n<section id=\"gallery\">\n  <ul id=\"images-list\">\n    ";
  stack2 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </ul>\n</section>\n";
  return buffer;
  });

templates["home/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<h1>Wecome to GitHub Browser!</h1>\n<p>This is a little app that demonstrates how to use Rendr by consuming GitHub's public Api.</p>\n<p>Check out <a href=\"/repos\">Repos</a> or <a href=\"/users\">Users</a>.</p>\n\n<p>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.copyright || depth0.copyright),stack1 ? stack1.call(depth0, "2013", options) : helperMissing.call(depth0, "copyright", "2013", options)))
    + "</p>\n";
  return buffer;
  });

return templates;

};