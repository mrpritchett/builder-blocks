import RestaurantMenu from './blocks/RestaurantMenu/RestaurantMenu'
import MenuItem from './blocks/MenuItem/MenuItem'

const { registerBlockType } = wp.blocks

registerBlockType('builder-blocks/restaurantmenu', RestaurantMenu)
registerBlockType('builder-blocks/menuitem', MenuItem)
