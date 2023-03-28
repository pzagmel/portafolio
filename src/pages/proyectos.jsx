import React from "react";
import ProyectCards from "../components/ProyectsCards";
import pokegym from '../assets/img/pokegym.png';
import starwars from '../assets/img/starwars.png';
import todo from '../assets/img/todo.png';

const proyectos = [
    {
        img: pokegym,
        title: "POKEGYM",
        descripcion: "Aplicación enfocada en un gimnasio ficticio en la que podrás tener acceso a tu ficha de evaluacion, ver ejercicios y evolucionar. Desarrollado con ReactJs, Bootstrap, Python, Flask, SQL Alchemy y JWT.",
        ruta: "https://github.com/pzagmel/poke-gym"
    },
    {
        img: starwars,
        title: "Starwars blog Reading list",
        descripcion: "Blog de ejercicio para practicar manipulación de datos utilizando fetch, ReactJs y Flux/Context.",
        ruta: "https://github.com/pzagmel/Starwars-blog-reading-list"
    },
    {
        img: todo,
        title: "My Tasks",
        descripcion: "Aplicación Web en la que podrás agregar y eliminar tareas. Desarrollado con ReactJs y manipulando datos utilizando fetch desde Postman.",
        ruta: "https://github.com/pzagmel/todo-list"
    },

]

const Proyectos= () => {
    return (
        <>
            <div className="container">             
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 text-center">                      
                        <div className="row row-cols-1 row-cols-md-3 g-3 my-2 ">
                            {proyectos.map((item, index) => {
                                return (
                                    <div className="col text-center"key={"asd"+index}>
                                        <ProyectCards img={item.img} title={item.title} descripcion={item.descripcion} ruta={item.ruta} />
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Proyectos;