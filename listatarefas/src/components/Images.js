import foto from '../assets/f6.jpg';

const Images = () => {
    return (
        <div>
            <img src="/f5.webp" />
            <img src={foto}  alt="imagem" title="imagem"/>
        </div>
    )
}

export default Images;