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
    'click div.project-name': 'getPages',
    'click p.project-title': 'editProjectName',
    'click div.delete-project': 'deleteProject',
  },

  getPages: function() {    
    if (window.currentProject != null && window.currentProject.get("pages").length > 0) {
      $('.project-title').empty();
      saveCurrentPageDimensions();
      window.currentProject = this.model;
    } else {
      $('.project-title').empty();
      window.currentProject = this.model;
    };

    this.model.get('pages').fetch({silent: true});

    $($('.project-title')[0]).text(window.currentProject.get('name'));

    store.clear(); 
    setEditableElements();
    return this;
  },

  editProjectName: function() {

    setEditableElements();
  },

  deleteProject: function() {
    console.log('deleted project: '+this.model.get('id'));
    this.model.destroy();
    if (window.currentProject === this.model){
      $('.project-title').empty();
      $('.surface').empty(); 
    }
    window.currentProject = null;
  }
});
