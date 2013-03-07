<?php
/**
 * @file
 * Template for press_blocks view
 *
 * @param
 *  $fields : Fields of the block view node.
 *  $pb_id  : The id of the current press block. 
 */
?>

<div id='press-block-view-node'>
	<h1><?php print $fields['title']; ?></h1>
	<p><?php print $fields['body']; ?></p>
	<label>Path:</label><span><?php print $fields['page_path']; ?></span>
	<form action='/admin/structure/press_block/<?php print $pb_id; ?>/edit'>
		<button id='press-block-delete' class='form-submit'>Edit Block</button>
	</form>
</div>