import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './component/Footer';
import Card from './component/Card';

function App() {
  return (
    <>
      <Header titulo="Compañías comerciales del Juego Sea of Thieves"/>

      <Card 
        ruta="https://pbs.twimg.com/media/EJvdG9NWkAA7jl0.jpg" 
        titulo="Acaparadores de Oro" 
        descripcion="Son una empresa codiciosa y amante del oro con el interés de acumular grandes cantidades. Hay un representante de los Acaparadores de oro en cada puesto avanzada de Sea of ​Thieves, que se distingue por sus tiendas verdes y doradas." 
      />

      <Card 
        ruta="https://pbs.twimg.com/media/EtYFXTHXYAA1jRs.jpg" 
        titulo="Orden de las Almas"   
        descripcion="Formados por magos y videntes, han encontrado una manera de recuperar los recuerdos de los craneos de piratas olvidados. Con este conocimiento y poder, la Orden ha instalado una tienda de campaña púrpura en cada puesto de avanzada." 
      />

      <Card 
        ruta="https://pbs.twimg.com/media/EZMAd5FWAAI0uH8.jpg" 
        titulo="Alianza Comerciante" 
        descripcion="Cada muelle de puesto avanzada alberga a un representante de la Alianza Comerciante dispuesto a reclutar nuevos comerciantes y enviarlos en viajes cada vez más desafiantes para recuperar cajas de mercancías." 
      />

      <Footer/>
    </>
  );
}

export default App;
