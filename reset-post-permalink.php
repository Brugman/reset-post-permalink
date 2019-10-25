<?php

/**
 * Plugin Name: Reset Post Permalink
 * Description: Adds a button to reset the permalink of a post, based on the post title.
 * Version: 1.0.0
 * Plugin URI: https://github.com/Brugman/reset-post-permalink
 * Author: Tim Brugman
 * Author URI: https://timbr.dev/
 * Text Domain: reset-post-permalink
 */

if ( !defined( 'ABSPATH' ) )
    exit;

// Load scripts on the backend.
add_action( 'admin_enqueue_scripts', function () {
    // Only enqueue on Edit Post pages.
    global $pagenow;
    if ( $pagenow != 'post.php' || $_GET['action'] != 'edit' )
        return;
    // Register.
    wp_register_script(
        'reset-post-permalink',
        plugin_dir_url( __FILE__ ).'reset-post-permalink.js',
        ['jquery'],
        '1.0.0',
        true
    );
    // Enqueue.
    wp_enqueue_script( 'reset-post-permalink' );
});

