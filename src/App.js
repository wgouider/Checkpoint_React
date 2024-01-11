// Import des fichiers JS et des libraries react//
  import "./App.css"
  import NavBar from "./NavBar"
  import Cards from "./Cards"
  import  Slider  from "./caroussel";
  import Badge from 'react-bootstrap/Badge';
  function App() {
    return (
        <div className="App">
        {/* Appel du fichier NAVBAR.JS */}
          <div>
            <NavBar/>
          </div>
        {/* Header dy type Badge modèle reactBootstrap  */}
          <h2>
            <Badge bg="secondary">Bienvenue chez Enigma Travel - Où l'aventure commence et les souvenirs ne finissent jamais.</Badge>
          </h2>
        {/*Appel du fichier JS Caroussels   */}
          <div className="Caroussel">
            <Slider/>
          </div>
          {/*Appel du fichier JS Cards   */}
          <div className="Cards">
            <Cards/>
          </div>
        
        </div>
  );
}

export default App;
