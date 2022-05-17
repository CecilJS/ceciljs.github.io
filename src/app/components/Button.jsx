import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #CAA85D',
    '&:hover': {
      backgroundColor: '#fafafa',
      color: '#CAA85D',
      borderColor: '#CAA85D',
      boxShadow: 'none',
    },
  },
});

function MyButton(props) {
  const classes = useStyles();
  const { component, to, style, name } = props;
  return (
    <Button
      className={classes.root}
      variant="contained"
      to={to}
      component={component}
      sx={{
        mt: 5,
        fontWeight: 'bold',
        bgcolor: '#CAA85D',
        '&:hover': { backgroundColor: '#fffff' },
      }}
      style={style}
    >
      {name}
    </Button>
  );
}

export default MyButton;
