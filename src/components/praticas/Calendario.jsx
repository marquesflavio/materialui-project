import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CalendarPicker from '@mui/lab/DatePicker';
import { DatePicker } from '@mui/x-date-pickers'

function Calendario() {
    const [open, setOpen] = useState(false);
  
    const handleButtonClick = () => {
      setOpen(!open);
    };
  
    return (
      <div>
        <Button onClick={handleButtonClick} variant="contained">
          Abrir Calendário
        </Button>
        {open && (
          <CalendarPicker
            open={open}
            onClose={() => setOpen(false)}
            renderInput={(params) => <TextField {...params} />}
          />
        )}
      </div>
    );
  }
  
  export default Calendario;