import '../styles/Banner.css';

export default function Banner1({ title, content, bgColor, fontColor }) {

  return (
    <div className="banner-container"
      style={{"backgroundColor": bgColor, "color": fontColor}}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}