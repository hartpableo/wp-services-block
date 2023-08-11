<?php
/**
 * Plugin Name:       [Hart] Custom Services Block
 * Description:       A customized block that presents/displays a brand/company's services.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Hart Pableo
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hart-services-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_hart_services_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_hart_services_block_block_init' );

/**
 * Custom Image Sizes
 */
function hart_services_block_add_image_sizes() {
	if ( ! current_theme_supports( 'post-thumbnails' ) ) {
		add_theme_support( 'post-thumbnails' );
	}
	add_image_size('service_image_desktop', 790, 780, true);
  add_image_size('service_image_mobile', 690, 480, true);
}
add_action( 'after_setup_theme', 'hart_services_block_add_image_sizes' );

function hart_services_block_custom_sizes( $sizes ) {
  return array_merge( $sizes, array(
    'service_image_desktop' => 'Desktop: Service Image',
		'service_image_mobile' => 'Mobile: Service Image',
  ) );
}
add_filter( 'image_size_names_choose', 'hart_services_block_custom_sizes' );
