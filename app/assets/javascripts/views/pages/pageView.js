var JustWrite = JustWrite || { Models: {}, Views: {}, Collections: {} };

JustWrite.Views.PageView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model, "destroy", this.remove);
  },

  template: JST['pages/pageTemplate'],
  render: function() {

    var that = this;

    var html = (this.template(this.model.attributes));
    this.$el.html(html);

    this.$el.css({
              left: this.model.get('left')+"px",
              top: this.model.get('top')+"px",
              height: this.model.get('height')+"px",
              width: this.model.get('width')+"px"
            });
            
    this.$el.attr('id', this.model.get('id'))
            .addClass('page')
            .draggable()
            .resizable({
              handles: {
                'ne': '#negrip',
                'se': '#segrip',
                'sw': '#swgrip',
                'nw': '#nwgrip'               
              }
            });           

    console.log("... page view is being created... id: "+this.$el.attr('id'));
    return this;
  },

  events: {
    'click button.delete': 'deletePage'
  },

  deletePage: function() {
    this.model.destroy();
    console.log('page was deleted: '+this.model.get('id'))
  }
});

