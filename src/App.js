import React, { useState, useMemo } from 'react';

import Clock from './components/Clock'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import './findAndReplace'
import './App.css'


function App() {



  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];



  let datelimite = new String('11 Mai 2020')
  datelimite = datelimite.toLowerCase().replaceArray(mois, month)



  const [date, setDate] = useState({

    deadline: '11 MAI 2020',
    newDeadline: '',
    translateDate: datelimite



  })


  const changeDate = () => {
    let newDate = new String(date.newDeadline)
    newDate = newDate.toLowerCase().replaceArray(mois, month)

    setDate({
      ...date,
      deadline: date.newDeadline,
      translateDate: newDate

    })
  }

  const handleNewDate = (e) => {

    setDate({ ...date, newDeadline: e.target.value })
  }



  return (
    <>
      <ReactNotification />
      <div className="container">

        <h1> Compte à rebours pour le {date.deadline} </h1>
        <Clock deadline={date.translateDate} />
        <div>
          <input onChange={e => handleNewDate(e)} placeholder='Votre Date : 12 mai 2021' />
          <button onClick={changeDate} > Confirmer </button>
        </div>
      </div>
    </>
  );
}

export default App;
