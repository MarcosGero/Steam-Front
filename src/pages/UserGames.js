import './UserGames.css';

function UserGames () {
    return(
        <div className="user-back-game">
         <div className="user-header-game">
             <img className="user-image" src={require('../resources/v3_1.jpg')} alt='user'/>
             <h3> <a href=''>UserName1 (*)</a> </h3>
             <p > » </p>
             <p> <a href=''>Juegos</a> </p>
         </div>
         <div className="user-body-game" >
             <div className="button-game">
                 <button className="button">
                     Jugados recientemente
                 </button>
                 <button className="button button-alt-color">
                     Todos los juegos
                 </button>
                 <button className="button">
                     Juegos Completados (0)
                 </button>
                 <button className="button">
                     Seguidos
                 </button>
                 <button className="button">
                     Reseñas
                 </button>
             </div>
             <h3> Slice </h3>
         </div>
        </div>
    );
}

export default UserGames;