import './App.css'
import * as React from 'react';
import Teste from './components/praticas/teste';
import BasicModal from './components/praticas/Modal';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';


function App() { 

  return (
    <>
    {/*criando um modal que dispara um calendário*/}

    <Teste/>
    <BasicModal/>
    <CalendarComponent>

    </CalendarComponent>

        
    </>
  )
}

export default App;
