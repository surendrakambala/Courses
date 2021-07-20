
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from "react-bootstrap";
import  { CarouselData} from '../course/navlis';

function home() {
    return (
        <div>
            <Carousel fade>
{CarouselData.map((Data) =>{
  return(
    <Carousel.Item key={Data.id}>
    <img
width="100%"
height="500px"
      className={Data.ClassName}
      src={Data.src}
      alt={Data.alt}
    />
    </Carousel.Item>
    );
}
)}
</Carousel>
        </div>
    )
}

export default home
