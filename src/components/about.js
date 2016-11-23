var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center bottom">About</h1>
			<p>A simple weather App in React js with Open Weather Map API, used for fetching realtime weather</p>
			<p>Here are some tools I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react/">React </a>
					- JavaScript Library used.
	 </li>
				<li>
					<a href="http://openweathermap.org/">Open Weather Map </a>
					- Open Weather API used.
	 </li>
			</ul>
		</div>
	)
}


module.exports = About;