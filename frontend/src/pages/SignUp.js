import React, { useState } from 'react'

const SignUp = () => {
	// const

	return (
		<div>
			<div className="container custom_className pt-5">
				<h2 className="signup_title text-center">SIGN UP</h2>
				<form className=" col-sm-6 offset-3 pt-5 signup_form">

					<div className="form-outline mb-4">
						<input type="text" id="form4Example1" className="form-control" />
						<label className="form-label" htmlFor="form4Example1">Name</label>
					</div>


					<div className="form-outline mb-4">
						<input type="email" id="form4Example2" className="form-control" />
						<label className="form-label" htmlFor="form4Example2">Email </label>
					</div>


					<div className="form-outline mb-4">
						<input type="password" id="form4Example3" className="form-control" />
						<label className="form-label" htmlFor="form4Example3">Password</label>
					</div>

					<button type="submit" className="btn btn-primary btn-block mb-4">Register</button>
				</form>
			</div>
		</div>
	)
}

export default SignUp;