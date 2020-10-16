// React
import React from 'react';
import {Container} from 'react-bootstrap';

const Footer: React.FC = () => {
	return (
		<footer id="Footer" className="bg-dark text-light">
			<Container>
				<p className="copyright text-center">
					&copy; {new Date().getFullYear()}{' '}
					<a href="https://timbryan.dev">Tim&nbsp;Bryan</a>. All right Reversed.
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
