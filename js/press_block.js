/**
 * @file
 * Allow insertion of uploaded file into CKeditor textarea.
 */

(function ($) {

  $(window).load(function() {
  	$('#edit-image-image-insert').bind('click', function(e) {
	  	e.preventDefault();

	  	var wrapperPre = "<img src='";
	  	var styles = "' style='width:400px; height: auto;'";
	  	var wrapperPost = " />";

	  	// Get value from Drupal URL image location fieldset.
	  	var newURL = $('#edit-image .fieldset-wrapper div').eq(1).html();

	  	// Append new image to CKEDITOR textarea.
	  	CKEDITOR.instances['edit-body-value'].insertHtml(wrapperPre + newURL + styles + wrapperPost);
	  });
  	console.log($('#block-menu-menu-submenu'));
  });

}(jQuery));
