import React from 'react'
import {useStyles} from '../Publish/Style'
import { Box, Container, Grid, Button, Hidden ,FormControlLabel} from "@material-ui/core";
import Engage from '../Assets/img/logo-Hootsuite-Engage-Icon.svg'
import Rotate from 'react-reveal/Rotate';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Save() {
    const classes = useStyles();
    return (
        <>
           <Box bgcolor="#143059" py={7} > 
           <ScrollAnimation animateIn="fadeIn">
           <Container className="inner-container">
               <div className={classes.textcntr}>
               <Box  fontSize="20px" lineHeight="30px" color="#fff6e8" fontFamily="SourceSansPro-Bold">
               EMPLOYEE ADVOCACY SOLUTIONS
               </Box>
               <Box mt={2} mb={2} fontSize="54px" lineHeight="60px" color="#fff6e8" fontFamily="SourceSansPro-Bold" className={classes.savetxt}>Extend your social reach through employee advocacy</Box>
               <Box my={2}  fontSize="20px" lineHeight="30px" color="#ffffff" fontFamily="SourceSansPro-Regular">Make it easy for employees to share your company posts on their own social networks—and stay informed.</Box>
               <div className={classes.toolbarButtons}>
                  
               <Button variant="contained" color="secondary">
               Watch a Demo Now
      </Button>
                </div>
                </div>
       </Container>
       </ScrollAnimation>
           </Box>


        </>
    )
}
