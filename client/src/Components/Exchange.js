import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';

import React from 'react';
import { GET_EXCHANGES_BY_USER } from '../utils/queries';

// const getExchanges = GET_EXCHANGES


// const getExchanges = GET_EXCHANGES
// const [getExchanges, { error }] = useQuery(GET_EXCHANGES);
// You are 

function Exchange() {
  const { data } = useQuery(GET_EXCHANGES_BY_USER);
  let exchanges;
  if (data) {
    exchanges = data.exchanges;
  }

  console.log("look at your exchanges:", exchanges)



  return (
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
  );
}


// function exchangeCard() {
//   return (
//     <>
//       <Card>
//         <Card.Header as="h5" bg='primary'> EXCHANGE NAME </Card.Header>
//         <Card.Body>
//           <Card.Text>
//             IMPORTED API DATA HERE
//           </Card.Text>
//           <Button variant="primary">LINK TO ITEM</Button>
//         </Card.Body>
//       </Card>
//     </>
//   );
// }


// export default exchangeCard;


export default Exchange;