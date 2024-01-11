import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function GroupExample() {
  return (
    <CardGroup>
      {/* Création de trois cards  */}
      <Card>
        <Card.Img variant="top" src= "./images/MusIC Festival.jpg" />
        <Card.Body>
          <Card.Title>Le tourisme musical</Card.Title>
          <Card.Text>
          Concert après concert, le tourisme musical connecte les personnes 
          à travers le monde
          </Card.Text>
        </Card.Body>
        <Button variant="primary">Cliquez Ici pour découvrir </Button>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./images/holiday.jpg" />
        <Card.Body>
          <Card.Title>Vers un ciel propore</Card.Title>
          <Card.Text>
          Les voyages sans émission prennent leur envol.
          </Card.Text>
        </Card.Body>
        <Button variant="primary">Cliquez Ici pour découvrir </Button>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./images/vacation.jpg" />
        <Card.Body>
          <Card.Title>La conciergerie virtuelle</Card.Title>
          <Card.Text>
          Besoin de conseil ou d'un assistant de voyage ? 
          Sommes à votre écoute ! Exprimez vos besoins et on vous proposera instantanément des recommandations 
          d'hôtels et d'itinéraires, avec des liens pour réserver.
          </Card.Text>
        </Card.Body>
        <Button variant="primary">Cliquez Ici pour découvrir </Button>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}
// Commande export qui ermet de l'importer dans App.JS//
export default GroupExample;