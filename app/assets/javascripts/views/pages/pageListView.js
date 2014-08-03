var JustWrite = JustWrite || { Models: {}, Views: {}, Collections: {} };

JustWrite.Views.PageListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderPage);
    // this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },
  render: function() {
    var that = this;
    $(".page").remove();
    
    _.each(this.collection.models, function(page) {
      var pageView = new JustWrite.Views.PageView({
        model: page
      });
      that.$el.append(pageView.render().el);
      console.log('RENDERING PAGE LIST VIEW FOR PROJECT: '+page.get('project_id'));
    });

    setEditableElements();
    return this;
  },
  renderPage: function(page) {
    var pageView = new JustWrite.Views.PageView({model: page});
    this.$el.append(pageView.render().el);
    console.log('rendering single page view: '+ pageView.model.get('id'));
    return this;
  }
});