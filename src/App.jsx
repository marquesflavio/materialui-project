import './App.css'
import * as React from 'react';
import Teste from './components/praticas/teste';
import BasicModal from './components/praticas/Modal';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';


function App() { 

  const Calendario = function abrirCalendario() {
    
  }

  return (
    <>
    {/*criando um modal que dispara um calendário*/}

    <Teste/>
    <BasicModal/>

    <Button onClick={abrirCalendario} > Aqui tem um calendário</Button>
   

        
    </>
  )
}

export default App;
