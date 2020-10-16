// React
import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, useLocation} from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Pages
import About from './pages/About';
import Host from './pages/Host';
import Participant from './pages/Participant';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = function() {
	return (
		<>
			<Header />
			<Container className="App">
				<Router>
					<Switch>
						<Route exact path="/">
							<Participant />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/host">
							<Host />
						</Route>
						<Route path="*">
							<NoMatch />
						</Route>
					</Switch>
				</Router>
			</Container>
			<Footer />
		</>
	);
};

const NoMatch: React.FC = function() {
	const location = useLocation();

	document.title = `Err404 | Nobelium`;

	return (
		<div>
			<h3 className="text-error">Error: 404</h3>
			<p>
				Looks like you&apos;re lost - your quest to find <code>{location.pathname}</code>{' '}
				ends here&hellip;
			</p>
			<p>
				You should head back <Link to="/">home</Link> where it&apos;s safe!
			</p>
		</div>
	);
};

export default App;
