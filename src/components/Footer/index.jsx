import React from 'react';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './index.css';



export default function Footer() {
  

  return (
    <footer className= "footer">
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      <a href="https://www.linkedin.com/in/pzagmel/" className="linkedin-link" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className="linkedin-icon" />
      </a>
      <a href="https://www.github.com/pzagmel/" className="github-link" target="_blank" rel="noopener noreferrer">
        <GitHubIcon className="github-icon" />
      </a>
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center">
      © {new Date().getFullYear()} Created by pzagmel
    </Typography>      
  </footer>
  

  );
}
