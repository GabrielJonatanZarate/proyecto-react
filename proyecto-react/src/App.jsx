import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import NikeExp from "./components/NikeExp";
import Promocion from "./components/Promocion";

function App() {
  return (
    <>
      <Promocion />
      <NavBar />
      <Banner/>
      <ItemListContainer texto={"No se encontraron productos!"}/>
      <Banner2/>
      <NikeExp/>
      <Footer/>
    </>
  )
}

export default App
