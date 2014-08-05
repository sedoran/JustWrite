function ghostClick() {
  $('.ghost').click(function(e) {

    var left = (e.pageX-10).toString();
    var top = (e.pageY-10).toString();

    if (window.currentProject != null) {
      var pages = window.currentProject.get('pages');

      saveNewPage(pages, left, top);  
    } else {
      window.currentProject = window.projects.create(
        { name: "New Project..." }, 
        { success: function(newProject) {
          var pages = window.currentProject.get('pages');
          var pagesUrl = function(){ 
            return '/projects/' + newProject.get('id') + '/pages'
          };
          pages.url = pagesUrl;

          saveNewPage(pages, left, top);
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