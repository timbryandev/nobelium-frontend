// React
import React, {ChangeEvent, FormEvent} from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/esm/Alert';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';

// Plugins
import {uniqueNamesGenerator, Config, adjectives, animals} from 'unique-names-generator';

interface LoginProps {}

interface LoginData {
	userName: string;
	gameCode: string;
}
interface LoginState extends LoginData {
	loading: boolean;
	errGameNotFound: boolean;
	errInvalidSubmitData: boolean;
}

function createUniqueName() {
	const customConfig: Config = {
		dictionaries: [adjectives, animals],
		separator: ' ',
		style: 'capital',
	};

	const capitalizedName: string = uniqueNamesGenerator(customConfig);

	return capitalizedName;
}

class Login extends React.Component<LoginProps, LoginState> {
	constructor(props: LoginProps) {
		super(props);

		const loginDetails: LoginData = this.getSessionDataFromLS();
		this.state = {
			loading: false,
			errGameNotFound: false,
			errInvalidSubmitData: false,
			userName: loginDetails.userName,
			gameCode: loginDetails.gameCode,
		};

		this.setUserName = this.setUserName.bind(this);
		this.setUniqueName = this.setUniqueName.bind(this);
		this.setGameCode = this.setGameCode.bind(this);

		this.saveSessionDataToLS = this.saveSessionDataToLS.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	componentDidMount() {
		document.title = `User Login | Nobelium`;
	}

	saveSessionDataToLS() {
		const data = JSON.stringify({
			userName: this.state.userName,
			gameCode: this.state.gameCode,
		});

		localStorage.setItem('login-data', data);
	}

	getSessionDataFromLS() {
		const data = localStorage.getItem('login-data');
		let json: LoginData = {userName: '', gameCode: ''};
		if (data) {
			try {
				json = JSON.parse(data);
			} catch (err) {}
		}
		return json;
	}

	setUserName(event: ChangeEvent) {
		const value = (event.target as HTMLInputElement).value;
		this.setState({userName: value});
	}
	setUniqueName() {
		const value = createUniqueName();
		this.setState({userName: value});
	}

	setGameCode(event: ChangeEvent) {
		const value = (event.target as HTMLInputElement).value;
		this.setState({gameCode: value});
	}

	isSubmitDataIsValid() {
		const validUserName = !!this.state.userName && !!this.state.userName.trim().length;
		const validGameCode = !!this.state.gameCode && !!this.state.gameCode.trim().length;

		return validUserName && validGameCode;
	}

	handleReset() {
		this.setState(
			{
				userName: '',
				gameCode: '',
				loading: false,
				errGameNotFound: false,
				errInvalidSubmitData: false,
			},
			this.saveSessionDataToLS
		);
	}

	handleSubmit(event: FormEvent<HTMLElement>) {
		event.preventDefault();

		this.setState((state, props) => {
			return {loading: true};
		});

		if (this.isSubmitDataIsValid()) {
			this.setState({errInvalidSubmitData: false});
			this.saveSessionDataToLS();
		} else {
			this.setState({errInvalidSubmitData: true});
		}

		setTimeout(() => {
			this.setState((state, props) => {
				return {loading: false};
			});
		}, 500);
	}

	render() {
		return (
			<>
				<h3>Login</h3>
				<p>Enter a Name and Game Code so join a session:</p>
				{this.state.errGameNotFound && (
					<Alert variant="danger">Game not found - double-check your Game Code</Alert>
				)}
				{this.state.errInvalidSubmitData && (
					<Alert variant="danger">You need both a Name and a Game Code to proceed</Alert>
				)}
				<Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
					<hr />
					<Form.Group controlId="formUserName">
						<Form.Label>Nickname / Team Name </Form.Label>
						<Row>
							<Col md={6}>
								<Form.Control
									type="text"
									name="name"
									placeholder="Flaming Weazles"
									disabled={this.state.loading}
									value={this.state.userName}
									onChange={this.setUserName}
									required
								/>
							</Col>
							<Col md={4}>
								<Button
									variant="outline-secondary"
									style={{width: '100%'}}
									disabled={this.state.loading}
									onClick={this.setUniqueName}
								>
									Random
								</Button>
							</Col>
						</Row>
					</Form.Group>
					<hr />
					<Form.Group controlId="formGameCode">
						<Form.Label>Game Code</Form.Label>
						<Row>
							<Col md={6}>
								<Form.Control
									type="text"
									name="gameCode"
									placeholder="X10F"
									disabled={this.state.loading}
									value={this.state.gameCode}
									onChange={this.setGameCode}
									required
								/>
							</Col>
							<Col md={2}>
								<Button
									variant="primary"
									style={{width: '100%'}}
									type="submit"
									disabled={this.state.loading}
								>
									Submit
								</Button>
							</Col>
							<Col md={2}>
								<Button
									variant="outline-secondary"
									style={{width: '100%'}}
									type="reset"
									disabled={this.state.loading}
								>
									Reset
								</Button>
							</Col>
						</Row>
					</Form.Group>
					<hr />
				</Form>
			</>
		);
	}
}

export default Login;
