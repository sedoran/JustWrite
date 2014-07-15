var JustWrite = JustWrite || { Models: {}, Views: {}, Collections: {} };

JustWrite.Models.Project = Backbone.Model.extend({
  initialize: function() {
    var that = this;
    var pagesUrl = function(){ 
      return '/projects/'+that.get('id')+'/pages'
    };

    var pages = new JustWrite.Collections.PageCollection();
    pages.url = pagesUrl;
    this.set('pages', pages);
    console.log("initializing project model: "+ this.get('id'));
  }
});
