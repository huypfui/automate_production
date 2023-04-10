const Container = ({ chocolate }) => {
	return (
		<>
			<div className="counterBar">
				<div
					className="chocolate"
					style={{ width: chocolate / (10 / 100) + "%" }}></div>
			</div>
		</>
	)
}

export default Container
