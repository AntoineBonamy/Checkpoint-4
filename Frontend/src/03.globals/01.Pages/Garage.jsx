import React, { useEffect, useState } from 'react';
import Card from '../03.Components/Card';
import Navbar from '../03.Components/Navbar';

const Garage = () => {
    const [spaceships, setSpaceships] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5026/api/spaceship")
            .then((res) => res.json())
            .then((res) => setSpaceships(res))
            .catch((err) => console.error(err))
    }, [])

    return (
        <div>
            <Navbar />
            <div className=" bg-mainBg bg-cover bg-no-repeat flex flex-wrap justify-center items-center gap-10 pt-10 pb-10">
                {spaceships.map((el) => {
                    return <div key={el.id}>
                        <Card id={el.id} name={el.name} description={el.description} lightspeed={el.lightspeed} state={el.state} skin={el.skin}/>                    </div>
                })}
            </div>
        </div>
    );
};

export default Garage;