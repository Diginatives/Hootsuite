import React from 'react'
import { Box, Container, Grid, Button,FormControlLabel} from "@material-ui/core";
import Pandaphoto  from '../Assets/img/wwf.png.png'
import Accor  from '../Assets/img/Accor_Hotels.png'
import marketo  from '../Assets/img/marketo.png'
import Dominos  from '../Assets/img/Dominos-logo1.png'

import {useStyles} from '../SoicalMarketing/Style'

export default function Panda() {
    const classes = useStyles();
    return (
        <div>
            <Box bgcolor="#eeebe8" py={6}>
                <Container className="inner-container">
                <Grid container justify="center" >
                <Grid item lg={9} md={10} sm={6} xs={12}> 
                <Grid container spacing={4} >
                    
                    <Grid item lg={3} md={3} sm={6} xs={8}> 
                    <div  className={classes.pandaimg}>
                    <img src={Accor}  width={164} height={44}   />
                   
                    </div>
                     </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}> 
                    <div  className={classes.pandaimg}>
                    <img src={marketo}  width={110} height={48}   />
                    </div>
                    </Grid>
                    <Grid item lg={2} md={2} sm={6} xs={12}> 
                    <div  className={classes.pandaimg}>
                    <img src={Dominos}  width={210} height={47}   />
                    </div>
                    </Grid>
                </Grid>
                </Grid>
                </Grid>
                
                </Container>
            </Box>
        </div>
    )
}
