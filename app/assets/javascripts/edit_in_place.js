function setEditableElements() {
  
  if (window.currentProject != null && window.currentProject.get('pages').length > 0){

    var projectID = window.currentProject.get('id');
    var pageHeaders = $('.page-header');
    var pageContents = $('.text');

    $.each(pageHeaders, function(i, header) {
      var pageID = parseInt(header.parentElement.id);

      $(this).editInPlace({

        callback: function(unused, enteredText) {

          var page = _.find(window.currentProject.get('pages').models, function(page) {
            return page.id === pageID;
          });

          page.save({name: enteredText}, 
                    {success: function(page, response) {console.log('page name successfully changed!');}}
          );
        }
      });
    }); // end of pageHeaders

    $.each(pageContents, function(i, page) {
      var pageID = parseInt(page.parentElement.id);

      $(this).editInPlace({

        field_type: "textarea",
        default_text: "Click anywher in this window to start writing...",

        callback: function(unused, enteredText) {
          
          var page = _.find(window.currentProject.get('pages').models, function(page) {
            return page.id === pageID;
          });

          page.save({text: enteredText},
                    {success: function(page, response) {
                      console.log('page text successfully saved!');}}
          );

        }
      });
    }); // end of pageContents

  }; // end of if

}; //end of setEditableElements
