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

    $('.new-page').mouseup(function(e){
      $('body').append('<div class="ghost">');
      var ghost = $('.ghost');
      ghost.offset({left:e.pageX-10,top:e.pageY-10}).css({display: 'inline-block'});
    }); 

    $('body').mousemove(function(e){
      $('.ghost').offset({left:e.pageX-10,top:e.pageY-10});
    });

    $('.ghost').click(function(e){
      console.log('ghost click')
      pages.create({name: 'New Page', left: e.pageX-10, top: e.pageY-10});
      this.remove();
    });

  } // end of initialize fn
}; // end of object definition

$(document).ready(function(){
  JustWrite.initialize();  
});
