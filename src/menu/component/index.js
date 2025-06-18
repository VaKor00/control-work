import 'bootstrap/dist/css/bootstrap.min.css';

const Eat = (props) => {
    return([
        <>
            <div class="col-lg-4 d-flex flex-wrap align-items-stretch">
                <div class="card p-2 mb-3">
                    <img src={props.img} class="card"></img>
                    <div>
                        <b class="fs-4">{props.name}</b>
                        <p><b>Описание: </b>{props.composition.join(', ')}</p>
                        <p><b>Вес: </b>{props.weight}</p>
                        <h2>{props.price} ₽</h2>
                        <div className="add">
                            <button>-</button><span>0</span><button>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        ])
}

export default Eat;