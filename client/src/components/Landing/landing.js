import style  from './landing.module.css';
import Home from '../Home/Home';

export default function Landing() {
  return (
    <div  classname={style.landing}>
        <div className={style.background}>





            <a  className={style.goto}  href="/home">
            <div className={style.imgDoor1}>
            <div className={style.imgDoor2}>
            </div>
            </div>
            </a>





            
        {/* <p className={style.btn}>
            <div className={style.welcome}>
                <h1 className={style.text}> Welcome to PokeDex </h1>
            </div>
            <div className={style.contenedor}>
                <label classname={style.rectangulo}>
                    <input type="text" id="Name" name="Name" placeholder="Ingresa tu nombre"/>
                </label>
            </div>
        </p> */}
        </div>
    </div>
   );
}



