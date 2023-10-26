import './manga.css';
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import strip from "./images/strip.png";
import i from "./images/i1.png"
function Manga(){
    return(
        <div>
            <img src={strip} className='image'/>
             <div className="heading">
            Watch Mangas
            </div>
            <div className="line">
                <hr/>
                </div>
      
        <div className="gallery-container">
            <div className="gallery-item" >
                <img src={one} />
                <div className="b"> hey hellooo</div>
            </div>
            
            <div className="gallery-item" >
                <img src={two} />
                <div className="b"></div>
            </div>
            <div className="gallery-item">
                <img src={three} />
                <div className="b"></div>
            </div>
            <div className="gallery-item" >
                <img src={four} />
                <div className="b"></div>
            </div>
        </div>
        <div className='imagei'>
        <img src={i} height="300px" width="300px"  />
        </div>
       
        </div>
       
    )
}
export default Manga;