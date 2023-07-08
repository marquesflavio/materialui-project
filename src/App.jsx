import React from 'react';
import { Button, Grid, Input, InputAdornment, TextField } from '@mui/material';
import Carousel from './components/praticas/Carrossel';
import InputLabel from '@mui/material/InputLabel';


function App() {
 
  return (
    
      <Grid sx={{display:'flex', justifyContent:'center'}}>
        <Button variant='contained' style={{margin:'auto', border:'none'}}>Botão</Button>
        <Carousel/>

        <TextField>
          <InputLabel htmlFor='input-com-icone'>
            Input com ícone
          </InputLabel>
            <Input id='input-com-icone' type='text'
             startAdornment={
              <InputAdornment position="start">
  
              </InputAdornment>
            }/>        
        </TextField>
        </Grid>
  );
}

export default App;
