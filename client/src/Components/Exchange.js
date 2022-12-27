import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';
// import { useFetch } from '../hooks/useFetch';
import React, { useState, useEffect } from 'react';
import { GET_EXCHANGES_BY_USER } from '../utils/queries';

// const getExchanges = GET_EXCHANGES


// const getExchanges = GET_EXCHANGES
// const [getExchanges, { error }] = useQuery(GET_EXCHANGES);
// You are 

function Exchange(){
  const { loading, data } = useQuery(GET_EXCHANGES_BY_USER);
  const exchanges = data;
  console.log(exchanges);

  // const [getExchanges, { error }] = useQuery(GET_EXCHANGES);
  // console.log("GET EXCHANGES:", getExchanges);
  // const [exchangeData, setExchangeData] = useState({});
  
  // const getExchangeData = async () => {
  //   const response = await getExchanges();
  //   //this is sus he says
  //   // const data = await response.json();
  //   setExchangeData(response);
  //   console.log("exchangeDATA is here:", exchangeData);
  //   return exchangeData;
  // useEffect(() => {
  //   try {
  //     getExchangeData();
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
    
  // }
  // )
    
    // getExchangeData();
    // )
    
    return (
    <>
      <Card>
        <Card.Header as="h5" bg='primary'> EXCHANGE NAME </Card.Header>
        <Card.Body>
          <Card.Text>
            IMPORTED API DATA HERE
          </Card.Text>
          <Button variant="primary">LINK TO ITEM</Button>
        </Card.Body>
      </Card>
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