import React, { useState } from 'react';
import Calendar from 'react-calendar';


//The number on the left is the current week / 52
// showWeekNumbers value={value} (add this to the calendar component to show the week numbers again)


function ExchangeCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <header>
        <h1 className='custom-header'>Select your deadline!</h1>
      </header>
      <div className="container card">
        <main className="Sample__container__content">
          <Calendar onChange={onChange} />
        </main>
      </div>
    </div>
  );
}

export default ExchangeCalendar;