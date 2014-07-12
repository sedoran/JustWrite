window.JustWrite = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    pages = new JustWrite.Collections.PageCollection({});
    pageListView = new JustWrite.Views.PageListView({
      el: $('.surface'),
      collection: pages
    });

    pages.fetch();

    $('.new-page').mouseup(function() {
      pages.create({name: 'New Page'}); //will be pages.create
    });
  } // end of initialize fn
}; // end of object definition

$(document).ready(function(){
  JustWrite.initialize();  
});
