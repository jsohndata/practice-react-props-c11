
const gitHubLink = "https://github.com/jsohndata/prop-banner";
const fullYear = new Date().getFullYear();

export default function Footer() {

  return (
    <footer>
      <p>&copy; {fullYear}</p>
      <p><a href={gitHubLink} target="_blank" rel="noreferrer">GitHub</a></p>
    </footer>
  );
}
