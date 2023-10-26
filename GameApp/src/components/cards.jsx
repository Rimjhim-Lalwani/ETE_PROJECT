import './cards.css';

function Cards(){
    return(
        <div>
        
        <div className="heading">
      play mini games

    </div>
    <div className="line">
                <hr/></div>
    
    <div className="r1container">
    
      <div className="r1card1">
        <div className="r1name">
          <h1>TIC TAC TOE</h1>
        </div>
        
        <div className="r1details">
          <p>
            
          </p>
        </div>
        <a href="/tictactoe"><button>Play</button></a>

        <div className="c"></div>
      </div>

     
      <div className="r1card1">
        <div className="r1name">
          <h1>FEED THE SNAKE</h1>
        </div>
        <div className="r1image">
          <i className="fa-solid fa-robot fa-2xl"></i>
        </div>
        <div className="r1details">
          <p>
            
          </p>
        </div>
        <a href="/snake"><button>Play</button></a>
        <div className="c"></div>
      </div>

      
      {/* <div className="r1card1">
        <div className="r1name">
          <h1>NLP Services</h1>
        </div>
        <div className="r1image">
          <i className="fa-solid fa-head-side-virus fa-2xl"></i>
        </div>
        <div className="r1details">
          <p>
            Sentiment analysis, language translation, text summarization, and
            chatbot development.
          </p>
        </div>
        <a href="about.html"><button>Read More</button></a>
        <div className="c"></div>
      </div>
      <div className="r1card1">
        <div className="r1name">
          <h1>Vision Solutions</h1>
        </div>
        <div className="r1image">
          <i className="fa-solid fa-laptop-code fa-2xl"></i>
        </div>
        <div className="r1details">
          <p>
            Image and Video analysis, Object recognition and Facial recognition
            Applications
          </p>
        </div>
        <a href="about.html"><button>Read More</button></a>
        <div className="c"></div>
      </div> */}
    </div>
      </div>
    )
}
export default Cards