window.JustWrite = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    projects = new JustWrite.Collections.ProjectCollection({});
    projectListView = new JustWrite.Views.ProjectListView({
      collection: projects,
      el: $('.project-list')
    });

    projects.fetch({success: function(){
      projectListView.render();
    }});

    // TODO: CHANGE THE FUNCTION OF THIS BUTTON
    // TO INCLUDE GHOST DIV!!
    // $('.new-page').mouseup(function() {
    //   pages.create({name: 'New Page'}); 
    // }); 

  } // end of initialize fn
}; // end of object definition

$(document).ready(function(){
  JustWrite.initialize();  
});
