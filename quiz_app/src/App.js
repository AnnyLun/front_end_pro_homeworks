import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';
import { Box, Container } from "@mui/system";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { withTheme } from "../src/components/Theme";

function App(props) {
  const { darkMode, setState } = props;

  return (
    <ThemeProvider theme={darkMode}>
      <CssBaseline/>
    <Box sx={{ width: 1, height: '100vh', display: 'flex', alignItems: 'center'}} >
<Router>
<Container maxWidth='sm'>       
  <Box textAlign="center">
    <Routes>
      <Route path='/'exact element={<Settings fontSize={20}/>} />            
      <Route path='/questions' element={<Questions />} />
      <Route path='score' element={<FinalScreen />}/>
    </Routes>
    <FormControlLabel
      control={
      <Switch 
        checked={darkMode}
        onChange={() => {setState(!darkMode)}}
        />
      }
        label="Day / Night Theme"
    />
  </Box>
</Container>
</Router>
</Box>
    </ThemeProvider>
    
  );
}
export default withTheme(App);
