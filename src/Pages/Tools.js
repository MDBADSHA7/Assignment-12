import React, { useEffect, useState } from 'react';
import PurcesModal from './Home/PurcesModal';
import Service from './Service';

const Tools = () => {
    const [services, setServices] = useState([]);
    const [purces, setPurces] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='my-8'>
            <h2 className='text-center text-blue-700 font-bold text-4xl mb-5'>Our Manufacture Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setPurces={setPurces}
                    ></Service>)
                }
            </div>
            {purces && <PurcesModal
                purces={purces}
                setPurces={setPurces}
            >
            </PurcesModal>}
        </div>
    );
};

export default Tools;