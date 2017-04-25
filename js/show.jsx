import React from 'react';

export default class Show extends React.Component {
	render(){
		return <div >
					<div className="showPoster">
						<img className="posterPic"
			                 src={this.props.imgSrc}
			                 onClick={this.props.onClick}/>
					</div>
					<div className="showInfo">
						<h1>Title:</h1><p>{this.props.name}</p>
						<h1>Avg. score:</h1><p>{this.props.score}</p>
						<br/><br/>
						<p>{this.props.overview}</p>

					</div>
		</div>
	}
}
