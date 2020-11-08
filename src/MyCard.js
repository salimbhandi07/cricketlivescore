import React, {Fragment, useState} from 'react'
import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core'

import { getMatchDetail, getMatches } from './api/Api'


const MyCard = ({match}) =>{
    const [detail, setDetail] = useState({}) 

    const [open, setOpen] = useState(false)


    const  handleClick= (id)=>{
        getMatchDetail(id)
        .then((data) => {
            console.log("Match Data", data)
            setDetail(data)
            handleOpen()
           })
        .catch((error)=> console.log(error))
    }




const getMatchCard = () =>{
    return (
        <Card style={{marginTop: 20}}>
            <CardContent>
                <Grid container justify="center" alignItems="center" spacing={4}>
                  <Grid item>
                      <Typography variant="h5">{match['team-1']}</Typography>
                  </Grid>
                  <Grid item>
                     {/* <img src={require("../src/img/vs.jpg")} /> */}
                     {/* <img
                      style={{width: 85, height:160}}
                      src={require("./img/vs.png")} 
                      alt="" /> */}
                          <img
                style={{ width: 85, height:160 }}
                src={require("./img/vs.png")}
                alt=""
              />
                  </Grid>
                  <Grid item>
                      <Typography variant="h5">{match['team-2']}</Typography>
                  </Grid>
                </Grid>
          
            </CardContent>
            <CardActions>
                <Grid container justify="center">
                <Button 
                onClick = {() =>{
                    handleClick(match.unique_id)
                 } } 
                variant="outlined" color="primary">
                    Show Details
                </Button>
                <Button style={{marginLeft: 7}} variant="outlined" color="primary">
                 Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                </Button>
                </Grid>
            </CardActions>
            
        </Card>
    )
}

const handleClose= () =>{
    setOpen(false)

}
const handleOpen= () =>{
    setOpen(true)
    
}
const getDialog=()=>(
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
            {"match Details..."}
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>
                        {detail.stat}
                    </Typography>
                    <Typography>
                           Match <span style={{fontStyle:"italic", fontWeight: "bold"}}> 
                           {detail.matchStarted? "Started": "Still not Started"}</span>
                    </Typography>
                    <Typography>
                           Score <span style={{fontStyle:"italic", fontWeight: "bold"}}> </span>
                           {detail.score}
                    </Typography>

                </DialogContentText>
            </DialogContent>
        </DialogTitle>

     <DialogActions>
         <Button onClick={handleClose} color="primary" autoFocus> Close </Button>
     </DialogActions>
    </Dialog>
)
   
    return(

        <Fragment>
               {getMatchCard()}
               {getDialog()}
        </Fragment>
        
        
    )
}

export default MyCard
