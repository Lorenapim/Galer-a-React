const Card = ({titulo, ruta, descripcion}) => {
    return (
        <div className="contenedor">
            <div className="carta">
                <img src={ruta} alt={descripcion} className="carta-img" />
                <div className="carta-body">
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                </div>    
            </div>
        </div>
    );
};

export default Card 