import { ThemeProvider } from '@mui/material/styles';
import globalStyles from './globalStyles'; 
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import theme from './theme'; 
import ImageCarousel from './components/ImageCarousel';
import PromotionList from './PromotionList';


function App() {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <div className="App">
        <ResponsiveAppBar />
        <header className="App-header" style={{ padding: '16px' }}>
        <ImageCarousel />
        <PromotionList />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
