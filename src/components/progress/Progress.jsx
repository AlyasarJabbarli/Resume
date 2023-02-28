import "./style.css"

const Progress = ({title,w}) => {
    return (
        <div className="prg_all">
            <p>{title}</p>
            <div className="progress">
                <div className="percentage" style={{width:w}}>
                </div>
            </div>
        </div>
        
    )
  
}

export default Progress