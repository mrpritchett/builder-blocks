const { Component, createElement } = wp.element
import Inspector from './inspector'
import Editor from './editor.js'

export default function (block) {
  return (
    <>
      <Inspector block={ block }/>
      <Editor block={ block }/>
    </>
  )
}
