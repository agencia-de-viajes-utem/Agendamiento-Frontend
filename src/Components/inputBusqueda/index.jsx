import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

export default function InputBusqueda({ id, options, onSelect, placeholder: customPlaceholder }) {
    const [selected, setSelected] = useState([]);

    const handleSelect = (selected) => {
        setSelected(selected);
        if (onSelect) {
            onSelect(selected);
        }
    };

    const placeholderText = customPlaceholder || 'Buscar aeropuertos...';

    return (
        <>
            <Typeahead
                id={id}
                labelKey="nombre"
                options={options}
                placeholder={placeholderText}
                onChange={handleSelect}
                selected={selected}
            />
        </>
    );
}
