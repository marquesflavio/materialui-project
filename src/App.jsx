import './App.css'
import * as React from 'react';
import { Box, Slide } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Slider from 'react-slick';

function App() {
  
const Carousel = () => {
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
};
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ 
          bgcolor: '#cecece', 
          height: '50vh'
        }} 
        />
        Oi na caixa
      </Container>

        <Slider>
          <div>
            <h3>Slide 1</h3>
          </div>
          <div>
            <h3>Slide2</h3>
          </div>
          <div>
            <h3>Slide 3</h3>
          </div>
        </Slider>



    </React.Fragment>
    
  )
}

export default App
