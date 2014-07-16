function setEditableElements() {
  
  if (window.currentProject != null && window.currentProject.get('pages').length > 0){

    var projectID = window.currentProject.get('id');
    var pageHeaders = $('.page-header');


    $.each(pageHeaders, function(i, header) {
      var pageID = parseInt(header.parentElement.id);

      $(this).editInPlace({
        callback: function(unused, enteredText) {

          var page = _.find(window.currentProject.get('pages').models, function(page) {
            return page.id === pageID;
          });

          page.save({name:enteredText}, {success: function(page, response) {
            debugger;
            console.log('page name successfully changed!')
          }});

        }
      });
    });

  };

}; //end of setEditableElements




  // '/projects/' + projectID + '/pages/' + pageID,
      // method: put,