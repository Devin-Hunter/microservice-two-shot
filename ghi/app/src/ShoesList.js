function ShoesList(props) {

    // return (
    //     <table className="table table-striped">
    //         <thead>
    //             <tr>
    //                 <th>Shoe Names</th>
    //                 <th>Brand</th>
    //                 <th>Color</th>
    //                 <th>Closet</th>
    //                 <th>Closet Bin Number</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //         {props.shoes.map(shoe => {
    //             return (
    //                 <tr key={shoe.href}>
    //                     <td>{ shoe.model_name }</td>
    //                     <td>{ shoe.manufacturer}</td>
    //                     <td>{ shoe.color }</td>
    //                     <td>{ shoe.bin.closet_name }</td>
    //                     <td>{ shoe.bin.bin_number}</td>
    //                 </tr>
    //             );
    //         })}
    //         </tbody>
    //     </table>
    // )
    return (
        <div className="containter-fluid">
            <div className="row gy-5">
            {props.shoes.map(shoe => {
                return (
                    <div className="col-md-3 md-4" key={shoe.href}>
                        <div className="card h-100 shadow rounded my-4">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs nav-fill">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Edit</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Delete</a>
                            </li>
                            </ul>
                        </div>
                            <img src={shoe.picture} alt='' className="mh-25"></img>
                            <div className="card-body">
                                <h5 className="card-title">{shoe.model_name}</h5>
                                <h6 className="card-title">{shoe.manufacturer}</h6>
                                <p className="card-text">{shoe.color}</p>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">{shoe.bin.closet_name} - Bin: {shoe.bin.bin_number}</small>
                        </div>
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
    )
}

export default ShoesList
