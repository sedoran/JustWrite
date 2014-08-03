window.JustWrite = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('application initializing');

    window.projects = new JustWrite.Collections.ProjectCollection({});
    window.currentProject = null;

    var projectListView = new JustWrite.Views.ProjectListView({
      collection: projects,
      el: $('.project-list')
    });

    setEventListeners();

  } // end of initialize fn
}; // end of object definition


