const SecondComponent = () =>  {

    const handleClick = () => {
        console.log("CLICK");
        };

    return(
        <div>
            <button OnClick={handleClick}>
                Clique AQUI!
            </button>
            <hr/>
            <button OnClick = {() => console.log("CLICK")}>botão</button>
        </div>
    );
};

export default SecondComponent;