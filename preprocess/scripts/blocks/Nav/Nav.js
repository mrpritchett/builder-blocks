import edit from './edit'

const { __ } = wp.i18n

export default {
  title: __('Nav'),
  description: __('A nav menu block.'),
  category: 'builder-blocks',
  icon: 'excerpt-view',
  attributes: {
    // Universal Attributes
    navMenu: {
      type: 'string',
      default: '',
    },
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
    containerWidth: {
      type: 'string',
      default: 'full',
    },
    contentWidth: {
      type: 'string',
      default: 'container',
    },
  },
  edit,
  save: () => {
    return null
  }
}
