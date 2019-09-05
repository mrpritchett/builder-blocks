<?php
/**
 * Adds nav menu routes to WP REST API
 *
 * Main footer file for the theme.
 *
 * @package    WordPress
 * @subpackage Builder Blocks
 * @author     Builder Blocks <info@builderblocks.cloud>
 * @since      0.2.0
 */

/**
 * Adds nav menu routes to WP REST API
 *
 * @since v0.2.0
 * @return void
 */
class Builder_Blocks_REST_API_Nav_Routes {
	/**
	 * Primary method
	 *
	 * @since 0.2.0
	 * @return void
	 */
	public static function init() {
		add_action( 'rest_api_init', [ self::class, 'register_routes' ] );
	}

	/**
	 * Registers the routes
	 *
	 * @since 0.2.0
	 * @return void
	 */
	public static function register_routes() {
		$namespace = 'builder_blocks';

		register_rest_route(
			$namespace,
			'/menus',
			[
				'methods'  => 'GET',
				'callback' => [ self::class, 'get_menus' ],
			]
		);

		register_rest_route(
			$namespace,
			'/menus/(?P<id>[a-zA-Z0-9_-]+)',
			[
				'methods'  => 'GET',
				'callback' => [ self::class, 'get_menu' ],
			]
		);
	}

	/**
	 * Get menu's data from his id.
	 *
	 * @param array $data WP REST API data variable.
	 *
	 * @return object Menu's data with his items
	 */
	public static function get_menu( $data ) {
		if ( has_nav_menu( $data['id'] ) ) {
			$menu = self::get_menu_data( $data );
		} elseif ( is_nav_menu( $data['id'] ) ) {
			if ( is_int( $data['id'] ) ) {
				$id = $data['id'];
			} else {
				$id = wp_get_nav_menu_object( $data['id'] );
			}

			$menu        = get_term( $id );
			$menu->items = self::get_menu_items( $id );
		} else {
			return new WP_Error( 'not_found', 'No menu has been found with this id or slug: `' . $data['id'] . '`. Please ensure you passed an existing menu ID, menu slug, location ID or location slug.', array( 'status' => 404 ) );
		}

		return $menu;
	}

	/**
	 * Get all registered menus
	 *
	 * @since 0.2.0
	 * @return array List of menus with slug and description
	 */
	public static function get_menus() {
		$menus = get_terms( 'nav_menu', array( 'hide_empty' => true ) );

		return $menus;
	}

	/**
	 * Retrieve items for a specific menu
	 *
	 * @param int $id Menu id.
	 *
	 * @return array List of menu items
	 */
	public static function get_menu_items( $id ) {
		$menu_items  = wp_get_nav_menu_items( $id );
		$child_items = [];

		foreach ( $menu_items as $key => $item ) {
			if ( $item->menu_item_parent ) {
				array_push( $child_items, $item );
				unset( $menu_items[ $key ] );
			}
		}

		$number_of_children = count( $child_items );

		do {
			foreach ( $child_items as $key => $child_item ) {
				if ( self::dna_test( $menu_items, $child_item ) ) {
					unset( $child_items[ $key ] );
				}
			}
		} while ( $number_of_children );

		return array_values( $menu_items );
	}

	/**
	 * Get menu's data from his id
	 *
	 * @param array $data WP REST API data variable.
	 *
	 * @return object Menu's data with his items
	 */
	public static function get_menu_data( $data ) {
		$menu = new stdClass();

		if ( has_nav_menu( $data['id'] ) ) {
			$menu        = get_term( $locations[ $data['id'] ] );
			$menu->items = self::get_menu_items( $locations[ $data['id'] ] );
		} else {
			return new WP_Error( 'not_found', 'No location has been found with this id or slug: `' . $data['id'] . '`. Please ensure you passed an existing location ID or location slug.', array( 'status' => 404 ) );
		}

		return $menu;
	}

	/**
	 * Check if a menu item is child of one of the menu's element passed as reference
	 *
	 * @param array  $parents Menu's items.
	 * @param object $child Menu's item to check.
	 *
	 * @return bool True if the parent is found, false otherwise
	 */
	public static function dna_test( &$parents, $child ) {
		foreach ( $parents as $key => $item ) {
			if ( $child->menu_item_parent === $item->ID ) {
				if ( ! $item->child_items ) {
					$item->child_items = [];
				}
				array_push( $item->child_items, $child );
				return true;
			}

			if ( $item->child_items ) {
				if ( self::dna_test( $item->child_items, $child ) ) {
					return true;
				}
			}
		}

		return false;
	}
}
