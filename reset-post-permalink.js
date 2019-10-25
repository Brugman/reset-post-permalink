(function($) {

    if ( $('#edit-slug-buttons').length && $('#edit-slug-box').length )
    {
        // Add button.
        $('#edit-slug-buttons').append( '<button type="button" class="js-reset-post-permalink button button-small" style="margin-left: 10px;">Reset Permalink</button>' );

        // On click.
        $('.js-reset-post-permalink').on( 'click', function ( event ) {
            // Prevent default.
            event.stopPropagation();
            event.preventDefault();
            // Empty post_name.
            $('input[name="post_name"]').val('');
            // Display feedback.
            $('#edit-slug-box').html( 'Done. Save the post to get the new permalink.' );
        });
    }

})( jQuery );