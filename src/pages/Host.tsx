// React
import React from 'react';

// Bootstrap
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

// Components
import LoadingAnimation from '../components/LoadingAnimation';
import Profile from '../components/Profile';

import {useAuth0} from '@auth0/auth0-react';

const LoginOptions: React.FC = function() {
	const {loginWithRedirect, logout, isAuthenticated} = useAuth0();

	const Welcome = () => {
		return (
			<Row>
				<Col sm={8}></Col>
				<Col sm={4} className="text-right">
					<Button
						onClick={() => {
							logout();
						}}
					>
						Log Out
					</Button>
				</Col>
			</Row>
		);
	};

	const SignIn = () => {
		return (
			<>
				<h2>Host</h2>
				<Row>
					<Col sm={8}>
						<p>Sign in/up to viewand build your own quizzes and host sessions:</p>
					</Col>
					<Col sm={4} className="text-right">
						<Button onClick={loginWithRedirect}>Log In / Sign Up</Button>
					</Col>
					<hr />
					<Col sm={12}>
						<p>
							If you are a <strong>participant</strong> and are looking join a session
							with a game code that has been shared with you, then you should use the
							login form on the <a href="/">home page</a>.
						</p>
					</Col>
				</Row>
			</>
		);
	};

	return isAuthenticated ? <Welcome /> : <SignIn />;
};

const Host: React.FC = function() {
	document.title = `Host Login | Nobelium`;

	const {isLoading} = useAuth0();

	if (isLoading) {
		return <LoadingAnimation />;
	}

	return (
		<>
			<LoginOptions />
			{/* Profile is only used for testing Auth0 and will be removed in future versions */}
			<Profile />
		</>
	);
};

export default Host;
