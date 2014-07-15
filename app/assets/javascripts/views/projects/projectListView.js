var JustWrite = JustWrite || { Models: {}, Views: {}, Collections: {} };

JustWrite.Views.ProjectListView = Backbone.View.extend({
  initialize: function() {
    this.collection.fetch();
    this.listenTo(this.collection, 'add', this.renderProject);
    this.listenTo(this.collection, 'change', this.render);
  },
  render: function() {
    var that = this;
    this.$el.empty();
    _.each(this.collection.models, function(project) {
      var projectView = new JustWrite.Views.ProjectView({
        model: project
      });
      that.$el.append(projectView.render().el)
    });
    return this;
    console.log('creating project list view')
  },
  renderProject: function(project) {
    var projectView = new JustWrite.Views.ProjectView({model: project});
    this.$el.append(projectView.render().el)
    return this;
  }
});