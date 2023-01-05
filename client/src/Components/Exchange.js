import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';
// import { useFetch } from '../hooks/useFetch';
import React, { useState, useEffect } from 'react';
import { GET_EXCHANGES_BY_USER } from '../utils/queries';
import CreateWishlist from './CreateWishlist';
import ListGroup from 'react-bootstrap/ListGroup';




function Exchange() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>User Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Exchange Name</Card.Subtitle>
        <Card.Text>
          <ul>
            <li> Item 1 </li>
            <li> Item 2 </li>
            <li> Item 3 </li>
            <li> Item 4 </li>
            <li> Item 5 </li>

          </ul>
        </Card.Text>
        <Card.Link href="#">Profile Link</Card.Link>
        <Card.Link href="#">Amazon Wishlist Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Exchange;