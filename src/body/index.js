import Menu from "../menu/index";
import Basket from "../basket/index";
import 'bootstrap/dist/css/bootstrap.min.css';

function body() {
    return(
        <div class="container">
            <br></br>
            <div class="row">
                <Menu/>
                <Basket/>
            </div>
        </div>
    )
}

export default body;