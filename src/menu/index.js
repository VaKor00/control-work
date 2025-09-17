import food from '../food.json'
import Eat from "./component/"
import 'bootstrap/dist/css/bootstrap.min.css';

function menu() {
    return(
        <div class="container h-100 col-lg-8 card-group">
            <div class="row">
                    {food.map((item) => (
                    <Eat {...item} key={item.id} id={item.id} />
                    ))}
                
            </div>
        </div>
    )
}

export default menu;