function reload() {
	window.location.reload();
}
class Icons extends React.Component {
	render() {
		const props = this.props;
		return (
			<section>
				<section className="outer-box">
					<section className="inner-box">
						<i ref="icon1" className={"fas " + props.i1}></i>
						<i ref="icon2" className={"fas " + props.i2}></i>
						<i ref="icon3" className={"fas " + props.i3}></i>
					</section>
				</section>
				<button className="spin" type="button" onClick={reload}>Spin!</button>
			</section>
		)
	}
}

