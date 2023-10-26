import './Landing.css';
import eye from "./images/eye.gif"
function Landing(){
    return(
        <div className='landing'>
        <img src={eye} height="300px" width="300px" />
            <h1>
                Funny Flicks
            </h1>
        </div>
    )
}
export default Landing;