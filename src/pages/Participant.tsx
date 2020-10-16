// React
import React from 'react';

// Components
import Login from '../components/LoginParticipant';

interface ParticipantProps {}
interface ParticipantState {
	isLoggedIn: false;
}

class Participant extends React.Component<ParticipantProps, ParticipantState> {
	constructor(props: ParticipantProps) {
		super(props);

		this.state = {isLoggedIn: false};
	}

	render() {
		return (
			<>
				<h2>Welcome to Nobelium</h2>
				{!this.state.isLoggedIn && <Login />}
				{this.state.isLoggedIn && <p>Logged In</p>}
			</>
		);
	}
}

export default Participant;
