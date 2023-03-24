import { Typography } from '@material-ui/core';
import { useLocation, Link } from "react-router-dom";
import {  Button, IconButton, List, ListItem, ListItemText } from "@material-ui/core";

function Kokouutinen(props) {

    const location = useLocation();
    const state = location.state || [];
    console.log(state);


    return (
        <div >

            <Typography
                style={{
                    fontSize: (props.tyyli === "suuri") ? 18 : 22,
                    marginBottom: 10
                }}
            > {JSON.stringify(state[0])}</Typography>



            <img src={state[1]} alt="display image" />
            <Typography
                style={{
                    fontSize: (props.tyyli === "pieni") ? 18 : 22,
                    marginBottom: 10
                }}
            >{JSON.stringify(state[2])}</Typography>



            <a href={state[3]}>{state[3]}</a>

            <Typography
                style={{
                    fontSize: (props.tyyli === "pieni") ? 18 : 22,
                    marginBottom: 10
                }}
            >{JSON.stringify(state[4])}</Typography>

            <Typography
                style={{
                    fontSize: (props.tyyli === "pieni") ? 18 : 22,
                    marginBottom: 10
                }}
            >{JSON.stringify(state[5])}</Typography>

{Object.keys(state).length === 0 ? <div></div> :<div><Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
      >Palaa pääsivulle</Button>
</div>}


        </div>

    )
}

export default Kokouutinen
