// React
import React from 'react';

// Bootstrap
import {Container} from 'react-bootstrap';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/Nav';

// Components
import Logo from './Logo';

const Header: React.FC = function() {
	return (
		<header id="Header" className="bg-dark">
			<Container>
				<Navbar variant="dark">
					<Navbar.Brand href="/" title="Nobelium Quiz App">
						<Logo />
						<h1>Nobelium</h1>
					</Navbar.Brand>
					<Nav fill className="ml-auto">
						<Nav.Item>
							<Nav.Link
								className={window.location.pathname === '/host' ? 'active' : ''}
								href="/host"
								style={{display: 'inline-block'}}
							>
								Host
							</Nav.Link>

							<Nav.Link
								className={window.location.pathname === '/about' ? 'active' : ''}
								href="/about"
								style={{display: 'inline-block'}}
							>
								About
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar>
			</Container>
		</header>
	);
};

export default Header;
