
import { InputBase } from "@mui/material";
import { styled } from '@mui/material/styles';

export const styleSelec={
    boxShadow: '0 10px 25px rgba(0 0 0 0.2)',
      fontSize: '1rem',
      padding: '0.1em 1em 0.1em 0.3em',
      background: '#4d5061',
      color: '#f29718',
      border: '0',
      marginright: '5px',
      cursor: 'pointer'
}


 export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#4d5061',
    border: '1px solid #f29718',    
    fontSize: 16,
    color:'#f29718',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

