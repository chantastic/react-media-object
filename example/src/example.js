var React = require('react');
var ReactMediaObject = require('react-media-object');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactMediaObject />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
