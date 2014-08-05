function setEventListeners() {

  setHelpContainerClick();

  $('.help-icon').click(function() {
    if ($(".help-container").is(":visible")){
    } else {
      $('.help-container').fadeIn(250, function() {
        setHelpContainerClick();
      });
    };
  });

  function setHelpContainerClick() {
   if($('.help-container').is(':visible')){
     $('.help-container').click(function() {
      $('.help-container').fadeOut(150, function() {
        $('help-container').unbind('click');
      });
    })
   };
  }

  $('body').droppable({
    drop: function(event, ui) {saveCurrentPageDimensions()}
  });

  $( ".page" ).on("resizestop", function() {
    console.log('boom')
  });

  $('.drop-down').click(function() {
    if ($('.project-drop-down').is(':visible')){

      $('.project-drop-down').hide('slide', {direction: "up"}, 50, function() {

        $('.project-arrow').removeClass('fa-angle-up').addClass('fa-angle-down');
        $('.menu-arrow').removeClass('fa-angle-up').addClass('fa-angle-down');
        $('.menu').hide('slide', {direction: "up"}, 50);

      });

    } else if ($('.menu').is(':visible')){
      $('.menu').hide('slide', {direction: "up"}, 100, function() {

        $('.menu-arrow').removeClass('fa-angle-up').addClass('fa-angle-down');
      });

    } else {
      $('.menu').show('slide', {direction: "up"}, 100, function() {

        $('.menu-arrow').removeClass('fa-angle-down').addClass('fa-angle-up');

        if ($('.menu').is(':visible')) {
          $('.menu').css('display', 'inline-block');
        };

      });
    };
  }); //end menu slide


  $('.projects').click(function() {

    if ($('.project-drop-down').is(':visible')){
      $('.project-drop-down').hide('slide', {direction: "up"}, 250, function() {

        $('.project-arrow').removeClass('fa-angle-up').addClass('fa-angle-down');
      });

    } else { 
      $('.project-drop-down').show('slide', {direction: "up"}, 250, function() {

        if ($('.project-drop-down').is(':visible')){
          $('.project-drop-down').css('position', 'absolute');
        };

        $('.project-arrow').removeClass('fa-angle-down').addClass('fa-angle-up');
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

      $('.page').remove();

      window.currentProject = window.projects.create({name: "New Project..."});
    } else {
      $('project-title').empty();

      window.currentProject = window.projects.create({name: "New Project..."});
    };

    $($('.project-title')[0]).text(window.currentProject.get('name'));

    store.clear();
    setEditableElements();
  });


    // $('.page').mousedown(function(e) {
    //   debugger;
    //   $(e.target).css('cursor', 'move');
    // });

    // $('.page').mouseup(function(e) {
    //   $(e.target).css('cursor', 'auto');
    // });

$('body').click(function(e) {
  console.log(e.target);
})
}