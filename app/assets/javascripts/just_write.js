window.JustWrite = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    var projects = new JustWrite.Collections.ProjectCollection({});
    var projectListView = new JustWrite.Views.ProjectListView({
      collection: projects,
      el: $('.project-list')
    });

    function ghostClick() {
      $('.ghost').click(function(e) {
        console.log('bam');
        var pages = window.currentProject.attributes.pages;
        var left = (e.pageX-10).toString() + 'px';
        var top = (e.pageY-10).toString() + 'px';
        pages.create({name: 'Grace Jones', left: left, top: top});
        this.remove();
      });
    };

    projects.fetch({success: function(){
      projectListView.render();
    }});

    $('.new-page').mouseup(function(e){
      $('body').append('<div class="ghost">');
      var ghost = $('.ghost');
      ghost.offset({left:e.pageX-10,top:e.pageY-10}).css({display: 'inline-block'});
      ghostClick();
    }); 

    $('body').mousemove(function(e){
      $('.ghost').offset({left:e.pageX-10,top:e.pageY-10});
    });


  } // end of initialize fn
}; // end of object definition

$(document).ready(function(){
  JustWrite.initialize();  
});
