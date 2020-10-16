import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import LoadingAnimation from '../components/LoadingAnimation';

const Profile = () => {
	const {user, isAuthenticated, isLoading} = useAuth0();

	if (isLoading) {
		return <LoadingAnimation />;
	}

	return isAuthenticated ? (
		<div>
			<h2>Welcome, {user.given_name}!</h2>
			<h3>{user.name}</h3>
			<img src={user.picture} alt={user.name} />
			<p>{user.email}</p>
			<h3>User Metadata</h3>

			<pre>{JSON.stringify(user, null, 4)}</pre>
		</div>
	) : (
		<></>
	);
};

export default Profile;
