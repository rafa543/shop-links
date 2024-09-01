import React from 'react';
import { Box, Grid } from '@mui/material';
import PromotionItem from './components/PromotionItem';
import { items } from './produtos'; 

function ProductsListCategories({categoria}) {
  // Filtra os itens com base na categoria
  const produtos = items.filter(item => item.categorias.includes(categoria));
  
  return (
    <Box sx={{ width: '100%', maxWidth: '1300px', margin: '0 auto' }}>
      <Grid container spacing={2} justifyContent="center">
        {produtos.map((item, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <PromotionItem
              id={item.id}
              image={item.image}
              title={item.title}
              pricePix={item.pricePix}
              priceCard={item.priceCard}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsListCategories;
