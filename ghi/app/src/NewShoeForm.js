// import React, {useEffect, useState} from 'react';

// function NewShoeForm() {
//     const [bin, setBin] = useState([]);
//     const [formData, setFormData] = useState({
//         name: '',
//         brand: '',
//         color: '',
//         selectedbin: '',
//     })

//     // const [selectedbin, setSelectedBin] = useState('');
//     // const [name, setName] = useState('');
//     // const [brand, setBrand] = useState('');
//     // const [color, setColor] = useState('');

//     const handleFormChange = (event) => {
//         const value = event.target.value;
//         const inputName = event.target.name;

//         setFormData({
//             ...formData,
//             [inputName]: value
//         });
//     }


//     const fetchBinData = async () => {
//         const url = 'http://localhost:8100/api/bins';

//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error ('Bad fetch response for Bins');
//         } else {
//             const data = await response.json();
//             console.log(data);
//             setBin(data.bins)
//         }
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const shoeUrl = 'http://localhost:8081/api/shoes/';

//         const fetchConfig = {
//             method: "post",
//             body: JSON.stringify(formData),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };

//         const response = await fetch(shoeUrl, fetchConfig);

//         if (!response.ok) {
//             throw new Error ('Bad fetch response for Shoes');
//         } else {
//             setFormData({
//                 name: '',
//                 brand: '',
//                 color: '',
//                 selectedbin: '',
//             })
//         }
//     }

//     useEffect(() => {
//         fetchBinData();
//     }, []);

//     return (
//         <div className="row">
//           <div className="offset-3 col-6">
//             <div className="shadow p-4 mt-4">
//               <h1>Add a New Shoe!</h1>
//               <form onSubmit={handleSubmit} id="create-conference-form">

//                 <div className="form-floating mb-3">
//                   <input onChange={handleFormChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
//                   <label htmlFor="name">Name</label>
//                 </div>

//                 <div className="form-floating mb-3">
//                   <input onChange={handleFormChange} placeholder="Starts" required type="date" name="starts" id="starts" className="form-control" />
//                   <label htmlFor="starts">Starts</label>
//                 </div>

//                 <div className="form-floating mb-3">
//                   <input onChange={handleFormChange} placeholder="Ends" required type="date" name="ends" id="ends" className="form-control" />
//                   <label htmlFor="ends">Ends</label>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="description">Description</label>
//                   <textarea onChange={handleFormChange} className="form-control" id="description" rows="3" name="description"></textarea>
//                 </div>

//                 <div className="form-floating mb-3">
//                   <input onChange={handleFormChange} placeholder="Maximum presentations" required type="number" name="max_presentations" id="max_presentations" className="form-control" />
//                   <label htmlFor="max_presentations">Maximum presentations</label>
//                 </div>

//                 <div className="form-floating mb-3">
//                   <input onChange={handleFormChange} placeholder="Maximum attendees" required type="number" name="max_attendees" id="max_attendees" className="form-control" />
//                   <label htmlFor="max_attendees">Maximum attendees</label>
//                 </div>

//                 <div className="mb-3">
//                   <select onChange={handleFormChange} required name="location" id="location" className="form-select">
//                     <option value="">Choose a location</option>
//                     {bin.map(bin => {
//                       return (
//                         <option key={bin.id} value={bin.id}>{bin.}</option>
//                       )
//                     })}
//                   </select>
//                 </div>
//                 <button className="btn btn-primary">Create</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )
// }

// export default NewShoeForm
