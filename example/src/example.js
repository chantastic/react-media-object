var React = require('react');
var ReactDOM = require('react-dom');
var { Media, Img, ImgExt, Bd } = require('react-media-object');

var App = React.createClass({
  render () {
    return (
      <div>
        <section className="section">
          <h2 className="demo-heading"> With optional regions </h2>
          <div className="demo-block">
            <Media>
              <Img href="http://twitter.com/chantastic">
                <ImgExt
                src="http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e"
                alt="chantastic" />
              </Img>

              <Bd>
                I've spent most of my career focused on taming styles in CSS. I
                saw it as a problem that would never be solved. Then, #reactjs
                happened.
                <div>
                  <a href="http://twitter.com/chantastic">@chantastic</a>
                  <span className="detail"> 7 hours ago</span>
                </div>
              </Bd>
            </Media>
          </div>
        </section>

        <section className="section">
          <h2 className="demo-heading"> Without optional <code>imgExt</code> </h2>
          <div className="demo-block">
            <Media>
              <Img href="http://twitter.com/chantastic">
                chantastic
              </Img>
              <Bd>
                I've spent most of my career focused on taming styles in CSS. I
                saw it as a problem that would never be solved. Then, #reactjs
                happened.
                <div>
                  <a href="http://twitter.com/chantastic">@chantastic</a>&nbsp;
                  <span className="detail"> 7 hours ago</span>
                </div>
              </Bd>
            </Media>
          </div>
        </section>

        <section className="section">
          <h2 className="demo-heading"> Without optional <code>img</code> </h2>
          <div className="demo-block">
            <Media>
              <Bd>
                <div>
                  I've spent most of my career focused on taming styles in CSS. I
                  saw it as a problem that would never be solved. Then, #reactjs
                  happened.
                  <a href="http://twitter.com/chantastic">@chantastic</a>
                  <span className="detail"> 7 hours ago</span>
                </div>
              </Bd>
            </Media>
          </div>
        </section>

        <section className="section">
          <h2 className="demo-heading"> Overriding inline-styles </h2>
          <div className="demo-block">
            <Media style={{ color: 'red', fontWeight: 'bold' }}>
              <Img href="http://twitter.com/chantastic" style={{ border: '1px solid navy', borderRadius: '50%', overflow: 'hidden' }}>
                <ImgExt
                 src="http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e"
                 alt="chantastic"
                 style={{transform: 'rotateX(180deg)', borderRadius: '50%'}}
                />
              </Img>

              <Bd>
                I've spent most of my career focused on taming styles in CSS. I
                saw it as a problem that would never be solved. Then, #reactjs
                happened.
                <div>
                  <a href="http://twitter.com/chantastic">@chantastic</a>
                  <span className="detail"> 7 hours ago</span>
                </div>
              </Bd>
            </Media>
          </div>
        </section>

        <section className="section">
          <h2 className="demo-heading"> With additional className </h2>
          <div className="demo-block">
            <Media className="MyMedia">
              <Img className="MyImg" href="http://twitter.com/chantastic">
                <ImgExt
                  className="MyImgExt"
                  src="http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e"
                  alt="chantastic" />
              </Img>
              <Bd className="MyBd">
                <div>
                  I've spent most of my career focused on taming styles in CSS. I
                  saw it as a problem that would never be solved. Then, #reactjs
                  happened.
                  <a href="http://twitter.com/chantastic">@chantastic</a>
                  <span className="detail"> 7 hours ago</span>
                </div>
              </Bd>
            </Media>
          </div>
        </section>

        <section className="section">
          <h2 className="demo-heading"> noDefaultStyle prop </h2>
          <div className="demo-block">
            <Media noDefaultStyle>
              <Img noDefaultStyle href="http://twitter.com/chantastic">
                <ImgExt
                  noDefaultStyle
                  src="http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e"
                  alt="chantastic" />
              </Img>
              <Bd noDefaultStyle>
                I've spent most of my career focused on taming styles in CSS. I
                saw it as a problem that would never be solved. Then, #reactjs
                happened.
                <a href="http://twitter.com/chantastic">@chantastic</a>
                <span> 7 hours ago</span>
              </Bd>
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

ReactDOM.render(<App />, document.getElementById('app'));
