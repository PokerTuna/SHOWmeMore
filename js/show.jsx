import React from 'react';

export default class Show extends React.Component {
    render() {
        return (
            <div className="showWrapper">

                <img className="posterPic" alt="Show poster: {this.props.name}" src={this.props.imgSrc} onClick={this.props.onClick}/>

                <div className="showInfo">
                    <div className="title">
                        <h1>{this.props.name}</h1>
                    </div>

                    <div className="score">
                        <h2>Avg. score:
                        </h2>
                        <p>{this.props.score}
                            / 10</p>
                    </div>

                    <br/>
                    <div className="overview">
                        <h2>Overview:</h2>
                        <p>{this.props.overview}</p>
                    </div>

                </div>
            </div>
        )
    }
}
