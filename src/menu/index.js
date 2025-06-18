import food from '../food.json'
import Food from "./component/"
import 'bootstrap/dist/css/bootstrap.min.css';

function menu() {
    return(
        <div class="container col-lg-8">
            <div class="row ">
                    {food.map((item, index) => {
                    return (<Food {...item} key={index}/>)
                    })}
            </div>
        </div>
    )
}

export default menu;