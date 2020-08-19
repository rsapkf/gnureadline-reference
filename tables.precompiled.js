(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tables'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"mode") || (depth0 != null ? lookupProperty(depth0,"mode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mode","hash":{},"data":data,"loc":{"start":{"line":2,"column":9},"end":{"line":2,"column":17}}}) : helper)))
    + "\">\n  <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"mode") || (depth0 != null ? lookupProperty(depth0,"mode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mode","hash":{},"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":14}}}) : helper)))
    + " Mode Shortcuts\n  </button>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":29,"column":11}}})) != null ? stack1 : "")
    + "  <a class=\"text-muted\" href=\"#top\"><button type=\"button\" class=\"btn btn-outline-primary\">Top</button></a>\n</div>\n<br />\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"row\">\n    <div class=\"col-sm\">\n      <table class=\"table table-hover mr-auto\">\n        <thead>\n          <tr>\n            <th scope=\"col\">\n              <h3>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"category") || (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":13,"column":18},"end":{"line":13,"column":32}}}) : helper)))
    + "</h3>\n            </th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"commands") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":25,"column":17}}})) != null ? stack1 : "")
    + "      </table>\n    </div>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tbody>\n          <tr class=\"table-dark\">\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"command") || (depth0 != null ? lookupProperty(depth0,"command") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"command","hash":{},"data":data,"loc":{"start":{"line":21,"column":28},"end":{"line":21,"column":41}}}) : helper)))
    + "</th>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":33}}}) : helper)))
    + ".</td>\n          </tr>\n        </tbody>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"modes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":33,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();