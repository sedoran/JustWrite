window.JustWrite = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var projects = new JustWrite.Collections.ProjectCollection({});
    var projectListView = new JustWrite.Views.ProjectListView({
      collection: projects,
      el: $('.project-list')
    });

    window.currentProject = null;

    projects.fetch({success: function(){
      projectListView.render();
    }});

    function ghostClick() {
      $('.ghost').click(function(e) {
        var left = (e.pageX-10).toString() + 'px';
        var top = (e.pageY-10).toString() + 'px';
        if (window.currentProject != null){
          var pages = window.currentProject.get('pages');
          pages.create({name: 'Grace Jones', left: left, top: top});
          this.remove();
        } else {
          console.log('twitty!!')
          newProject = projects.create({name: "New blahhh"});
          window.currentProject = newProject;
          var pages = window.currentProject.get('pages');
          pages.create({name: 'Conway Twitty', left: left, top: top});
          this.remove();
        };
      });
    };

  $('body').mousemove(function(e){
    $('.ghost').offset({left:e.pageX-10,top:e.pageY-10});
  });

  $('.new-page').mouseup(function(e){
    $('body').append('<div class="ghost">');
    var ghost = $('.ghost');
    ghost.offset({left:e.pageX-10,top:e.pageY-10}).css({display: 'inline-block'});
    ghostClick();
  }); 

  $('.new-project').click(function() {
    console.log('new project')
    projects.create({name: "New Project"})
  });


  // setInterval(function() {
  //   if (window.currentProject != null){
  //     console.log('auto saving')
  //     var pages = window.currentProject.get('pages').models;
  //     _.each(pages, function(page) {
  //       page.save();
  //     });        
  //   };
  // }, 30000);


  } // end of initialize fn
}; // end of object definition

$(document).ready(function(){
  JustWrite.initialize();  
});
