let root = document.getElementById('root')

class App extends React.Component {
	render() {
		return (
			<main className="main-content">
				<h1 className="heading-one"> Are you lucky? </h1>
				<section className="outer-box">
					<section className="inner-box">
						<i className="fas fa-hamburger"></i>
						<i className="fas fa-hamburger"></i>
						<i className="fas fa-hamburger"></i>
					</section>
				</section>
				<button className="spin" type="button">Spin!</button>
			</main>
		)
	}
}

ReactDOM.render(<App />, root)