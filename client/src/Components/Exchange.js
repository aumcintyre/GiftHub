import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';

import React from 'react';
import { GET_EXCHANGES_BY_USER } from '../utils/queries';
// import { GET_EXCHANGES } from '../utils/queries';

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
      {exchanges ? (
        <>
        {exchanges.map((exchange) => (
          <Card>
            <Card.Header as="h5" bg='primary'> {exchange.roomName} </Card.Header>
            <Card.Body>
              <Card.Text>
                IMPORTED API DATA HERE
              </Card.Text>
              <Button variant="primary">LINK TO ITEM</Button>
            </Card.Body>
          </Card>
        ))}
        </>
      ) : null }
    </div>
  );
}

export default Exchange;