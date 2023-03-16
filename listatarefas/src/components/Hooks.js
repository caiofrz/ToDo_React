import {useState} from 'react'

const Hooks = () => {
    let idade = 20;

    const [novaIdadde, setIdade] = useState(idade);

    const changeAge = () => {
         idade ++;
         console.log(idade);
    }

    function newAge() {
        setIdade(50)
    }
    return(
        <div>
            <span>Idade: {idade}</span><br></br>
            <button onClick={changeAge}>Aumentar idade</button>
            <hr />
            <span>Idade: {novaIdadde}</span><br></br>
            <button onClick={newAge}>Aumentar idade com state</button>
        </div>
    )
}

export default Hooks;