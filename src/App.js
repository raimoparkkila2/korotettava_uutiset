import { Backdrop, CircularProgress, Container, Typography } from '@material-ui/core';
 
import Uutislista from './components/Uutislista';
import Otsikko from './components/Otsikko';
import { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import Kokouutinen from "./components/Kokouutinen";
function App() {

  const [uutiset, setUutiset] = useState([]);
  
 





  const [data, setData] = useState({
    uutiset: [],
    virhe: null,
    tiedotHaettu: false
  });

  

  const haeTiedot = async () => {

    try {

      //const yhteys = await fetch("https://xamkbit.azurewebsites.net/valuutat");
      const yhteys = await fetch("https://xamkbit.azurewebsites.net/uutiset");
      const tiedot = await yhteys.json();
       

      setData({
        ...data,
        uutiset: tiedot,
        tiedotHaettu: true
      });






    } catch (error) {

      setData({
        ...data,
        uutiset: [],
        tiedotHaettu: true,
        virhe: `VIRHE: yhteyttä palvelimelle ei voitu muodostaa. (${error})`
      });

    }


  }

  useEffect(() => {

    haeTiedot();

  }, [])

  return (

    
    <Router>
      <Fragment>
        <Otsikko />     Uutiset  <Otsikko />
        <Routes>
          <Route exact path='/' element={<Uutislista data={data} uutiset={uutiset} haetiedot={haeTiedot} />}>
      
          </Route>

        
        </Routes>

        <Kokouutinen element={<Kokouutinen />}  />
      </Fragment>

    </Router>


  );
}

export default App;
