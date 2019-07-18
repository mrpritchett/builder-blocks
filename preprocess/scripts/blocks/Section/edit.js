import Inspector from './inspector'
import Editor from './editor.js'

const { createElement } = wp.element

export default function (block) {
  return (
    <>
      <Inspector block={ block }/>
      <Editor block={ block }/>
    </>
  )
}
