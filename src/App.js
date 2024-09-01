import { ThemeProvider } from '@mui/material/styles';
import globalStyles from './globalStyles'; 
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import theme from './theme'; 
import ImageCarousel from './components/ImageCarousel';
import PromotionList from './PromotionList';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import ProdutosDeUmaCategoria from './components/ProdutosDeUmaCategoria';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Routes>
          <Route path="/" element={
            <div className="App">
              <ResponsiveAppBar />
              <header className="App-header" style={{ padding: '16px' }}>
                <SearchBar />
                <ImageCarousel />
                <PromotionList />
              </header>
            </div>
          } />
          <Route path="/produto/:id" element={<ProductDetails />} />
          <Route path="/produtos/:categoria" element={<ProdutosDeUmaCategoria />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
