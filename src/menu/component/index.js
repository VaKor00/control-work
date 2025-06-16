const Eat = (props) => {
    return([
        <>
            <div className="position">
                <img src={props.img} style={{width: 120, height: 120, borderRadius: 10}}></img>
                <div>
                    <b>{props.name}</b>
                    <p><b>Описание: </b>{props.composition.join(', ')}</p>
                    <p><b>Вес: </b>{props.weight}</p>
                    <h2>{props.price} ₽</h2>
                    <div className="add">
                        <button>-</button><span>0</span><button>+</button>
                    </div>
                </div>
            </div>
        </>
        ])
}

export default Eat;