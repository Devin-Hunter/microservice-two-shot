import React from 'react';

function HatsList({hats, getHats}) {
    const handleDelete = async (hat) => {
        const hatUrl = `http://localhost:8090/api/locations/${hat.id}/`;
        const fetchConfig = {
            method: 'delete',
        }
        const hatResponse = await fetch(hatUrl, fetchConfig)
        if (hatResponse.ok) {
            getHats();
        }
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Style Name</th>
                    <th>Fabric</th>
                    <th>Color</th>
                    <th>Picture</th>
                    <th>Location</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {hats.map((hat) => {
                        return (
                            <tr key={hat.id}>
                                <td>{ hat.style_name }</td>
                                <td>{ hat.fabric }</td>
                                <td>{ hat.color }</td>
                                <td>
                                    <img src={ hat.picture_url } alt="hat" width="100px" height="100px"/>
                                </td>
                                <td>{ hat.location }</td>
                                {<td>
                                    <button type="button" id={hat.id} onClick={() => handleDelete(hat)} className="btn btn-danger">Delete</button>
                                    </td>}
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    );
}

export default HatsList;