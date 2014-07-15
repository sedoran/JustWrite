var JustWrite = JustWrite || { Models: {}, Views: {}, Collections: {} };

JustWrite.Views.PageView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model, "destroy", this.remove);
    this.listenTo(this.model, "change", this.savePage)
  },
  template: JST['pages/pageTemplate'],
  render: function() {
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

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        console.log(mutation.attributeName);
      });
    });

    var config = { attributes: true };


    observer.observe(this.el, config);

    console.log("... page view is being rendered... ");
    return this;
  },
  savePage: function(page) {
    console.log('saving page')
    page.save()
  }, 
  events: {
    'click button.delete': 'deletePage'
  },
  deletePage: function() {
    this.model.destroy();
  }
});

