import React, { ChangeEvent, useEffect, useState } from 'react';

const Register = () => {
	const [userData, setUserData] = useState({
		name: 'Devid',
		email: 'dev12@gmail.com',
		address: '78, desefef, fjfjh',
	});

	useEffect(() => {
		console.log('Auto Saved!');
	}, [userData]);
	return (
		<div className='form'>
			<input
				type='text'
				placeholder='User Name'
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUserData({ ...userData, name: e.target.value })
				}
			/>
			<br />
			<br />
			<input
				type='email'
				placeholder='Email Address'
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUserData({ ...userData, email: e.target.value })
				}
			/>
			<br />
			<br />
			<input
				type='text'
				placeholder='Address'
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setUserData({ ...userData, address: e.target.value })
				}
			/>
		</div>
	);
};

export default Register;
