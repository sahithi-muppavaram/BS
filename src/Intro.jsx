import React from 'react';
import PropTypes from 'prop-types';

import '../style/Intro.css';

const Intro = ({ setAppStatus }) => {
	const onSkipIntro = () => {
		setAppStatus('newGame');
	};

	return (
		<div className="fade">
			<section className="star-wars-intro" onClick={onSkipIntro}>
				<div className="crawl">
					<div className="title">
						<p>GAME</p>
						<h1>The Starships</h1>
					</div>
					<p>
						It is a battleships game react application styled by sahithi and
						vanshita on Star Wars theme .
					</p>
					<br></br>
					<p className="p-center">Confront the sith lord...</p>
					<br></br>
					<p className="p-center">May the force be with you jedi master.</p>
					<br></br>
					<p className="p-center">Click on the screen to continue!</p>
				</div>
			</section>
		</div>
	);
};

export default Intro;

Intro.propTypes = {
	setAppStatus: PropTypes.func.isRequired,
};
