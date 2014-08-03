function setEditableElements() {

  if (window.currentProject != null && window.currentProject.get('pages').length > 0){

    var pageNames = $('.page-name');
    $.each(pageNames, function(i, name) {
      var pageID = parseInt(name.parentElement.parentElement.id);

      $(this).editInPlace({
        field_type: "text",
        default_text: "Page Title...",
        callback: function(unused, enteredText) {
          savePageHeader(enteredText, pageID)
        }
      });
    }); // end of pageHeaders

    var pageContents = $('.text');
    $.each(pageContents, function(i, page) {
      var pageID = parseInt(page.parentElement.id);

      $(this).editInPlace({
        use_html: true,
        field_type: "textarea",
        default_text: "Click anywhere in this window to start writing...",
        callback: function(unused, enteredText) {
          saveCurrentPageDimensions();
          saveHTMLText(enteredText, pageID);
        }
      });
    }); // end of pageContents

  }; // end of if

  if (window.currentProject != null && window.currentProject.get('pages').length >= 0){

    var projectName = $('.editable');

    projectName.editInPlace({
      // text_size: 18,
      default_text: "New Project...",
      callback: function(unused, enteredText) {
        var project = window.currentProject;
        project.save(
          {name: enteredText},
          {success: function(project, response) {
            $('.project-title').html(project.get('name'))
            console.log('$$$project NAME saved project id: '+ project.get('id'))
            } 
          })
      }
    }); // end of projectName

  }; // end of if

}; //end of setEditableElements
