import edit from './edit'
import save from './save'

const { __ } = wp.i18n

export default {
  title: __('Testimonials'),
  description: __('Add a menu testimonial'),
  category: 'common',
  icon: (
    <svg width="18px" height="19px" viewBox="0 0 18 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="Restaurant-Menu" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="Dashicons-Regular, Dashicons" fontSize="20" fontWeight="normal">
        <g id="Restaurant-Block:-Menu-Item:-Add-Another" transform="translate(-533.000000, -649.000000)" fill="#555D66">
          <g id="Body" transform="translate(235.000000, 152.000000)">
            <g id="Actice" transform="translate(36.000000, 80.000000)">
              <g id="Inserter" transform="translate(188.000000, 196.000000)">
                <g id="Group-3-Copy-4" transform="translate(28.000000, 171.000000)">
                  <g id="Paragraph-Block" transform="translate(4.000000, 36.000000)">
                    <text id="">
                      <tspan x="41" y="34"></tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  attributes: {
    title: {
      type: 'string',
      default: ''
    },
    byline: {
      type: 'string',
      default: ''
    },
    summary: {
      type: 'string',
      default: ''
    },
    image: {
      type: 'object',
      default: null
    },
  },
  edit,
  save
}
