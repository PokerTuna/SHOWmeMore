import React from 'react';

export default class Info extends React.Component {
  render () {
      return <div className="info">
          <p>Welcome to
              <span>
                  SHOW</span>me<span>More</span>.<br/><br/>
              <span>
                  SHOW</span>me<span>More
              </span>
              will help you find the best TV shows there are based on your favorite series. Just click on one of our suggestions or use the browser. Then, just click on the poster and start discovering new shows! 
          </p><br/>
          <p>Happy hunting :)</p>
          <div className="suggestions">
              <a href="#" id="House of Cards" onClick={this.props.onClick}>House of Cards</a>
              <a href="#" id="Marvel's Jessica Jones" onClick={this.props.onClick}>Marvel's Jessica Jones</a>
              <a href="#" id="The Night Manager" onClick={this.props.onClick}>The Night Manager</a>
          </div>
      </div>
   }
}
