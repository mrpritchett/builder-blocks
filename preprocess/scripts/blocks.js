import RestaurantMenu from './blocks/RestaurantMenu/RestaurantMenu'
import MenuItem from './blocks/MenuItem/MenuItem'

const { registerBlockType } = wp.blocks

registerBlockType('wp-blocks-cloud/restaurantmenu', RestaurantMenu)
registerBlockType('wp-blocks-cloud/menuitem', MenuItem)
