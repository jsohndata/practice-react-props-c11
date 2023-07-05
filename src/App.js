import Main from './components/Main';
import Body from './components/Body';
import Banner1 from './components/Banner1';
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Banner4 from "./components/Banner4";
import Footer from './components/Footer';

import './styles/App.css';

const bannerMaterialOne = {
  title: "Black Jacket",
  content: "Guess??",
  bgColor: "#240e8b",
  fontColor: "#ffffff"
};

const bannerMaterialTwo = {
  title: "tied shirt",
  content: "roam the unkown",
  bgColor: "#3c4cad",
  fontColor: "orange"
}

function App() {
  return (
    <>
      <div id="main-container">
      <Main />
      <Body />

      <Banner1 
        title="Blue Sweater" 
        content="I wear white shoes"
        bgColor="#f9c449"
        fontColor="#232323" />
      <Banner1 
        title="Grey Sweater" 
        content="I wear pink socks"
        bgColor="#f04393"
        fontColor="#232323" />

      <Banner2 info={bannerMaterialOne} />

      <Banner3 data={bannerMaterialTwo} />

      <Banner4 
        howMany={3}
        shirt="puma"
        data={bannerMaterialOne} />
      <Footer />
      </div>
    </>
  );
}

export default App;
