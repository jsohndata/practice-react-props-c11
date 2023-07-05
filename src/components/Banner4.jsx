export default function Banner4({howMany, shirt, data: {title, content, bgColor, fontColor}}) {

  return (
    <div className="banner-container"
      style={{"backgroundColor": bgColor, "color": fontColor}}>
      <h2>{title}</h2>
      <p>shirt: {shirt}</p>
      <p>howmany: {howMany}</p>
      <p>{content}</p>
    </div>
  )
}