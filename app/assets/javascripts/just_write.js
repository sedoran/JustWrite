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

    $('.new-page').mouseup(function() {
      console.log('boo')
      pages.add({name: ''}); //will be pages.create
    });
  } // end of initialize fn
}; // end of object definition

$(document).ready(function(){
  JustWrite.initialize();  
});
