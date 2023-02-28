import './style.css'
const Client = (src) => {
    return (
        <div className="client">
            <img src={src.src} alt="" />
        </div>
    );
}
 
export default Client;