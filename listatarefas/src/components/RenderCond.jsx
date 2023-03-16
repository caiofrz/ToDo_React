const RenderCond = (props) => {

    // const x = 10;

    return(
        <div>
            {props.x > 5 && <p>x é maior q 5</p>}
            {props.x > 5 ? <p>x é maior q 5</p>: <p>x é menor q 5</p>}

        </div>
    )
}

export default RenderCond;