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
    'click p.project-title': 'editProjectName',
    'click p.delete-project': 'deleteProject',
  },

  getPages: function() {    
    if (window.currentProject != null) {
      $('.project-title').remove();
      saveCurrentPageDimensions();
      window.currentProject = this.model;
    } else {
      window.currentProject = this.model;
    };

    this.model.get('pages').fetch({silent: true});

    $('header').append('<h2 class="project-title title editable">');
               
    $('.project-title').html(window.currentProject.get('name'));

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
    $('.surface').empty();
    window.currentProject = null;
  }
});
