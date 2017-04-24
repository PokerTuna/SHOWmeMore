import React from 'react';

export default class Show extends React.Component {
	render(){
		return <div >

			<img
                 src={this.props.imgSrc}
                 onClick={this.props.onClick}/>
			<div>{this.props.name} {this.props.score} {this.props.overview}
			</div>
		</div>
	}
}
