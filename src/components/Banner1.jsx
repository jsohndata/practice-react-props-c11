import '../styles/Banner.css';

export default function Banner1({ title, content, bgColor, fontColor }) {

  return (
    <>
      <h2>Passing Strings</h2>
      <div className="banner-container"
        style={{"backgroundColor": bgColor, "color": fontColor}}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </>
  );
};