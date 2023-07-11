import { Button } from "@mui/material";

const Teste = () => {

  const handleClick = () => {
    console.log('clicou')
  }
  
  return (
    <>
    <Button 
      variant="contained"
      onClick={handleClick}

    >
      Click Me!
    </Button>
    </>
  );
};

export default Teste;