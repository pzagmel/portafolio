import React from 'react';
import DrawerAppBar from '../DrawerAppBar';
import BasicCard from '../BasicCard';
import Stack from '../Stack';
import Footer from '../Footer';
import ProyectCards from '../ProyectsCards';
import pokegym from '../../assets/img/pokegym.png';
import starwars from '../../assets/img/starwars.png';
import todo from '../../assets/img/todo.png';
import './index.css';

import Experiencia from '../Experiencia/Experiencia';


const proyectos = [
    {
        img: pokegym,
        title: "POKEGYM",
        descripcion: "Página enfocada en un gimnasio ficticio en la que podrás planificar tu entrenamiento, tener acceso a tu ficha y evolucionar.",
        ruta: "https://github.com/pzagmel/poke-gym"
    },
    {
        img: starwars,
        title: "Starwars blog Reading list",
        descripcion: "Agrega tus personajes y planetas favoritos de Star-Wars.",
        ruta: "https://github.com/pzagmel/Starwars-blog-reading-list"
    },
    {
        img: todo,
        title: "My Tasks",
        descripcion: "Agrega y elimina tus tareas.",
        ruta: "https://github.com/pzagmel/todo-list"
    },

]

const Layout = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <DrawerAppBar />
                </div>
                <div className="row">
                    <div className="col-12 col-sm-4 text-center">
                        <BasicCard
                            title="Pedro Antonio Zagal Melani"
                            description={"Desarrollador Web Full Stack Jr. Kinesiólogo"
                            }
                        />
                        <div className='stack'>

                        <Stack  /> 
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 text-center">
                     
                    <h1 style={{fontStyle: 'italic'}}>PROYECTOS</h1>
                        <div className="row row-cols-1 row-cols-md-3 g-3 my-4">
                            {proyectos.map((item, index) => {
                                return (
                                    <div className="col text-center">
                                        <ProyectCards img={item.img} title={item.title} descripcion={item.descripcion} ruta={item.ruta} />
                                    </div>
                                );
                            })}
                            
                        </div>

                        <Experiencia />
                    </div>
                </div>
                

            </div>
            <div className="row"><Footer /></div>
        </>
    );
};

export default Layout;



