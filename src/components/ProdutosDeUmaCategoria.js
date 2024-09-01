import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductsListCategories from "../ProductsListCategories";
import ResponsiveAppBar from "./ResponsiveAppBar";

function ProdutosDeUmaCategoria() {
  const { categoria } = useParams(); // Obtém a categoria da URL

  return (
    <>
      <ResponsiveAppBar />
      <br/>
      <Box sx={{ width: "100%", maxWidth: "1300px", margin: "0 auto" }}>
        {/* <SearchBar /> */}
        <Typography
          variant="h6"
          align="left"
          sx={{ margin: "20px 0", fontWeight: "bold", marginLeft: { xs: 2, sm: 0 }}}
        >
          Resultados para "{categoria.toUpperCase()}"
        </Typography>
        <ProductsListCategories categoria={categoria} />
      </Box>
    </>
  );
}

export default ProdutosDeUmaCategoria;
