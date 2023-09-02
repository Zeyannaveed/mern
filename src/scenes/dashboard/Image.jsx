import React from 'react'
import { useState } from 'react';
import {useEffect} from 'react'

export default function Image() {

const [name, setname] = useState("")
const [immg, setimmg] = useState(null)

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await fetch('http://localhost:6001/image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "price": 55
          })
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setname(data.name)
        setimmg(data.img)
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    getdata();
  }, []);
  
  return (
<>
    <h2>{name}</h2>
    <img width="200px" src={"http://localhost:6001/assets/"+immg} alt="" />
    <img width="200px" src={"http://localhost:6001/assets/"+immg} alt="" />
    <img width="200px" src={"http://localhost:6001/assets/"+immg} alt="" />
    <img width="200px" src={"http://localhost:6001/assets/"+immg} alt="" />
    <img width="200px" src={"http://localhost:6001/assets/"+immg} alt="" />
    <div>Image</div>
    </>
  )
}
