import React, {Component} from "react";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps)  => (
    {
        counter: state.counter[ownProps.id] || 0 
    })

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increaseCounter: ()=> dispatch({type: "INCREMENT", id: ownProps.id}),
        decreaseCounter: ()=> dispatch({type: "DECREMENT", id: ownProps.id}),
    }
}

class Eat extends Component {
    render() {

    return([
        <>
            <div class="col-xs-12 col-sm-6 col-xl-4 d-flex">
                <div class="card p-2 mb-3 flex-grow-1">
                    <img src={this.props.img} class="card"></img>
                        <div class="card-body">
                            <b class="fs-4">{this.props.name}</b>
                            <p style={{textAlign: 'justify'}}>
                                {(() => {
                                if (this.props.type === "шаурма" || this.props.type === "снеки") {
                                return (
                                    <b>Состав: </b>
                                )
                                } else if (this.props.type === "напитки") {
                                return (
                                    <b>Описание: </b>
                                )
                                } 
                            })()}
                                <span class="fst-italic">{this.props.composition.join(', ')}</span><br></br>
                            {(() => {
                                if (this.props.type === "шаурма" || this.props.type === "снеки") {
                                return (
                                    <b>Вес: </b>
                                )
                                } else if (this.props.type === "напитки") {
                                return (
                                    <b>Объем: </b>
                                )
                                } 
                            })()}
                            {this.props.weight}
                            &nbsp;
                            {(() => {
                                if (this.props.type === "шаурма" || this.props.type === "снеки") {
                                return (
                                    <>
                                    грамм.
                                    </>
                                )
                                } else if (this.props.type === "напитки") {
                                return (
                                    <>
                                    мл.
                                    </>
                                )
                                } 
                            })()}
                            
                            </p>
                        </div>
                        <div class="card-footer bg-transparent mt-auto">
                        <h2>{this.props.price} ₽</h2>
                            <div class="row">
                                <button type="button" class="btn btn-warning col-4" onClick={this.props.decreaseCounter}>-</button>
                                <span class="col-4 fs-4" style={{textAlign: 'center'}}>{this.props.counter}</span>
                                <button type="button" class="btn btn-warning col-4" onClick={this.props.increaseCounter}>+</button>
                            </div>
                        </div>
                </div>
            </div>
        </>
        ])
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Eat);