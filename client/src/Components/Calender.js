import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Card from 'react-bootstrap/Card';

function calendarCard() {
  return (
    <div className='calendarCard'>
      {ExchangeCalendar}
      </div>
  )
}

function ExchangeCalendar() {
  const [value, onChange] = useState(new Date());
  return (
    <Card>
      <Calendar onChange={onChange} showWeekNumbers value={value} />
    </Card>
  );
}

export default ExchangeCalendar;





// return (
//   <div className="Sample">
//     <header>
//       <h1>react-calendar sample page</h1>
//     </header>
//     <div className="Sample__container">
//       <main className="Sample__container__content">
//         <Calendar onChange={onChange} showWeekNumbers value={value} />
//       </main>
//     </div>
//   </div>
// );