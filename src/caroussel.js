import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="./images/Aile Avion.jpg" alt="" />
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3>Besoin d'un départ vers des terres inconnues ?</h3>
          <p>Explorer, voyager, découvrir, s’aventurer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/plage.jpg" alt="" />
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Vers un monde comme vous l'imaginez ? </h3>
          <p>Que vous rêviez de plages paradisiaques, de villes vibrantes ou d'aventures en plein air, nous avons la clé pour déverrouiller vos rêves de voyage. .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/snow.jpg" alt="" />
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Votre aventure commence ici ...</h3>
          <p>
          Laissez-nous être votre guide et transformons ensemble vos idées de vacances en souvenirs mémorables. .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
// Commande export qui ermet de l'importer dans App.JS//
export default Slider;