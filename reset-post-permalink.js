(function() {

    let editSlugButtons = document.querySelector('#edit-slug-buttons');
    let editSlugBox     = document.querySelector('#edit-slug-box');

    if ( editSlugButtons && editSlugBox ) {
        // Add button.
        let resetPermalinkButton = document.createElement('button');
        resetPermalinkButton.innerHTML = 'Reset Permalink';
        resetPermalinkButton.classList.add('js-reset-post-permalink', 'button', 'button-small');
        resetPermalinkButton.style.marginLeft = '10px';
        editSlugButtons.appendChild( resetPermalinkButton );

        // On click.
        resetPermalinkButton.addEventListener('click', function ( event ) {
            // Prevent default.
            event.stopPropagation();
            event.preventDefault();
            // Empty post_name.
            document.querySelector('input[name="post_name"]').value = '';
            // Display feedback.
            editSlugBox.innerHTML = 'Done. Save the post to get the new permalink.';
        });
    }

})();