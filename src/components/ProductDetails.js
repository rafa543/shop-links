import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";
import { items } from "../produtos";
import ResponsiveAppBar from "./ResponsiveAppBar";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FF9800",
  color: "#fff",
  fontWeight: "bold",
  padding: "10px 20px",
  borderRadius: "50px",
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#FB8C00",
    transform: "scale(1.05)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  "&:active": {
    backgroundColor: "#F57C00",
    transform: "scale(1.02)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  padding: theme.spacing(4),
}));

const StyledImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "auto",
  marginBottom: theme.spacing(2),
}));

// const StyledPrice = styled(Typography)(({ theme }) => ({
//   fontWeight: 'bold',
//   fontSize: '1.5rem',
//   marginBottom: theme.spacing(2),
// }));

function ProductDetails() {
  // const { state } = useLocation();
  // const { item } = state;
  const { id } = useParams(); // Obtém o ID da URL

  // Busca o item correspondente pelo ID
  const item = items.find((prod) => prod.id === Number(id));

  if (!item) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6" color="error" align="center">
          Produto não encontrado.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <ResponsiveAppBar />

      <StyledContainer>
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          gutterBottom
          color="black"
        >
          {item.title}
        </Typography>
        <StyledImage src={item.image} alt={item.title} />
        <Typography variant="body1" gutterBottom>
          {item.description}
        </Typography>
        <Box>
          <Box display="flex" alignItems="center" mt={1}>
            <LocalOfferIcon color="primary" sx={{ mr: 1 }} />
            <Typography
              variant="h5"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              Preço no PIX: {item.pricePix}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={1} mb={2}>
            <LocalOfferIcon color="secondary" sx={{ mr: 1 }} />
            <Typography
              variant="h5"
              color="secondary"
              sx={{ fontWeight: "bold" }}
            >
              Preço no cartão: {item.priceCard}
            </Typography>
          </Box>
        </Box>
        <StyledButton variant="contained" sx={{ lineHeight: 2.2 }}>
          Pegar Promoção
        </StyledButton>
      </StyledContainer>
    </>
  );
}

export default ProductDetails;
