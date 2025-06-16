const Inner = (props) => {
    return([
        <>
            <p>{props.name}</p>
            <p>{props.quantity}</p>
            <p>{props.sum}</p>
            <hr></hr>
        </>
        ])
}

export default Inner;