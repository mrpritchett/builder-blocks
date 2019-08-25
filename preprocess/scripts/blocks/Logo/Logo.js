import edit from './edit'
import save from './save'

const { __ } = wp.i18n

export default {
  title: __('Logo'),
  description: __('A block that displays the site title & description or an image logo.'),
  category: 'builder-blocks',
  icon: 'excerpt-view',
  attributes: {
    logoType: {
      type: 'string',
      default: 'text'
    },
    logoImage: {
      type: 'object',
      default: {
        alt: '',
        url: '',
        id: 0,
      },
    },
    logoTitle: {
      type: 'string',
      default: 'Site Title',
    },
    logoDescription: {
      type: 'string',
      default: 'Site Description',
    },
    // Universal Attributes
    padding: {
      type: 'object',
      default: {
        left: '20',
        top: '20',
        right: '20',
        bottom: '20',
      },
    },
    margin: {
      type: 'object',
      default: {
        left: '0',
        top: '0',
        right: '0',
        bottom: '0',
      },
    },
    backgroundImage: {
      type: 'object',
      default: {
        alt: '',
        url: '',
        id: 0,
      },
    },
    backgroundColor: {
      type: 'object',
      default: {
        r: 255,
        g: 255,
        b: 255,
        a: 1.0,
      },
    },
    backgroundSize: {
      type: 'string',
      default: 'auto',
    },
    backgroundPosition: {
      type: 'string',
      default: 'top left',
    },
    backgroundRepeat: {
      type: 'string',
      default: 'no-repeat',
    },
    borderWidth: {
      type: 'number',
      default: 0,
    },
    borderStyle: {
      type: 'string',
      default: 'solid',
    },
    borderColor: {
      type: 'object',
      default: {
        r: 255,
        g: 255,
        b: 255,
        a: 1.0,
      },
    },
  },
  edit,
  save
}
