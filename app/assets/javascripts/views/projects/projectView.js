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
    return this;
    // console.log('creating each project view')
  },
  events: {
    'click p.project-name': 'getPages',
    'click p.delete-project': 'deleteProject',
  },
  getPages: function() {
    this.model.get('pages').fetch();
    window.currentProject = this.model;
    return this;
  },
  deleteProject: function() {
    console.log('delete')
    this.model.destroy();
    $('.surface').empty();
    window.currentProject = null;
  }
});
