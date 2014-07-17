window.JustWrite = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('application initializing');

    window.projects = new JustWrite.Collections.ProjectCollection({});
    window.currentProject = null;

    var projectListView = new JustWrite.Views.ProjectListView({
      collection: projects,
      el: $('.projects-list')
    });


    $('.new-page').mouseup(function(e){
      saveCurrentPageDimensions();

      $('body').append('<div class="ghost">');
      var ghost = $('.ghost');
      ghost.offset({left:e.pageX-10,top:e.pageY-10})
      .css({display: 'inline-block'});

      ghostTrack();
      ghostClick();
    }); 


    $('.new-project').click(function() {
      window.projects.create({name: "New Project"});
    });

  } // end of initialize fn
}; // end of object definition


