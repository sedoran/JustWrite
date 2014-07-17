function ghostClick() {
  $('.ghost').click(function(e) {

    var left = (e.pageX-10).toString();
    var top = (e.pageY-10).toString();

    if (window.currentProject != null) {
      var pages = window.currentProject.get('pages');

      savePage(pages, left, top);  
    } else {
      window.currentProject = projects.create(
        { name: "New Project" }, 
        { success: function(newProject) {
          var pages = window.currentProject.get('pages');
          pages.url = '/projects/'+newProject.get('id')+'/pages';

          savePage(pages, left, top);
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