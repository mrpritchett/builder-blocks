import Section from './blocks/Section/Section'
// import RestaurantMenu from './blocks/RestaurantMenu/RestaurantMenu'
// import MenuItem from './blocks/MenuItem/MenuItem'
// import Testimonials from './blocks/Testimonials'
import Hero from './blocks/Hero/Hero'
import Logo from './blocks/Logo/Logo'
import Nav from './blocks/Nav/Nav'

const { registerBlockType } = wp.blocks

registerBlockType('builder-blocks/section', Section)
// registerBlockType('builder-blocks/restaurantmenu', RestaurantMenu)
// registerBlockType('builder-blocks/menuitem', MenuItem)
// registerBlockType('builder-blocks/testimonials', Testimonials)
registerBlockType('builder-blocks/hero', Hero)
registerBlockType('builder-blocks/logo', Logo)
registerBlockType('builder-blocks/nav', Nav)
