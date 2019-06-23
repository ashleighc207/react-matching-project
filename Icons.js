function reload() {
	window.location.reload();
}
class Icons extends React.Component {
	render() {
		const {i1, i2, i3} = this.props;
		return (
			<section>
				<section className="outer-box">
					<section className="inner-box">
						<i ref="icon1" className={"fas " + i1}></i>
						<i ref="icon2" className={"fas " + i2}></i>
						<i ref="icon3" className={"fas " + i3}></i>
					</section>
				</section>
				<button className="spin" type="button" onClick={reload}>Spin!</button>
				{(i1 == i2 && i2 == i3) ? <h1 className="heading-one winner"> Winner!! </h1> : <h1 className="heading-one loser"> Try again </h1> }
			</section>
		)
	}
}

