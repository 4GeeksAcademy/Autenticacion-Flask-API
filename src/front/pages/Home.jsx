import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"
export const Home = () => {

	const {store, dispatch} = useGlobalReducer();

	const Login = async () => {
		const response = await fetch("https://obscure-tribble-5g45vpxw477r2vpg6-3001.app.github.dev/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				//"Authorization": "Bearer " + store.token
			},
			body: JSON.stringify({
				    "email": "alex@alex.com",
					"password": "1234"
			})
		})
		const data = await response.json()
		console.log(data.token)
		//Guardar el token en store
		dispatch({
			type: "save_token",
			token: data.token
		})
		return
	}

	return (
		<div>
			
			<button onClick={Login}>Login</button>
		</div>
	)

}