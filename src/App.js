import './App.css';
import Mensaje from './Mensaje';



const Descripcion = () => {
  return (
    <p>Esta es la app del curso de fullstack</p>
  );
}

const App = () => {

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'></Mensaje>
      <Mensaje color='green' message= 'en un curso de '></Mensaje>
      <Mensaje color='yellow' message= 'React '></Mensaje>
      <Descripcion></Descripcion>
    </div>
  );
}

export default App;
