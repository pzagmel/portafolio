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
            <div className="container">
                <div className="row">
                    <Navbar />
                </div>
                <div className="row" style={{ marginTop: "100px" }}>
                    <div className="col-6 col-sm-12 text-center">
                        <BasicCard
                            title="Pedro Antonio Zagal Melani"
                            description={"Desarrollador Web Full Stack Jr. Kinesiólogo"
                        }
                        />
                    </div>
                    <div className="row" style={{ marginTop: "100px" }}>  
                    <div className="col-6 col-sm-12 text-center">
                        <Curriculum rutacv={"https://drive.google.com/file/d/1JSwuAgz19D34jSNFjL74_zyMLtMAq42N/view?usp=share_link"}/>
                        </div>
                        </div>
                </div>
                <div className='row' style={{marginTop: '100px'}}>
                    <div className="col-8 col-sm-12 text-center">                    
                            <Stack />                                                  
                    </div>                
                </div>
                <div className='row' style={{marginTop: '100px'}}>
                    <div className="col-12 col-sm-12 text-center">
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



