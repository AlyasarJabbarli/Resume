import H2heading from '../h2heading/H2heading'
import Progress from '../progress/Progress'
import './style.css'

const ProgressAll = () =>{
    return(
        <div className="progressAll">
            <H2heading text={"Design Skills"} />
            <ul className='skillList'>
                <li>
                    <Progress title={'React'} w={"50%"}/> 
                </li>
                <li>
                    <Progress title={'React'} w={"50%"}/> 
                </li>
                <li>
                    <Progress title={'React'} w={"50%"}/> 
                </li>
            </ul>
        </div>
    )
}

export default ProgressAll