export default function Banner2 ({ info }) {

  return (
    <div className="banner-container"
      style={{"backgroundColor": info.bgColor, "color": info.fontColor}}>
      <h2>{info.title}</h2>
      <p>{info.content}</p>
    </div>
  )
}