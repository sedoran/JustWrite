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
      el: $('.project-list')
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
      if (window.currentProject != null && window.currentProject.get('pages').length > 0){
        $('.project-title').empty();

        saveCurrentPageDimensions();

        $('.surface').empty();

        window.currentProject = window.projects.create({name: "New Project Boo"});
      } else {
        $('project-title').empty();

        window.currentProject = window.projects.create({name: "New Project Bam"});
      };

      $($('.project-title')[0]).text(window.currentProject.get('name'));

      store.clear();
      setEditableElements();

    });

  } // end of initialize fn
}; // end of object definition


