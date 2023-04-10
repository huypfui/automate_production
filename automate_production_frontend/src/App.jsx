import { useState, useEffect } from "react"
import "./App.css"
import Sell from "./assets/components/Sell"
import Chocolate from "./assets/components/Chocolate"
import Container from "./assets/components/Container"

function App() {
	const [money, setMoney] = useState(0)
	const [chocolate, setChocolate] = useState(0)
	const [refresh, setRefresh] = useState(false)

	useEffect(() => {
		fetch("http://localhost:9999" + "/chocolatefarm/stats")
			.then((res) => res.json())
			.then((data) => {
				setMoney(data.money)
				setChocolate(data.chocolate)
			})
	}, [refresh])

	return (
		<>
			<section className="buttons">
				<div>
					<Chocolate setRefresh={setRefresh} />
				</div>
				<div>
					<Sell setRefresh={setRefresh} />
				</div>
				<div>
					<Container chocolate={chocolate} />
				</div>
				<h1>Sold Chocolate Value {money} Euro</h1>
			</section>
		</>
	)
}

export default App
