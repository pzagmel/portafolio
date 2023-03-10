import React from 'react';
import DrawerAppBar from '../DrawerAppBar';
import BasicCard from '../BasicCard';
import Stack from '../Stack';
import Footer from '../Footer';
import ProyectCards from '../ProyectsCards';

const proyectos = [
    {
        img: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/02/12/16131067902692.jpg",
        title: "Proyecto A",
        descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        ruta: "https://github.com/pzagmel/"
    },
    {
        img: "https://assets.adnradio.cl/2022/08/Clipboard-2-925x470.jpg",
        title: "Proyecto B",
        descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        ruta: "https://github.com/pzagmel/"
    },
    {
        img: "https://content.rolex.com/dam/world-of-rolex/tennis/wimbledon/2022/share-search/rolex-and-tennis-wimbledon-2022-share_wim21jb_01153_r.jpg",
        title: "Proyecto C",
        descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        ruta: "https://github.com/pzagmel/"
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
                            title="WHO'S THIS GUY"
                            description={["Lorem ipsum dolor sit amet amlkasdnakjsdnaksjdansdkamsdlkmefñklwemwelkfmwekjfwnefklwemflñwkefmñwelkfñmwelfkwmeñflkwemfñlkwemflñkwemfkwefwef, al perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error, delectus quo eius exercitationem tempore. Delectus sapiente, provident corporis dolorum quibusdam aut beatae repellendus est labore quisquam", <Stack />
                            ]}
                        />
                    </div>
                    <div className="col-12 col-sm-8 text-center">
                        <BasicCard
                            title="MY PROYECTS"
                        />

                        <div className="row row-cols-1 row-cols-md-3 g-3">
                            {proyectos.map((item, index) => {
                                return (
                                    <div className="col text-center">
                                        <ProyectCards img={item.img} title={item.title} descripcion={item.descripcion} ruta={item.ruta} />
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
            <div className="row"><Footer /></div>
        </>
    );
};

export default Layout;




