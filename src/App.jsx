// import React, { useState } from 'react';
// function Contador() {
//   // Inicializamos el estado 'contador' con un valor de 0
//   const [contador, setContador] = useState(0);

//   // Función que incrementa el valor del contador
//   const incrementarContador = () => {
//     setContador(contador + 1);  // Actualiza el valor del contador
//   };

//   const decrementarContador = () => {
//     setContador(contador - 1);  // Actualiza el valor del contador
//   };
//   return (
//     <div>
//       <h1>Contador: {contador}</h1> 
//       <button onClick={incrementarContador}>Incrementar</button>
//       <button onClick={decrementarContador}>Decrementar</button>
//     </div>
//   );
// }
// export default Contador;

//Fin Ejercicio 1



// import React, { useState, useEffect } from 'react';

// function Usuario() {
//   const [datosUsuario, setDatosUsuario] = useState(null);

//   // useEffect para realizar una petición a la API cuando se monte el componente
//   useEffect(() => {
//     // Hacemos la llamada a la API
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then(response => response.json())
//       .then(data => setDatosUsuario(data));  // Actualizamos el estado con los datos recibidos

//     return () => {
//       console.log('El componente se desmontó');  // Esta es la función de limpieza
//     };
//   }, []);  // Las dependencias vacías significan que el efecto solo se ejecuta una vez

//   if (!datosUsuario) return <p>Cargando...</p>;

//   return (
//     <div>
//       <h2>{datosUsuario.name}</h2>
//       <p>Email: {datosUsuario.email}</p>
//       <p>Phone: {datosUsuario.phone}</p>
//       <p>Web Site: {datosUsuario.website}</p>
//     </div>
    
//   );
// }
// export default Usuario;

//Fin de Ejercicio 3


// import React, { useContext } from 'react';
// const TemaContext = React.createContext('claro');
// function Boton() {
//   const tema = useContext(TemaContext);  // Consumimos el valor del contexto
//   return (
//     <button style={{ backgroundColor: tema === 'oscuro' ? '#540' : '#F000' }}>
//       Soy un botón
//     </button>
//   );
// }
// function App() {
//   return (
//     <TemaContext.Provider value="oscuro">
//       <Boton />
//     </TemaContext.Provider>
//   );
// }
// export default App;
//Fin de Ejercicio 4


import React, { useRef } from 'react';
function InputConFoco() {
  const inputRef = useRef(null);
  const enfocarInput = () => {
    inputRef.current.focus();  // Accede al DOM directamente
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={enfocarInput}>Enfocar</button>
    </div>
  );
}
export default InputConFoco;
