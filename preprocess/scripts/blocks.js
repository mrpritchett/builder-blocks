import Section from './blocks/Section/Section'
// import RestaurantMenu from './blocks/RestaurantMenu/RestaurantMenu'
// import MenuItem from './blocks/MenuItem/MenuItem'
// import Testimonials from './blocks/Testimonials'
import Hero from './blocks/Hero/Hero'
import Menu from './blocks/Menu/Menu'

const { registerBlockType } = wp.blocks

registerBlockType('builder-blocks/section', Section)
// registerBlockType('builder-blocks/restaurantmenu', RestaurantMenu)
// registerBlockType('builder-blocks/menuitem', MenuItem)
// registerBlockType('builder-blocks/testimonials', Testimonials)
registerBlockType('builder-blocks/hero', Hero)
registerBlockType('builder-blocks/menu', Menu)