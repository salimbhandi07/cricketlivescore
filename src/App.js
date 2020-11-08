import React, {useState, useEffect} from "react"
import logo from './logo.svg'
import './App.css';
import { Button, formatMs, Grid, Typography } from '@material-ui/core';
import Navbar from './componets/Navbar';
import MyCard from './MyCard';
import {getMatches} from './api/Api'


function App() {

const [matches, setMatches]=useState([])
// console.log(matches);

   useEffect(() => {
    getMatches()
   .then((data) =>
    setMatches(data.matches))

  //  .then((data) => console.log(setMatches(data.matches)))
    .catch((error) => alert ("Could not load data"));

},[]);


  return (
    <div className="App">
   
      <Navbar />
      <Typography variant="h3" style={{marginTop:20}}>Welcome to Cricket Live Score</Typography>
    
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
        {
        matches.map((match) => (

          <MyCard match={ match }/>
        
        ))}
        </Grid>
      </Grid>
    
      
    </div>
  )
  
}

export default App;
