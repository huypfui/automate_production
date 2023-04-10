import Produce from "./Produce"

const Chocolate = ({ setRefresh }) => {
	return (
		<section>
			<div>
				<h3>Produce Chocolate</h3>
				<Produce count={1} setRefresh={setRefresh} />
				<Produce count={5} setRefresh={setRefresh} />
				<Produce count={10} setRefresh={setRefresh} />
			</div>
		</section>
	)
}

export default Chocolate
