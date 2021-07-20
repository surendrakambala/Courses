import React from 'react';
import {CardDeck,Card,Button} from 'react-bootstrap';
import {CardData} from './carddata';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Cards(){
      return(
        <div className="cardname" style={{display:'flex'}}>
<CardDeck>

        {CardData.map((Data) => {
        return(
<Card  key={Data.id} bg={Data.bgcolor}>

  <Card.Img variant="top" src={Data.img} height="150px"/>
  <Card.Body>
    <Card.Title>{Data.title}</Card.Title>
    <Card.Text>{Data.text}</Card.Text>
  </Card.Body>
  <Card.Footer>
    {/* <small className="text-muted">{Data.footer}</small> */}
    <Button variant={Data.btncolor}>Submit</Button>
  </Card.Footer>
</Card>


        );
    })}
    </CardDeck>

        </div>
      );
    }
