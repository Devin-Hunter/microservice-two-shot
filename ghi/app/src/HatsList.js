import React from 'react';

function HatsList({hats,getHats}) {
    if (hats === undefined) {
        return null;
    }

    const handleDelete = async (hat) => {
        const hatUrl = `http://localhost:8090/api/locations/${hat.id}/`;
        const fetchConfig = {
            method: 'delete',
        }

    }
}