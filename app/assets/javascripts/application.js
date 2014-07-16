// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.all
//= require underscore
//= require backbone
//= jquery-migrate-1.2.1
//= jquery.editinplace
//= require just_write
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

// Surface = {
//   saveCurrentProject: function() {},
//   openProject: function(project) {},
//   closeCurentProject: function() {},
// };

// $('.project-name').on('click', function(e) {
//   var projectName = $(e).data('name');
//   Surface.saveCurrentProject();
//   Surface.closeCurentProject();
//   Surface.openProject(projectName);
// })