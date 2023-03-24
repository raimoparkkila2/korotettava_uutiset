import {  Button, IconButton, List, ListItem, ListItemText } from "@material-ui/core";


import Otsikko from "./Otsikko";
import Kokouutinen from "./Kokouutinen";
import { Link } from 'react-router-dom';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteIcon from '@material-ui/icons/Delete';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { lightBlue } from "@mui/material/colors";
function Uutislista(props) {

  let data1 = {};
  const suoritettu = (kokouutinen) => {

    let uutisetApu = [...props.uutiset];




    // props.setUutiset([...uutisetApu]);
    //alert(JSON.stringify(kokouutinen));


  }


  const linkStyle = {
    margin: '2px',
    padding: '10px',
    border: '2px solid black',
    borderRadius: '8px',
    background: 'white',
    width: '600px',
    fontSize: '15px',
    color: 'black',
    display: 'block',
    textDecoration: 'none' // <-------- use this
  };
  return (

    <>

 <div>
      <Otsikko tyyli="pieni"></Otsikko>


      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {props.data.uutiset.map((value, idx2) => (
          <ListItem
            key={value}
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment">

              </IconButton>
            }
          >
            <Link to="/kokouutinen" state={[value.otsikko, value.kuva, value.sisalto, value.linkki, value.pvm, value.aikaleima]} style={linkStyle}>

             
              <ListItem button component={Link} to="/kokouutinen" state={[value.otsikko, value.kuva, value.sisalto, value.linkki, value.pvm, value.aikaleima]}></ListItem>
              <ListItemText primary={`${value.otsikko} ${value.pvm}`} onClick={() => { suoritettu(value) }} />

            </Link>

          </ListItem>
        ))}
      </List>

      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
      >Päivitä sivu</Button>

     
 
 </div>
    </>
  )
}

export default Uutislista