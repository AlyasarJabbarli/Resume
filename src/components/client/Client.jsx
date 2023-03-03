import './style.css'
const Client = (src) => {
    return (
        <div className="client">
            <img src={src.src} alt="" loading='lazy'/>
        </div>
    );
}
 
export default Client;