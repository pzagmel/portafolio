import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './index.css';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: 'auto', // para fijar el footer al fondo de la página
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      <a href="https://www.linkedin.com/in/pzagmel/" className="linkedin-link" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className="linkedin-icon" />
      </a>
      <a href="https://www.github.com/pzagmel/" className="github-link" target="_blank" rel="noopener noreferrer">
        <GitHubIcon className="github-icon" />
      </a>
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center">
      © {new Date().getFullYear()} Created by Pzagmel
    </Typography>      
  </footer>
  

  );
}
