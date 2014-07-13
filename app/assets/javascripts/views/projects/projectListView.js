
JustWrite.Views.ProjectListView = Backbone.View.extend({
  initialize: function() {
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
    })
    return this;
  }
});