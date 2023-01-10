import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';
import SavedWishes from './SavedWishes';
import React from 'react';
import { GET_EXCHANGES_BY_USER, GET_EXCHANGES, GET_USER } from '../utils/queries';
// import CreateWishlist from './CreateWishlist';
import ListGroup from 'react-bootstrap/ListGroup';

import TitleImg from '../images/GiftHubTitle.png'

function Exchange() {
  const { data } = useQuery(GET_EXCHANGES_BY_USER);
  // const { data } = useQuery(GET_EXCHANGES);
  console.log(data);
  let exchanges;
  if (data) {
    exchanges = data.exchangeByUser;
  }
  console.log("look at your exchanges:", exchanges)


  return (

    <div>

      <div className="exhangePageTitleDiv">
        <h1 className="exhangePageTitle "> Exchanges: </h1>
      </div>


      <div>
        <div className='row'>

          {exchanges && exchanges.map((exchange) => {
            return (
              <div className='exchangeContainers col-8'>
                <h1 className='exchangeContainersTitle'>{exchange.roomName.toUpperCase()}</h1>
                <div className='GifteeMemberCard'>
                  {exchange.users.map((user) => (
                    <div className='GifteeMembers'>
                      <div className='member-container'>
                        {/* <h4 className=''>{user}</h4> */}
                        {<SavedWishes user={user} />}

                      </div>

                    </div>
                  ))}

                </div>

              </div>


            )
          })
          }
        </div>
      </div>


      <hr className='card-break'></hr>
    </div>


  );
}

export default Exchange;