import React from 'react';
import { Button, Grid } from '@mui/material';
import Carousel from './components/praticas/Carrossel';

function App() {
 
  return (
    
      <Grid sx={{display:'flex', justifyContent:'center'}}>
        <Button variant='contained' style={{margin:'auto', border:'none'}}>Botão</Button>
        <Carousel/>
        </Grid>
  );
}

export default App;
