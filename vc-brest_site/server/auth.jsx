import React from 'react';


const Auth = () => {

	return (
		<>
			<form action="#" method="post" target="_blank">
				<h2>Регистрация</h2>
				<ul>
					<li>
						<label htmlFor="email">E-mail:</label>
						<input type="email" name="mail" placeholder="ivanov@gmail.com" id="email" required/>
					</li>
					<li>
						<label htmlFor="password">Password:</label>
						<input type="password" name="pass" required/>
					</li>
					<button type="submit">Submit</button>
				</ul>
			</form>
		</>
);
};

export default Auth;
