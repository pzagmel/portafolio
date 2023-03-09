import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@material-ui/core';
import mui from '../../assets/img/mui2.png';
import bootstrap from '../../assets/img/bootstrap.webp';
import css from '../../assets/img/css.webp';
import git from '../../assets/img/git.webp';
import github from '../../assets/img/github.webp';
import html from '../../assets/img/html.webp';
import js from '../../assets/img/js.webp';
import python from '../../assets/img/python.webp';
import react from '../../assets/img/reactjs.png';

const imgList = [[html, css, js], [react, bootstrap, mui], [git, github, python]];

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '100%',
        flexGrow: 1,
        marginBottom: '2rem'
    },
    imgContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        '& img': {
            maxWidth: '70%',
            maxHeight: '70%',
            width: '70px',
            height: '70px',
            margin: '0.5rem'
        }
    },
    title: {
        textAlign: 'center',
        marginBottom: '1rem',
        fontWeight: 'bold'
    }
}));

export default function Stack() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <>
            <Typography variant="h4" className={classes.title}>STACK</Typography>
            <Carousel
                className={classes.root}
                activeStep={activeStep}
                onChange={handleStepChange}
                interval={5000}
                animation="slide"
                timeout={500}
                navButtonsAlwaysVisible={true}
            >
                {imgList.map((img, index) => (
                    <Paper key={index} className={classes.imgContainer}>
                        <img src={img[0]} alt={`Imagen ${index}`} />
                        <img src={img[1]} alt={`Imagen ${index}`} />
                        <img src={img[2]} alt={`Imagen ${index}`} />
                    </Paper>
                ))}
            </Carousel>
        </>
    );
}
