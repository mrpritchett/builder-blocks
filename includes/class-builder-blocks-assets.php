<?php
/**
 * 
 */
class WP_Blocks_Cloud_Assets {
	/**
	 * 
	 */
	public static function init() {
		add_action( 'enqueue_block_editor_assets', [ self::class, 'register_gutenberg_scripts' ] );
		add_action( 'wp_enqueue_scripts', [ self::class, 'register_front_end_scripts' ] );
	}

	/**
	 * Register Block Front End Styles
	 */
	public static function register_front_end_scripts() {
		wp_enqueue_style(
			'builder-blocks-blocks-css',
			plugins_url( 'blocks/dist/main.css', plugin_dir_path( __FILE__ ) ),
			[],
			BUILDERBLOCKS
		);
	}

	/**
	 * 
	 */
	public static function register_gutenberg_scripts() {
		wp_enqueue_script( 
			'builder-blocks-blocks-js',
			plugins_url( 'blocks/dist/blocks.build.js', plugin_dir_path( __FILE__ ) ),
			[ 'wp-blocks', 'wp-i18n', 'wp-editor', 'wp-components' ],
			BUILDERBLOCKS
		);
		wp_enqueue_style(
			'builder-blocks-blocks-css',
			plugins_url( 'blocks/dist/main.css', plugin_dir_path( __FILE__ ) ),
			[],
			BUILDERBLOCKS
		);
	}
}