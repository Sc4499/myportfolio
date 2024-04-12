import React from 'react';

import image1 from "../component/image/equity.png";
import image2 from "../component/image/4technoze.png";
import image3 from "../component/image/kaya.png";
import image4 from "../component/image/netflix-clone.png";
import image5 from "../component/image/pfizer.png";
import image6 from "../component/image/punjab-sind.png";
import image7 from "../component/image/wasalt.png";
const Pcard = () => {
    const prodata = [
        {
            id: 1,
            image: image1,
            title: "Equity Address",
            link: "https://equity-address.herokuapp.com/"
        },
        {
            id: 2,
            image: image2,
            title: "4technoze",
            link: "https://4technoze.com/"
        },
        {
            id: 3,
            image: image3,
            title: "Kaya",
            link: "https://kayaskinconsult.ai/"
        },
        {
            id: 4,
            image: image4,
            title: "netflix-clone",
            link: "https://clone-flixnet.herokuapp.com/"
        },
        {
            id: 5,
            image: image5,
            title: "pfizer.com",
            link: "https://www.pfizerpro.com"
        },
        {
            id: 6,
            image: image6,
            title: "Punjab sind",
            link: "https://www.punjabsind.com/"
        },
        {
            id: 7,
            image: image7,
            title: "Wasalt.com",
            link: "https://www.wasalt.com/"
        }

    ]
    console.log(prodata);
    return (
        <>
            {
                prodata.map(item => {
                    return (
                        <div className='col-md-4 mb-4'>
                            <div class="card">
                                <img src={item.image} class="card-img-top" alt="..." />


                                <div className="card-body">
                                    <p>{item.title}</p>
                                    <a href={item.link} className="card-link namecol">See portfolio</a>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default Pcard
