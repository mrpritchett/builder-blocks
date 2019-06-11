<?php
/**
 *
 */
class Builder_Blocks_Filters {
	/**
	 *
	 */
	public static function init() {
		add_filter( 'block_categories', [ self::class, 'register_custom_block_category' ], 10, 2 );
	}

	/**
	 * Register Custom Block Category
	 */
	public static function register_custom_block_category( $categories, $post ) {
		return array_merge( $categories, [ [ 'slug'  => 'builder-blocks', 'title' => 'Builder Blocks', ] ] );
	}
}