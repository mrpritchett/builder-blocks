<?php
/**
 * Nav Block Render
 *
 * Adds nav block save function.
 *
 * @package    WordPress
 * @subpackage Builder Blocks
 * @author     Builder Blocks <info@builderblocks.cloud>
 * @since      0.2.0
 */

/**
 * Adds nav block save function.
 *
 * @since v0.2.0
 * @return void
 */
class Builder_Blocks_Nav_Block {
	/**
	 * Primary method
	 *
	 * @since 0.2.0
	 * @return void
	 */
	public static function init() {
		add_action( 'init', [ self::class, 'builder_blocks_nav_block_registration' ] );
	}

	/**
	 * Render Callback
	 *
	 * @since 0.2.0
	 *
	 * @param array $attributes the attributes passed from the block.
	 * @return string the markup to return.
	 */
	public static function builder_blocks_nav_block_render_callback( $attributes ) {
		$markup    = '';
		$menu_args = [
			'menu'            => $attributes['navMenu'],
			'menu_class'      => 'builder-blocks-nav-block-menu',
			'menu_id'         => '',
			'container'       => 'nav',
			'container_class' => 'builder-blocks-nav-block',
			'container_id'    => '',
		];
		ob_start();
		?>

		<?php wp_nav_menu( $menu_args ); ?>

		<?php
		$markup = ob_get_contents();

		ob_end_clean();

		return $markup;
	}

	/**
	 * Block Registration
	 *
	 * @since 0.2.0
	 *
	 * @return void
	 */
	public static function builder_blocks_nav_block_registration() {
		register_block_type(
			'builder-blocks/nav',
			[
				'editor_script'   => 'builder-blocks-blocks-js',
				'render_callback' => [ self::class, 'builder_blocks_nav_block_render_callback' ],
			]
		);

	}
}
