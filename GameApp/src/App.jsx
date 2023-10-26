import Footer from "./components/Footer";
import Joke from "./components/Joke";
import Landing from "./components/Landing";
import Cards from "./components/cards";
import Manga from "./components/manga";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
 
const App = () => {
    return (
      <BrowserRouter>
      <Navbar/>
        <Landing/>
            <Cards/>
            <Manga/>

            <Joke/>
          <Footer/>
     
      </BrowserRouter>
        
    );
}
 
export default App;