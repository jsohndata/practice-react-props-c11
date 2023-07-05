export default function Banner3({ data: { title, content, bgColor, fontColor}}) {

  return(
    <>
      <h2>Passing Object and Destructing</h2>
      <div className="banner-container"
        style={{"backgroundColor": bgColor, "color": fontColor}}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </>
  );
}