import AdbIcon from '@mui/icons-material/Adb';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const pages = ['tecnologia', 'beleza', 'moda esporte', 'casa', 'eletro', 'moveis'];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  
  const handleItemClick = (item) => {
    navigate(`/produtos/${item}`);
  };
  const handleItemClickUrl = (item) => {
    navigate(`${item}`);
  };

  return (
    <AppBar position="static" sx={{ width: '100%', backgroundColor: '#11101D' }}>
      <Container maxWidth={false} sx={{ padding: 0 }}>
        <Toolbar disableGutters sx={{ width: '100%',  justifyContent: 'center', flexDirection: { xs: 'column', md: 'row'}, flexWrap: {xs: 'wrap', md: 'wrap',  lg: 'nowrap'}}}>

          <Box onClick={() => handleItemClickUrl("/")} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'space-between' }, marginTop: {xs: "16px", md: "0px"}}}>
            <AdbIcon sx={{ display: 'flex', mr: 1 }} cursor="pointer"/>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              SHOPLINKS
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex', 
            justifyContent: { xs: 'center', md: 'center' }, 
            width: '100%', 
            flexWrap: {xs: 'wrap', md: 'nowrap'}, 
            gap: {xs: '10px', md: '20px'}, 
            marginBottom: {xs: '4px'}
            }}>
            {pages.map((page) => (
              <Button key={page} sx={{  color: 'white', display: 'block' }} onClick={() => handleItemClick(page)}>
                {page}
              </Button>
            ))}
          </Box>

          {/* <SearchBar /> */}

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;