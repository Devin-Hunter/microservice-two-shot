import React from 'react';

const HatListItem = function({ hat, deleteHat }) {

    return(
        <div className="card w-25 m-3">
            <img src={hat.picture_url} className="card-img-top" />
            <div className="card-body">
                <h6 className="card-title">{hat.fabric} - {hat.style_name}</h6>
                <div>Color: {hat.color}</div>
                <div>Location: {hat.location.id}</div>
                <button onClick = {() => deleteHat(hat.id)} className="btn btn-lg btn-danger w-100 mt-3">Delete</button>
            </div>
        </div>
    )
}

export default HatListItem;