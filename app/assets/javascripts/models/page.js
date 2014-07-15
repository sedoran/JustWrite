var JustWrite = JustWrite || { Models: {}, Views: {}, Collections: {} };

JustWrite.Models.Page = Backbone.Model.extend({
  initialize: function() {
    this.on('change:left', function(model, left) {
      console.log('barf!')
      this.save({left: this.get('left')});
    }),
    this.on('change:top', function(model, top) {
      console.log('barf2!')
      this.save({top: this.get('top')});
    }),
    this.on('change:height', function(model, height) {
      console.log('barf3!')
      this.save({height: this.get('height')});
    }),
    this.on('change:width', function(model, width) {
      console.log('barf4!')
      this.save({width: this.get('width')});
    }),
    this.on('change:name', function(model, name) {
      console.log('barf5!')
      this.save({name: this.get('name')});
    })
  }
});
