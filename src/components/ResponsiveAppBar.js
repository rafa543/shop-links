import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchBar from './SearchBar';

const pages = ['Tecnologia', 'Beleza', 'Moda e esporte', 'casa', 'eletro', 'moveis'];

function ResponsiveAppBar() {

  return (
    <AppBar position="static" sx={{ width: '100%', backgroundColor: '#11101D' }}>
      <Container maxWidth={false} sx={{ padding: 0 }}>
        <Toolbar disableGutters sx={{ width: '100%',  justifyContent: 'center', flexDirection: { xs: 'column', md: 'row'}, flexWrap: {xs: 'wrap', md: 'wrap',  lg: 'nowrap'}}}>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'space-between' }, marginTop: {xs: "16px", md: "0px"}}}>
            <AdbIcon sx={{ display: 'flex', mr: 1 }} />
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
              <Button key={page} sx={{  color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>

          <SearchBar />

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;