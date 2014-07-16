window.JustWrite = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('application initializing');

    window.projects = new JustWrite.Collections.ProjectCollection({});
    
    var projectListView = new JustWrite.Views.ProjectListView({
      collection: projects,
      el: $('.project-list')
    });


    window.currentProject = null;


    function ghostClick() {
      $('.ghost').click(function(e) {

        var left = (e.pageX-10).toString();
        var top = (e.pageY-10).toString();

        if (window.currentProject != null) {
          var pages = window.currentProject.get('pages');
          var newPage = pages.create({ name: 'New Page', left: left, top: top });
          setEditableElements();          
        } else {
          window.currentProject = projects.create(
            { name: "New Project" }, 
            { success: function(data) {
              var pages = window.currentProject.get('pages');
              pages.url = '/projects/'+data.get('id')+'/pages';
              pages.create({ name: 'New Page', left: left, top: top });
              setEditableElements();
            }
          });
        };
        this.remove();
        $('body').unbind('mousemove');
      });
    };


    function ghostTrack() {
      $('body').mousemove(function(e) {
        $('.ghost').offset({left: e.pageX-10, top: e.pageY-10});
      });
    };


    $('.new-page').mouseup(function(e){

      saveCurrentPages();

      $('body').append('<div class="ghost">');
      var ghost = $('.ghost');
      ghost.offset({left:e.pageX-10,top:e.pageY-10})
      .css({display: 'inline-block'});

      ghostTrack();
      ghostClick();



    }); 


    $('.new-project').click(function() {
      window.projects.create({name: "New Project"})
    });


  } // end of initialize fn
}; // end of object definition

function saveCurrentPages() {

 if (window.currentProject != null && window.currentProject.get('pages').length > 0){

  var pages = window.currentProject.get('pages');

  _.each(pages.models, function(page) {

    var div = $('#'+page.get("id"));
    var top = (div.position().top).toString();
    var left = (div.position().left).toString();
    var height = (div.height()).toString();
    var width = (div.width()).toString();

    page.set({top: top, left: left, height: height, width: width}, {silent: true});

    console.log('saved saveCurrentPages fn: '+page.get('id'));
  });

  pages.sync("update", pages);

};
};

function autoSavePageContent() {

  // setInterval(function() {
  //   if (window.currentProject != null){
  //     var pages = window.currentProject.get('pages').models;
  //     _.each(pages, function(page) {
  //       var div = $('#'+page.get('id'));
  //       var top = div.position().top;
  //       var left = div.position().left;
  //       var height = div.height();
  //       var width = div.width();
  //       page.set({top: top, left: left, height: height, width: width}, {silent: true});
  //       if (page.hasChanged()) {
  //         page.save({silent: true});
  //         console.log('auto saving')
  //       }
  //     });        
  //   };
  // }, 30000);

}