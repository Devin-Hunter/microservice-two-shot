import React, {useEffect, useState} from 'react';

function NewShoeForm() {
    const [bins, setBins] = useState([]);
    const [formData, setFormData] = useState({
        model_name: '',
        manufacturer: '',
        color: '',
        bin: '',
        picture: '',
    })

    // const [selectedbin, setSelectedBin] = useState('');
    // const [name, setName] = useState('');
    // const [brand, setBrand] = useState('');
    // const [color, setColor] = useState('');

    const handleFormChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;

        setFormData({
            ...formData,
            [inputName]: value
        });
    }


    const fetchBinData = async () => {
        const url = 'http://localhost:8100/api/bins';

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error ('Bad fetch response for Bins');
        } else {
            const data = await response.json();
            console.log(data);
            setBins(data.bins)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const shoeUrl = 'http://localhost:8081/api/shoes/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(shoeUrl, fetchConfig);
        console.log(response);

        if (!response.ok) {
            throw new Error ('Bad fetch response for Shoes');
        } else {
            setFormData({
                model_name: '',
                manufacturer: '',
                color: '',
                bin: '',
                picture: '',
            })
        }
    }

    useEffect(() => {
        fetchBinData();
    }, []);

    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Add a New Shoe!</h1>
              <form onSubmit={handleSubmit} id="create-conference-form">

                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} placeholder="model_name" required type="text" name="model_name" id="model_name" className="form-control" />
                  <label htmlFor="model_name">Model Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} placeholder="manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control" />
                  <label htmlFor="manufacturer">Brand</label>
                </div>

                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} placeholder="color" required type="text" name="color" id="color" className="form-control" />
                  <label htmlFor="color">Color</label>
                </div>

                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} placeholder="picture" required type="text" name="picture" id="picture" className="form-control" />
                  <label htmlFor="picture">Insert Picture URL (optional)</label>
                </div>

                <div className="mb-3">
                  <select onChange={handleFormChange} required name="bin" id="bin" className="form-select">
                    <option value="">Choose a Bin</option>
                    {bins.map(bin => {
                      return (
                        <option key={bin.href} value={bin.href}>{bin.closet_name} - Bin: {bin.bin_number}</option>
                      )
                    })}
                  </select>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default NewShoeForm
