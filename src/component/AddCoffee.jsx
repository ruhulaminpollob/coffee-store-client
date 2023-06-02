import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee=event=>{
        event.preventDefault()
        const form=event.target;

        const name =form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const test=form.test.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;

        const newCoffee={name,quantity,supplier, test, category, details, photo}

        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.insertedId) {
                // alert("coffee successfully added")
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully add a Coffee',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })

    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h1 className='text-3xl font-semibold pb-5 text-center'>Add a Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* form row  */}
                <div className='md:flex'>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row  */}
                <div className='md:flex'>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='supplier' placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='test' placeholder="test" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row  */}
                <div className='md:flex'>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='category' placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='photo' placeholder="https://democoffee.png" className="input input-bordered w-full" />
                    </label>
                </div>

                <input type="submit" className='btn btn-accent w-full  my-4' value="Add Coffee Details" />
            </form>
        </div>
    );
};

export default AddCoffee;