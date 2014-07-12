JustWrite.Views.PageListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'all', this.render);
  },
  render: function() {
    var that = this;
    this.$el.empty(); 
    var counter = 0;
    _.each(this.collection.models, function(page, counter) {
      page.placeNumber = counter;
      // debugger;
      var pageView = new JustWrite.Views.PageView({
        model: page
      });
      that.$el.append(pageView.render().el);
      counter++;
    });
  return this;
  } 
});