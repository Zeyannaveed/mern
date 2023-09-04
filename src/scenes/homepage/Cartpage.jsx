import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cartpage() {

  const [data, setdata] = useState([]);

  const handleclick = async () => {
    try {
      const response = await fetch('http://localhost:6001/home/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ath_token': localStorage.getItem('ath_token'),
        },
      });

const responseData = await response.json()
          setdata(responseData);
      

    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    handleclick();
  }, []);

  return (
    <>
      { data && data.length > 0 ? (
        
        <div className='bg-white m-auto rounded-2xl mt-4 mb-4 p-4 w-[50%]'>
          {data.map((products) => (
            <div
              key={products.products._id}
              className='flex  bg-white mt-4 mr-4 ml-4 rounded-2xl p-4'
            >
              <div className="img w-1/4">
                <img
                  className='w-[80%] '
                  src={`http://localhost:6001/${products.products.img}`}
                  alt=""
                />
              </div>
              <div className='w-3/4 justify-start'>
                <h1 className='font-bold text-base'>{products.products.name}</h1>
                <p className='text-slate-800'>{products.products.catagory}</p>
                <p className='font-bold text-lg '>${products.products.price}</p>
              </div>
              </div>

        
          ))}
            <Link to={'/checkout'}>
          <div className='flex'>
        <button className='bg-orange-dark pl-4 pr-4 pt-2 pb-2 text-white rounded-2xl ml-auto'>Proceed to check out</button>
        </div>
        </Link>
        </div>
      ) : (
        <div>Loading
            
        </div>
      )}
    </>
  );
}
