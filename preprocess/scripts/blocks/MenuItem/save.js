export default function (block) {
  return (
    <div className="">
      <h5>{ block.attributes.name }</h5>
      <h6>${ block.attributes.price }</h6>
      <p>{ block.attributes.description }</p>
    </div>
  )
}
