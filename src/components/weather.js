var React = require('react');
var WeatherForm = require('./weatherform');
var WeatherMessage = require('./weathermessage');
var openWeatherMap = require('./../api/openWeatherMap');
var ErrorModal = require('./ErrorModal');
var Weather = React.createClass({
	getInitialState: function () {
		return {
			location: '',
			temp: undefined,
			errorMessage: undefined
		}
	},
	handleSearch: function (location) {
		var that = this;

		this.setState({
			errorMessage: undefined
		})

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp + '°C ',
			})
		}, function (e) {
			that.setState({
				errorMessage: e.message
			})
		});
	},
	componentDidMount: function () {
		var location = this.props.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location)
			window.location.hash = '#/';
		}
	},
	render: function () {
		var {errorMessage} = this.state;
		function renderError() {
			if (typeof errorMessage === 'string') {
				return <ErrorModal message={errorMessage} />
			}
		}

		return (
			<div>
				<h1 className="text-center title">Get Weather</h1>
				<div className="main">
					<img src="src/img/weather.png" id="logo" />
					<WeatherForm onSearch={this.handleSearch} />
					<WeatherMessage temperature={this.state.temp} location={this.state.location} />
				</div>
				{renderError()}
			</div>
		);
	}
})



module.exports = Weather;