let root = document.getElementById('root')
let icons = ["fa-hamburger", "fa-pizza-slice", "fa-egg", "fa-cheese", "fa-bread-slice", "fa-bacon", "fa-hotdog", "fa-drumstick-bite", "fa-ice-cream"];

let icon1 = icons[Math.floor(Math.random()*icons.length)];
let icon2 = icons[Math.floor(Math.random()*icons.length)];
let icon3 = icons[Math.floor(Math.random()*icons.length)];


class App extends React.Component {
	render() {
		return (
			<main className="main-content">
				<h1 className="heading-one"> Are you feeling lucky?</h1>
				<Icons i1={icon1} i2={icon2} i3={icon3}/>
				{(icon1 == icon2 && icon2 == icon3) ? <h1 className="heading-one winner"> Winner!! </h1> : <h1 className="heading-one loser"> Try again </h1> }
			</main>
		)
	}
}

ReactDOM.render(<App />, root)