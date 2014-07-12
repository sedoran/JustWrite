JustWrite.Views.PageListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'all', this.render);
  },
  render: function() {
    var that = this;
    this.$el.empty(); // this will get an $el when it's called in app.js
    _.each(this.collection.models, function(page) {
      var pageView = new JustWrite.Views.PageView({
        model: page
      });
    that.$el.append(pageView.render().el);
    });
  return this;
  } 
});