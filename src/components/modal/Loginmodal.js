import './loginmodal.css'
import { Button } from '@mantine/core';
const Login=()=>{

  const closeit=()=>{
//    const close=document.getElementsByClassName('hidden');

   const close=document.getElementById('hide');
   close.style.display="none";
  };


  const openit=()=>{
    const close=document.getElementById('hide');
    close.style.display="block";
    
   };


return(
    <div>
    <Button id='open' variant="gradient" onClick={openit} gradient={{ from: 'indigo', to: 'cyan' }}>login</Button>

     <div className='modal hidden' id='hide'>
         
             <button className='close-modal' onClick={closeit}>close</button>
             <p>lorem34
Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

WARNING in src/components/layout/applayout.js
  Line 4:8:  'RenderRow' is defined but never used  no-unused-vars
  Line 9:8:  'Mail' is defined but never used       no-unused-vars</p>
         

     </div>
     </div>
)
};

export default Login;