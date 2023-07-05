
const gitHubLink = "https://github.com/jsohndata/react-props-practice";
const fullYear = new Date().getFullYear();

export default function Footer() {

  return (
    <footer>
      <p><small>&copy; {fullYear}</small>
        <br />
        <a href={gitHubLink} target="_blank" rel="noreferrer">GitHub</a></p>
    </footer>
  );
}
