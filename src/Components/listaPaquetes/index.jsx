import React from 'react';
import PaqueteCard from '../paqueteCard';

import './listaPaquetes.css';

const ListaPaquetes = ({ paquetes, onBuy }) => {
    const handleBuy = (paquete) => {
        if (onBuy) onBuy(paquete);
    };

    return (
        <div className="lista-paquetes">
            {paquetes.map((paquete) => (
                <PaqueteCard
                    key={paquete.id}
                    paquete={paquete}
                    handleBuy={handleBuy}
                />
            ))}
        </div>
    );
};

export default ListaPaquetes;
