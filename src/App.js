import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
import ProductDetails from './components/ProductDetails';
import ProdutosDeUmaCategoria from './components/ProdutosDeUmaCategoria';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import SearchBar from './components/SearchBar';
import globalStyles from './globalStyles';
import PromotionList from './PromotionList';
import theme from './theme';

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
