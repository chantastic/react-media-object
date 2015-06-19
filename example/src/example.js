var React = require('react');
var { Media, MediaImg, MediaImgExt, MediaBd } = require('react-media-object');

var App = React.createClass({
  render () {
    return (
      <div>
        <section className="section">
          <h2 className="demo-heading"> With optional regions </h2>
          <div className="demo-block">
            <Media>
              <MediaImg href="http://twitter.com/chantastic">
                <MediaImgExt
                src="http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e"
                alt="chantastic" />
              </MediaImg>

              <MediaBd>
                I've spent most of my career focused on taming styles in CSS. I
                saw it as a problem that would never be solved. Then, #reactjs
                happened.
                <div>
                  <a href="http://twitter.com/chantastic">@chantastic</a>
                  <span className="detail"> 7 hours ago</span>
                </div>
              </MediaBd>
            </Media>
          </div>
        </section>

        <section className="section">
          <h2 className="demo-heading"> Without optional <code>imgExt</code> </h2>
          <div className="demo-block">
            <Media>
              <MediaImg href="http://twitter.com/chantastic">
                chantastic
              </MediaImg>
              <MediaBd>
                I've spent most of my career focused on taming styles in CSS. I
                saw it as a problem that would never be solved. Then, #reactjs
                happened.
                <div>
                  <a href="http://twitter.com/chantastic">@chantastic</a>&nbsp;
                  <span className="detail"> 7 hours ago</span>
                </div>
              </MediaBd>
            </Media>
          </div>
        </section>

        <section className="section">
          <h2 className="demo-heading"> Without optional <code>img</code> </h2>
          <div className="demo-block">
            <Media>
              <MediaBd>
                <div>
                  I've spent most of my career focused on taming styles in CSS. I
                  saw it as a problem that would never be solved. Then, #reactjs
                  happened.
                  <a href="http://twitter.com/chantastic">@chantastic</a>
                  <span className="detail"> 7 hours ago</span>
                </div>
              </MediaBd>
            </Media>
          </div>
        </section>

        <h2 className="demo-heading"> TODO </h2>
        <ul>
          <li>Why doesn't instanceOf work as expected?</li>
          <li>Expose styling props.</li>
          <li>Play with merging styles vs overriding.</li>
          <li>Add tests.</li>
        </ul>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
