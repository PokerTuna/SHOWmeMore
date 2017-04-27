import React from 'react';

export default class Show extends React.Component {
	render(){
		return (<div className="showWrapper">

					<img className="posterPic"
						alt="Show poster: {this.props.name}"
			            src={this.props.imgSrc}
			            onClick={this.props.onClick}/>

					<div className="showInfo">
						<h1>Title:</h1><p>{this.props.name}</p>
						<h1>Avg. score:</h1><p>{this.props.score}</p>
						<br/>
						<h1>Overview:</h1>
						<p>{this.props.overview}</p>

					</div>
		</div>)
	}
}
