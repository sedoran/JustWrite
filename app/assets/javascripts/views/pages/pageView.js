var JustWrite = JustWrite || { Models: {}, Views: {}, Collections: {} };

JustWrite.Views.PageView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "all", this.render);
    this.listenTo(this.model, "destroy", this.remove);
  },
  template: JST['pages/pageTemplate'],
  render: function() {
    var html = (this.template(this.model.attributes));
    this.$el.html(html)
            .addClass('page')
            .draggable()
            .resizable({
              handles: {
                'ne': '#negrip',
                'se': '#segrip',
                'sw': '#swgrip',
                'nw': '#nwgrip'               
              }
            })
            .css({position: 'absolute', 
                  left: this.model.attributes.left, 
                  top: this.model.attributes.top
                });
    return this;
  }, 
  events: {
    'click button.delete': 'deletePage'
  },
  deletePage: function() {
    this.model.destroy();
  }
});

