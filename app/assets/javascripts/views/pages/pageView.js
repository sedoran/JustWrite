var JustWrite = JustWrite || { Models: {}, Views: {}, Collections: {} };

JustWrite.Views.PageView = Backbone.View.extend({
  initialize: function() {
    this.listenToOnce(this.model, "change", this.render);
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
    .draggable(
      {stack: ".page"},
      {containment: "parent"}
      )
    .resizable(
      {handles: {'se': '#segrip'}},
      {stop: function() {
        saveCurrentPageDimensions();
      }}
      );         
    console.log("... page view is being created... id: "+this.$el.attr('id'));
    return this;
  },

  events: {
    'click .page-delete': 'deletePage',
    'click .page-download': 'createTextFile'
  },

  deletePage: function() {
    var page = this.model;
    page.destroy();
    console.log('page was deleted: '+this.model.get('id'))
  },

  downloadFile: function(pageID, fileName, text) {
    var el = $("#"+pageID).children()[2];

    var oldText = $(el).html();
    

    $(el).html("<a class='download-link' href=''>" + oldText + "</a>");

    $(el).addClass('inactive-download').removeClass('page-download')

    $('.download-link').attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text)).attr('download', fileName);

    $('.download-link')[0].click();

    $(el).html(oldText);

    $('.inactive-download').addClass('page-download').removeClass('inactive-download');

    console.log('downloaded bitch');
  },


  createTextFile: function(e) {
    var that = this;


    var page = this.model;   
    var pageID = page.id; 
    var enteredText;

    if ($('.page-text-area').is(':visible')){
      enteredText = $('#'+pageID).find('.page-text-area').val();
    } else if ($('.text').is(':visible')){
      enteredText = $("#"+pageID).find('.text').text();
    };
    
    var enteredHTMLText = enteredText.replace(/(?:\r\n|\r|\n)/g, '<br>');

    page.save({text: enteredHTMLText}, {success: function() {
      console.log('saved bitch');
      page.sync("read", page, {success: function(pageJSON) {
        console.log("read bitch");

        var fileName = pageJSON.name.replace('.', '').replace(' ', '_')+".txt";
        var fileText = pageJSON.text.replace(/<br\s*[\/]?>/gi, '\n');

        that.downloadFile(pageID, fileName, fileText);
      }});
    }});  
  }
});

