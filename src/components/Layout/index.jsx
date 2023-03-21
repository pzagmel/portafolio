import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import DrawerAppBar from '../DrawerAppBar';
import BasicCard from '../BasicCard';
import Stack from '../Stack';
import Footer from '../Footer';
import Experiencia from '../../pages/experiencia';
import Proyectos from '../../pages/proyectos';
import './index.css';






const Layout = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Proyectos />,
        },
        {
            path: "/experiencia",
            element: <Experiencia />,
          },
      ]);
   
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
                            <Stack />
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 text-center">
                        <RouterProvider router={router} />
                    </div>
                </div>


            </div>
            <div className="row"><Footer /></div>
        </>
    );
};

export default Layout;



