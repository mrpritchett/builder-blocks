<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://pritchett.media
 * @since             1.0.0
 * @package           Builder_Blocks
 *
 * @wordpress-plugin
 * Plugin Name:       Builder Blocks
 * Plugin URI:        https://builderblocks.cloud
 * Description:       Adds a group of blocks for the new Gutenberg editor.
 * Version:           1.0.0
 * Author:            Pritchett Media
 * Author URI:        https://pritchett.media
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       builder-blocks
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'BUILDERBLOCKS', '1.0.0' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-builder-blocks-assets.php';

WP_Blocks_Cloud_Assets::init();
