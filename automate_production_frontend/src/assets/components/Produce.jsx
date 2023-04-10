const Produce = ({ count, setRefresh }) => {
	const add = () => {
		// fetching data from api --> in this case from local PORT 9999
		fetch("http://localhost:9999" + "/chocolatefarm/chocolate", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ count }),
		}).then(() => setRefresh((prev) => !prev))
	}
	return (
		<div>
			<p>
				{count} {count > 1 ? "Chocolates" : "Chocolate"}
			</p>
			<button onClick={add}>+</button>
		</div>
	)
}

export default Produce
