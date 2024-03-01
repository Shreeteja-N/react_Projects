import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function NewsItem({tittle,description,url,src}) {
  return (
    <div className='card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2' style={{maxWidth:"345px"}}>
   
      
      <Card.Body>
        <img src={src}  className='card-img-top' alt='...'></img>
        <Card.Title>{tittle}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href={url} className='btn btn-primary'>Read more</Card.Link>
        
      </Card.Body>

    </div>
  )
}
