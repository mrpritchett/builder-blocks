import edit from './edit'
import save from './save'

const { __ } = wp.i18n

export default {
  title: __('Restaurant Menu'),
  description: __('Add a menu'),
  category: 'common',
  icon: (
    <svg width="17px" height="20px" viewBox="0 0 17 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M16.6666667,18 L8.33333333,18 L8.33333333,16 L16.6666667,16 L16.6666667,18 Z M16.6666667,12 L8.33333333,12 L8.33333333,14 L16.6666667,14 L16.6666667,12 Z M18.75,3 L16.6666667,3 L16.6666667,5 L18.75,5 L18.75,20 L6.25,20 L6.25,5 L8.33333333,5 L8.33333333,3 L6.25,3 C5.09895833,3 4.16666667,3.895 4.16666667,5 L4.16666667,20 C4.16666667,21.105 5.09895833,22 6.25,22 L18.75,22 C19.9010417,22 20.8333333,21.105 20.8333333,20 L20.8333333,5 C20.8333333,3.895 19.9010417,3 18.75,3 Z M14.5833333,5 L14.5833333,4 C14.5833333,2.895 13.6510417,2 12.5,2 C11.3489583,2 10.4166667,2.895 10.4166667,4 L10.4166667,5 C9.265625,5 8.33333333,5.895 8.33333333,7 L8.33333333,8 L16.6666667,8 L16.6666667,7 C16.6666667,5.895 15.734375,5 14.5833333,5 Z" id="path-1"></path>
      </defs>
      <g id="Restaurant-Menu" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Insert-Block:-Restaurant-Blocks" transform="translate(-309.000000, -477.000000)">
          <g id="Body" transform="translate(235.000000, 152.000000)">
            <g id="Inserter" transform="translate(0.000000, 104.000000)">
              <g id="Restaurant-Blocks" transform="translate(32.000000, 174.000000)">
                <g id="Menu" transform="translate(0.000000, 33.000000)">
                  <g id="Gridicon-/-clipboard" transform="translate(38.000000, 12.000000)">
                    <g id="gridicons-clipboard">
                      <rect id="Rectangle-path" x="0" y="0" width="25" height="24"></rect>
                      <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-1"></use>
                      </mask>
                      <use id="Shape" fill="#000000" fillRule="nonzero" xlinkHref="#path-1"></use>
                      <g id="Color-/-Dark-Gray-500" mask="url(#mask-2)" fill="#555D66">
                        <rect id="dark-gray-500" x="0" y="0" width="25" height="24"></rect>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  edit,
  save
}
