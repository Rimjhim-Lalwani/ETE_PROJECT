import React from "react";
import Button from "./Button";
import './Joke.css';

const Joke = () => {
	const [Joke, setJoke] = React.useState("");

	const fetchApi = () => {
		fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
			.then((res) => res.json())
			.then((data) => setJoke(data.joke));
	};

	return (
		
		<div className="joke">
			<div className="heading">
            random jokes
            </div>
            <div className="line">
                <hr/>
                </div>
				<div className="contain">
					<p>{Joke}</p></div>
			<Button callApi={fetchApi} /> 
			 
		</div>
	);
}

export default Joke;
