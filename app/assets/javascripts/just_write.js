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


    $('.drop-down').click(function() {
      if ($('.project-drop-down').is(':visible')){
        $('.project-drop-down').hide('slide', {direction: "up"}, '400', function() {
           $('.menu').hide('slide', {direction: "up"}, '400');
        });
      } else 
      if ($('.menu').is(':visible')){
        $('.menu').hide('slide', {direction: "up"}, '400');
      } else {
        $('.menu').show('slide', {direction: "up"}, '400', function() {
          if ($('.menu').is(':visible')) {
            $('.menu').css('display', 'inline-block');
          };
        });
      };

    }); //end menu slide


    $('.projects').click(function() {

      if ($('.project-drop-down').is(':visible')){
        $('.project-drop-down').hide('slide', {direction: "up"}, '400');
      } else { 
        $('.project-drop-down').show('slide', {direction: "up"}, '400', function() {
          if ($('.project-drop-down').is(':visible')){
            $('.project-drop-down').css('position', 'absolute');
          };
        });
      };

    }); // end project slide


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

        window.currentProject = window.projects.create({name: "New Project..."});
      } else {
        $('project-title').empty();

        window.currentProject = window.projects.create({name: "New Project..."});
      };

      $($('.project-title')[0]).text(window.currentProject.get('name'));

      store.clear();
      setEditableElements();

    });

    $('body').click(function(e) {
      console.log(e.target);
    })

  } // end of initialize fn
}; // end of object definition


