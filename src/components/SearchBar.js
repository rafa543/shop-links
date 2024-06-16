import React, { useState } from 'react';
import { TextField, InputAdornment, Box, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import { items } from '../produtos'; // Importa a lista de produtos

const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'noBoxShadow',
})(({ theme, noBoxShadow }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 25,
    backgroundColor: theme.palette.background.paper,
    boxShadow: noBoxShadow ? 'none' : '0 3px 5px 2px rgba(105, 105, 105, .3)',
    '&.Mui-focused': {
      boxShadow: noBoxShadow ? 'none' : '0 3px 5px 2px rgba(105, 105, 105, .5)',
      borderColor: 'transparent', // Remove a borda azul
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-input': {
      padding: '10px 14px', // Ajuste o padding para controlar a altura do input
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent', // Remove a borda azul
  },
}));

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const results = items.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Box sx={{ display: 'flex', zIndex: 1000, justifyContent: { xs: 'center', md: 'flex-end' }, width: '100%' }}>
        <StyledTextField
          variant="outlined"
          placeholder="Busque um produto..."
          value={searchTerm}
          onChange={handleSearch}
          noBoxShadow={searchResults.length > 0} // Passa a prop para controlar o box-shadow
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: '100%', padding: { xs: '0px 10px 10px 10px', lg: '0px' } }}
        />
      </Box>
      {searchResults.length > 0 && (
        <List sx={{ zIndex: 999, position: 'absolute', top: 36, borderRadius: '0px 0px 10px 10px', bgcolor: 'background.paper', color: 'black' }}>
          {searchResults.map((item, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.title} src={item.image} />
              </ListItemAvatar>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default SearchBar;
