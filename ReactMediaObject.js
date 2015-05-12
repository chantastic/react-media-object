var React = require('react');

module.exports = React.createClass({
  propTypes: {
    imgAlt:    React.PropTypes.string.isRequired,
    imgLink:   React.PropTypes.string.isRequired,
    imgSource: React.PropTypes.string.isRequired,
    body:      React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div class="media attribution">

        <a href={this.props.imgLink} class="img">
          <img src={this.props.imgSource} alt={this.props.imgAlt} />
        </a>

        <div class="bd">
          {this.props.body}
        </div>

      </div>
    );
  }
});
