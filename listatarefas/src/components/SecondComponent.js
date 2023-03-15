const SecondComponent = () =>  {

    const handleClick = () => {
        console.log("CLICK");
        };

    return(
        <div>
            <button onClick={handleClick}>
                Clique AQUI!
            </button>
            <hr/>
            <button onClick = {() => console.log("CLICK")}>botão</button>
        </div>
    );
};

export default SecondComponent;