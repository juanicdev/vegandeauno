import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react'

const BasicButtons = ({stock, onAdd, initial}) => {
  const [count, setCount] = useState(1)
  const addCount = () =>{
      setCount(count + 1)
  }
  const removeCount = () =>{
      setCount (count - 1)
  }   


  return (
  
    <Stack spacing={2} direction="row">
      {/* <Button variant="text">Text</Button> */}
      {console.log(initial)}
      <Button contained onClick={(removeCount)} disabled ={( count <= initial )} >-</Button>  
      <p>{count}</p>
      <Button contained onClick={(addCount)} disabled ={( count === stock )} >+</Button>

      <button onClick={() => onAdd (count)}> Agregar al carrito: </button>
         
                
                {/* <Button variant="outlined">Outlined</Button> */}
    </Stack>
  );
}

export default BasicButtons;