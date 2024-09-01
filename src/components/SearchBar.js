import React, { useState } from 'react';
import { TextField, InputAdornment, Box, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import { items } from '../produtos'; // Importa a lista de produtos
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate(`/produto/${item.id}`, { state: { item } });
  };

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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleRedirect();
    }
  };

  const handleRedirect = () => {
    navigate(`/results?q=${searchTerm}`, { state: { searchResults } });
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '1300px', margin: '0 auto', marginBottom: '20px' }}>
      <Box sx={{ paddingBottom: {xs: '0px', md: '0px'}, zIndex: 1000 }}>
        <StyledTextField
          variant="outlined"
          placeholder="Busque um produto..."
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          noBoxShadow={searchResults.length > 0}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: '100%',  }}
        />
      </Box>
        <Box sx={{ }}>
      {searchResults.length > 0 && (
        <List sx={{  zIndex: 999, bottom: '15px', position: 'relative',  borderRadius: '0px 0px 10px 10px', bgcolor: 'background.paper', color: 'black',
          '& .MuiListItem-root': {
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              cursor: 'pointer',
              bgcolor: 'grey.200',
            },
          },
         }}>
          {searchResults.map((item, index) => (
            <ListItem key={index} alignItems="flex-start" onClick={() => handleItemClick(item)}>
              <ListItemAvatar>
                <Avatar alt={item.title} src={item.image} />
              </ListItemAvatar>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      )}
      </Box>
    </Box>
  );
}

export default SearchBar;
