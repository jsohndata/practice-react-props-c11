export default function Banner3({ data: { title, content, bgColor, fontColor}}) {

  return(
    <div className="banner-container"
      style={{"backgroundColor": bgColor, "color": fontColor}}>
      <h2>{title}</h2>
      <p>{content}</p>
      </div>
  );
}