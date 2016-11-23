var React = require('react');


var WeatherMessage = React.createClass({
	temp_loc: function () {
		var temperature = this.props.temperature;
		var location = this.props.location;
		if (temperature !== undefined && location !== '') {
			return <h3 className="text-center">Its {temperature}in {location}</h3>
		}
	},
	render: function () {
		var show = this.temp_loc;
		return (
			<div>
				{show()}
			</div>
		);
	}
})


module.exports = WeatherMessage;