var JustWrite = JustWrite || { Models: {}, Views: {}, Collections: {} };

JustWrite.Views.ProjectView = Backbone.View.extend({
  tagName: 'li',
  template: JST['projects/projectTemplate'],
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },
  render: function() {
    var html = (this.template(this.model.attributes));
    this.$el.html(html).addClass('project');
    var pageListView = new JustWrite.Views.PageListView({
      collection: this.model.get('pages'),
      el: $('body').find('.surface')
    });
    console.log('creating project view: '+this.model.get('id'));
    return this;    
  },
  events: {
    'click p.project-name': 'getPages',
    'click p.delete-project': 'deleteProject',
  },
  getPages: function() {    
    if (window.currentProject != null){
      this.saveCurrentProjectPages();
    };

    this.model.get('pages').fetch();
    window.currentProject = this.model;
    return this;
  },

  saveCurrentProjectPages: function saveCurrentProjectPages() {
    var pages = window.currentProject.get('pages');
      
      _.each(pages.models, function(page) {
        console.log('in page loop for page: '+page.get('id'));
        var div = $('#'+page.get("id"));
        var top = div.position().top;
        var left = div.position().left;
        var height = div.height();
        var width = div.width();
        page.set({top: top, left: left, height: height, width: width}, {silent: true});
        console.log('saved: '+page.get('id'));
      });
      pages.sync("update", pages);
    },

  deleteProject: function() {
    console.log('deleted project: '+this.model.get('id'))
    this.model.destroy();
    $('.surface').empty();
    window.currentProject = null;
  }
});
