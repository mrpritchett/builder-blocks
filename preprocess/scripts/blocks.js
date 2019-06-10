import RestaurantMenu from './blocks/RestaurantMenu/RestaurantMenu'
import MenuItem from './blocks/MenuItem/MenuItem'
import Testimonials from './blocks/Testimonials'

const { registerBlockType } = wp.blocks

registerBlockType('builder-blocks/restaurantmenu', RestaurantMenu)
registerBlockType('builder-blocks/menuitem', MenuItem)
registerBlockType('builder-blocks/testimonials', Testimonials)
