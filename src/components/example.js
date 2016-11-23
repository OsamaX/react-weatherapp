var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
	return (
		<div>
			<h1 className="bottom">Examples</h1>
			<p>Here are some example locations to check out</p>
			<ol>
				<li>
					<Link to='/?location=Karachi'>Karachi</Link>
				</li>
				<li>
					<Link to='/?location=Islamabad'>Islamabad</Link>
				</li>
			</ol>
		</div>
	)
};

module.exports = Example;