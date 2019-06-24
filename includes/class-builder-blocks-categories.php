<?php

class Builder_Blocks_Categories {
	/**
	 *
	 */
	public static function init() {
		add_filter( 'block_categories', [ self::class, 'custom_category' ], 10, 2 );
	}

	/**
	 *
	 */
	public static function custom_category( $categories, $post ) {
		return array_merge(
			$categories,
			[
				[
					'slug'  => 'builder-blocks',
					'title' => 'Builder Blocks',
				],
			]
		);
	}
}