import React from 'react';
import DrawerAppBar from '../DrawerAppBar';
// import Footer from '../Footer';
import BasicCard from '../Card';
import Stack from '../Stack';


const Layout = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <DrawerAppBar />
                </div>
                <div className="row">
                    <div className="col-4 text-center">
                        <BasicCard title="WHO IS THIS GUY" description={"Lorem ipsum dolor sit amet amlkasdnakjsdnaksjdansdkamsdlkmefñklwemwelkfmwekjfwnefklwemflñwkefmñwelkfñmwelfkwmeñflkwemfñlkwemflñkwemfkwefwef, al perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error, delectus quo eius exercitationem tempore. Delectus sapiente, provident corporis dolorum quibusdam aut beatae repellendus est labore quisquam"} />
                      <Stack/>
                     
                    </div>
                    <div className='col-8 text-center'>
                        <BasicCard title="MY PROYECTS" />
                    </div>
                </div>
            </div>
            <div className='row'>
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default Layout;