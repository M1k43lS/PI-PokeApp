import style from './card.module.css'


export default function Card({ name, img, types, def}) {
    

    return (

        <div className={style.card}>
            <div className={style.container}>
                <img src={img} className={style.imagen} />
            </div>
            <div className={style.info}>
                <p className={style.infoName}>{name}</p>
                {
                    types.map(type => (
                        <span className={style.infoTypes} key={type}>{type}</span>
                        )
                    )}

				{/* <div className={style.defense}>
					{def}
					</div> */}
                    
                

            </div>
        </div >
    );
    }
