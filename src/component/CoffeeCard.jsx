import React from 'react';
import { FaBeer, FaDumpster, FaDumpsterFire, FaEdit, FaEye, FaXbox, FaXing, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee , coffees, setCoffees}) => {


    const { _id, name, quantity, supplier, test, category, details, photo } = coffee;
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your coffee has been deleted.',
                            'success'
                        )
                        const remaining=coffees.filter(cof=> cof._id !== _id)
                        setCoffees(remaining)
                        
                    }
                })
                

            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex w-full justify-between items-center pr-5">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{test}</p>
                    <p>{category}</p>
                    <p>{quantity}</p>
                </div>
                <div className=" flex flex-col gap-3">

                    <button> <FaEye /></button>
                    <Link to={`/updatecoffee/${_id}`}><button> <FaEdit /></button></Link>
                    <button onClick={() => handleDelete(_id)} className='text-white bg-red-500 rounded'> X </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;