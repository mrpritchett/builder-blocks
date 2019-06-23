import edit from './edit'
import save from './save'

const { __ } = wp.i18n

export default {
  title: __('Hero'),
  description: __('A large image block'),
  category: 'builder-blocks',
  icon: 'money',
  attributes: {
    image: {
      type: 'object',
      default: null,
    },
  },
  edit,
  save
}
