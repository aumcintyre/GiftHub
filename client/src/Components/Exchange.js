import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import React from 'react';
import { GET_EXCHANGES_BY_USER } from '../utils/queries';
import CreateWishlist from './CreateWishlist';
import ListGroup from 'react-bootstrap/ListGroup';

import TitleImg from '../images/GiftHubTitle.png'

function Exchange() {
  return (
    <div className='leftSide'>

      <div className='GifteeMemberCard'>
        <div className="GifteeMembers">
          <p> John</p>
        </div>

        <div className="GifteeMembers">
          <p> John</p>
        </div>

        <div className="GifteeMembers">
          <p> John</p>
        </div>
      </div>

      <Row xs={1} md={2} className="g-4">

        {/* User*/}
        <div className='exchangeContainers'>
          <Col>
            <Card className="gradiant" >
              {/* <img className='myPic' src={require('../images/GiftHubTitle.png')} /> */}
              <Card.Title class='text-black'>THE USER WHO YOU GOT</Card.Title>
              <Card.Text class='text-black'>
                The Exchange you are apart of
                <ul>
                  <li>Thir wishlist that links to the page where you can buy it</li>
                  <li> <a href='https://www.amazon.com'>Link to their amazon wishlist item</a></li>
                  <li> <a href='https://www.target.com'>Or a link to a different amazon item </a></li>
                </ul>
              </Card.Text>
            </Card>
          </Col>
        </div>
      </Row>
    </div>

  );
}

export default Exchange;