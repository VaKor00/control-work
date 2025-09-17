import reducer, { initialState } from '../../store/reducer';
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch, ownProps) => {
     return {
        delete: ()=> dispatch({type: "DELETE", id: ownProps.id}),
    }
  };

const Inner = (props) => {

    return([
        <>
            <tr class="container">
                <td class="col-7">{props.name}</td>
                <td class="col-1 text-end">{props.quantity}</td>
                <td class="col-3 text-end">{props.price * props.quantity} ₽</td>
                <td class="col-1 text-center"><button type="button" onClick={props.delete} class="btn btn-dark btn-circle mb-1">x</button></td>
            </tr>
        </>
        ])
}

export default connect(null, mapDispatchToProps)(Inner);