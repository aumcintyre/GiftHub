import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';



import React from 'react';
import { GET_EXCHANGES_BY_USER } from '../utils/queries';
// import CreateWishlist from './CreateWishlist';
import ListGroup from 'react-bootstrap/ListGroup';

import TitleImg from '../images/GiftHubTitle.png'

function Exchange() {
  return (
    <div className='ExchangeArea'>

      <div className='GifteeMemberCard'>
        <div className="GifteeMembers">
          <p> John Aena</p>
        </div>
        <div className="GifteeMembers">
          <p> John Bena</p>
        </div>
        <div className="GifteeMembers">
          <p> John Cena</p>
        </div>

        <div className="GifteeMembers">
          <p> John Dena</p>
        </div>

        <div className="GifteeMembers">
          <p> John Eena</p>
        </div>
      </div>



      {/* User*/}
      <div className='exchangeContainers'>
        <div className="exchangeContainersTextArea" >
          <div className="exchangeContainersTitle" > Joey Bowly </div>
          <div className="exchangeContainersTextArea">
            <p> Please purchase our giftees gift from one of thier selected wishlist items </p>
            <ul>
              <li>Thir wishlist that links to the page where you can buy it</li>
              <li> <a href='https://www.amazon.com'>Link to their amazon wishlist item</a></li>
              <li> <a href='https://www.target.com'>Or a link to a different amazon item </a></li>
            </ul>
          </div >
        </div>
      </div>

    </div >

  );
}

export default Exchange;