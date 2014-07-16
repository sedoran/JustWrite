function setEditableElements() {
  
  if (window.currentProject != null && window.currentProject.get('pages').length > 0){

    var pageHeaders = $('.page-header');
    $.each(pageHeaders, function(i, header) {
      var pageID = parseInt(header.parentElement.id);

      $(this).editInPlace({
        field_type: "text",
        default_text: "New Page...",
        callback: function(unused, enteredText) {
          saveHTMLText(enteredText, pageID)
        }
      });
    }); // end of pageHeaders

    var pageContents = $('.text');
    $.each(pageContents, function(i, page) {
      var pageID = parseInt(page.parentElement.id);

      $(this).editInPlace({
        field_type: "textarea",
        default_text: "Click anywhere in this window to start writing...",
        callback: function(unused, enteredText) {
          saveHTMLText(enteredText, pageID);
        }
      });
    }); // end of pageContents

  }; // end of if
}; //end of setEditableElements
