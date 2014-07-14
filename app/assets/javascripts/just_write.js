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

    projects.fetch({success: function(){
      projectListView.render();
    }});

    function ghostClick() {
      $('.ghost').click(function(e) {
        var pages = window.currentProject.attributes.pages;
        var left = (e.pageX-10).toString() + 'px';
        var top = (e.pageY-10).toString() + 'px';
        pages.create({name: 'Grace Jones', left: left, top: top});
        this.remove();
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


    setInterval(function() {
      console.log('boom')
      var pages = window.currentProject.get('pages').models;
      _.each(pages, function(page) {
        page.save();
      })
    }, 3000);


  } // end of initialize fn
}; // end of object definition

$(document).ready(function(){
  JustWrite.initialize();  
});
