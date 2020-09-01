import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
	import Popper from 'popper.js';
  import 'bootstrap/dist/js/bootstrap.bundle.min';
 

function App() {
  return (    
    
 <div class="div">
   <h1>Tabla de integrantes</h1>
        <table  border="2" class="tabla">

<tr>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>Correo</th>
    <th>Celular</th>
</tr>
<tr>
    <td>Brayan   </td>
    <td>Isaza   </td>
    <td>brayitanisaza10@gmail.com   </td>
    <td>3024437139   </td>
</tr>
<tr>
    <td>Dairon   </td>
    <td>Quiroga   </td>
    <td>daironquiroga21@gmail.com   </td>
    <td>3014528307   </td>
</tr>
<tr>
    <td>Geison   </td>
    <td>Guisao   </td>
    <td>wwgeison465@gmail.com   </td>
    <td>3116945103   </td>
</tr>
<tr>
  <td>Timoteo   </td>
  <td>Vallejo   </td>
  <td>vallejo.timo15@gmailcom   </td>
  <td>3233413254   </td>
</tr>
</table>

    </div>
  
  );
}

export default App;
