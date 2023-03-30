import React from 'react';
import Navbar from '../Navbar';
import BasicCard from '../BasicCard';
import Stack from '../Stack';
import Footer from '../Footer';
import Curriculum from '../Curriculum';
import Experiencia from '../../pages/experiencia';
import Proyectos from '../../pages/proyectos';
import './index.css';



const Layout = () => {

    return (
        <>
            <div id="top" className="container">
                <div className="row">
                    <Navbar />
                </div>
                <div className="row" style={{ marginTop: "100px" }}>
                    <div className="col-12 col-sm-12 text-center">
                        <BasicCard
                            title="Pedro Antonio Zagal Melani"
                            description={"Desarrollador Web Full Stack Jr. Kinesiólogo"
                        }
                        />
                    </div>
                    <div className="row" style={{ marginTop: "100px" }}>  
                    <div className="col-12 col-sm-12 text-center">
                        <Curriculum rutacv={"https://drive.google.com/file/d/1JSwuAgz19D34jSNFjL74_zyMLtMAq42N/view?usp=share_link"}/>
                        </div>
                        </div>
                </div>
                <div className='row' style={{marginTop: '100px'}}>
                    <div className="col-12 col-sm-12 text-center" style={{ backgroundColor: "rgb(208 201 208 / 45%)" }}>                    
                            <Stack />                                                  
                    </div>                
                </div>
                <div className='row' style={{marginTop: '100px', fontStyle: "italic"}}>
                    <div className="col-12 col-sm-12 col-md-12 text-center">
                        <Proyectos />
                    </div>
                </div>
                <div className='row' style={{marginTop: '100px'}}>
                    <div className="col-12 col-sm-12">
                        <Experiencia />
                    </div>
                </div>
            </div>
            <div className='row' style={{marginTop: '100px'}}>
                <Footer />
                </div>
        </>
    );
};

export default Layout;



