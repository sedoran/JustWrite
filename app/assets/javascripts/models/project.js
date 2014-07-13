var JustWrite = JustWrite || { Models: {}, Views: {}, Collections: {} };

JustWrite.Models.Project = Backbone.Model.extend({
  initialize: function() {
    var pagesUrl = '/projects/'+this.get('id')+'/pages';
    var pages = new JustWrite.Collections.PageCollection();
    pages.url = pagesUrl;
    this.set('pages', pages);
  }
});
