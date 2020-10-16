// React
import React from 'react';

const About: React.FC = function() {
	document.title = `About Nobelium`;

	return (
		<>
			<h2>About Nobelium</h2>
			<p>
				<a href="https://en.wikipedia.org/wiki/Nobelium">Nobelium</a> is &ldquo;a synthetic
				chemical element with the symbol No and atomic number 102. It is named in honour of
				Alfred Nobel&rdquo;. It&apos;s also the name I have chosen for this passion project
				- my <strong>Nobelium</strong> Quiz App.
			</p>
			<p>
				The purpose of this application is two-fold: to give question authors a place to
				author their quizzes and a place for quiz takers to join a quiz and take part in
				that session.
			</p>

			<h2>Features</h2>
			<p>This project is an evolving work-in-progress, I would like to have implemented:</p>

			<h3>Hosts</h3>
			<ul>
				<li className="done">Authenticated host login via Auth0 to allow access</li>
				<li>Build and view quizzes by that host</li>
				<li>Ability to generate and host a quiz session</li>
				<li>Control question flow and time-out answers</li>
				<li>
					Ability to override current participants scores in case of discrepancy or
					impromptu bonus points
				</li>
				<li>Running scores and leaderboard for the current session</li>
			</ul>
			<h3>Participants</h3>
			<ul>
				<li className="done">
					Let participants invent a display name for themselves or their team with the
					option to have one randomly generated, and to join a session by entering a "Game
					Code".
				</li>
				<li>See current question text</li>
				<li>See current question options</li>
				<li>Users will need to submit their response to prevent accidental presses</li>
				<li>See the correct answer when the host reveals it</li>
				<li>Running scores and leaderboard for the current session</li>
			</ul>

			<h2>Frameworks, Languages &amp; Libraries </h2>
			<p>Typical web tech consisting of HTML5, CSS3 and Javascript, plus:</p>
			<ul>
				<li>
					<a href="https://www.typescriptlang.org/">Typescript</a>
				</li>
				<li>
					<a href="https://sass-lang.com/documentation/syntax">SCSS</a>
				</li>
				<li>
					<a href="https://reactjs.org/">React</a>
				</li>
				<li>
					<a href="https://getbootstrap.com/">Bootstrap V4</a> with{' '}
					<a href="https://bootswatch.com/solar/">Bootswatch Solar</a>
				</li>
				<li>
					<a href="https://auth0.com/">Auth0</a> for Host Authentication
				</li>
				<li>
					<a href="https://github.com/andreasonny83/unique-names-generator">
						Unique Names Generator
					</a>{' '}
					for generating random user/team names
				</li>
			</ul>
		</>
	);
};

export default About;
