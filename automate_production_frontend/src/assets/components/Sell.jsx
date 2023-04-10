const Sell = ({ setRefresh }) => {
	const sell = () => {
		fetch("http://localhost:9999" + "/chocolatefarm/sell").then(() =>
			setRefresh((prev) => !prev)
		)
	}
	return (
		<>
			<button onClick={sell}>Sell</button>
		</>
	)
}

export default Sell
