import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useNavigate } from 'react-router-dom';


const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF9800',
  color: '#fff',
  fontWeight: 'bold',
  padding: '10px 20px',
  borderRadius: '50px',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#FB8C00',
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  '&:active': {
    backgroundColor: '#F57C00',
    transform: 'scale(1.02)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
}));

function PromotionItem({ id, image, title, pricePix, priceCard }) {
  const navigate = useNavigate();
  
  const handleItemClick = (item) => {
    navigate(`/produto/${item}`);
  };

  return (
    <Card sx={{ maxWidth: '100%', margin: '16px auto' }}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
        sx={{ objectFit: 'contain' }} 
      />
      <CardContent>
      <Typography
          gutterBottom
          variant="body1"
          component="div"
          fontWeight="bold"
          sx={{
            maxHeight: '150px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {title}
        </Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <LocalOfferIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
            Preço no PIX: {pricePix}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mt={1}>
          <LocalOfferIcon color="secondary" sx={{ mr: 1 }} />
          <Typography variant="body2" color="secondary" sx={{ fontWeight: 'bold' }}>
            Preço no cartão: {priceCard}
          </Typography>
        </Box>
        <Box textAlign="center" mt={2} onClick={() => handleItemClick(id)}>
          <StyledButton variant="contained" sx={{lineHeight: 1.2}}> 
            Pegar Promoção
          </StyledButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PromotionItem;
