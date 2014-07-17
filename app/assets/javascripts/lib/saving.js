function saveCurrentPageDimensions(options) {
  if (window.currentProject != null && window.currentProject.get('pages').length > 0){

    var pages = window.currentProject.get('pages');

    _.each(pages.models, function(page) {

      var div = $('#'+page.get("id"));
      var top = (div.position().top).toString();
      var left = (div.position().left).toString();
      var height = (div.height()).toString();
      var width = (div.width()).toString();

      page.set({top: top, left: left, height: height, width: width}, {silent: true});

      console.log('saved current dimensions: '+page.get('id'));
    });

    pages.sync("update", pages, options);
  };
}; // end of saveCurrentPageDimensions


function autoSavePageContent() {
  setInterval(function() {

    if ($('.pageTextArea').length != 0) { 
      var enteredText = $('.pageTextArea').val();
      var pageID = parseInt($($('.pageTextArea')[0]).parents('.page')[0].id);
      store.set(pageID, enteredText);
      console.log('is it stored? Who knows??')
    };
  }, 5000);
}; // end of autoSavePageContent


function saveHTMLText(enteredText, pageID) {
  var enteredTextHTML = enteredText.replace(/(?:\r\n|\r|\n)/g, '<br>');

  var activePage = _.find(window.currentProject.get('pages').models, function(page) {
    return page.id === pageID;
  });

  activePage.save({text: enteredTextHTML},
            // {silent: true},
            {success: function(page, response) {
              console.log('***page text successfully saved: '+page.id);
            }}
  );
};// end of saveHTMlText


function savePage(pages, left, top) {
  pages.create(
    { 
      name: 'New Page', 
      text: "Click anywhere in this window to start writing...", 
      left: left, 
      top: top 
    },
    {
      success: function(page, response) {
        console.log('created page has been saved: '+page.get('id'))
        setEditableElements();
      }
    }
  );
}; //end of savePage

