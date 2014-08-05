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

      console.log('saved current dimensions to db: '+page.get('id'));
    });

    pages.sync("update", pages, {success: function() {
      console.log('pages for project '+window.currentProject.get('id')+' have been updated in the DB')
    }});
  };
}; // end of saveCurrentPageDimensions


function getActivePage(pageID) {
  var activePage = _.find(window.currentProject.get('pages').models, function(page) {
    return page.id === pageID;
  });
  return activePage;
}

function autoSavePageContent() {
  setInterval(function() {

    if ($('.page-text-area').length != 0) { 
      var enteredText = $('.page-text-area').val();
      
      var pageID = parseInt($($('.page-text-area')[0]).parents('.page')[0].id);
      
      store.set(pageID, enteredText);
      console.log('is it stored? Who knows??')
    };
  }, 5000);

}; // end of autoSavePageContent


function saveHTMLText(enteredText, pageID) {
  var enteredTextHTML = enteredText.replace(/(?:\r\n|\r|\n)/g, '<br>');

  var activePage = getActivePage(pageID);

  activePage.save({text: enteredTextHTML},
            {success: function(page, response) {
              console.log('***page TEXT successfully saved for page id: '+page.id);
            }}
            );
};// end of saveHTMlText



function savePageHeader(enteredText, pageID) {

  var activePage = getActivePage(pageID);

  if (enteredText.match(/\S/g) !== null){
    activePage.save(
      {name: enteredText},
      {success: function(page, response) {
        console.log('***page HEADER successfully saved for page id: '+page.id);
        }
      }); 
  } else {
    activePage.save(
      {name: "Page Title..."},
      {success: function(page, response) {
        console.log('***page HEADER saved with DEFAULT text for page id: '+page.id);
        }
      });
  };
};// end of savePageHeader


function saveNewPage(pages, left, top) {
  pages.create(
  { 
    name: 'Page Title...', 
    text: "Click anywhere in this window to start writing...", 
    left: left, 
    top: top 
  },
  {
    success: function(page, response) {
      console.log('created page has been saved, id: '+page.get('id'))
      setEditableElements();
      saveCurrentPageDimensions();
    }
  }
  );
}; //end of savePage

