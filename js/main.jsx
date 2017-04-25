import React from 'react';
import Show from './show.jsx';
const TMDBLogo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';

export default class ShowApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputField: 'legion',
            shows: [],
        }
    }

    handleInputChange = (event) => {
        this.setState({
            inputField: event.target.value
        });
    }
    componentDidMount(){
      this.upUrl();
    }

    handleBtnClick = (event) =>{
        event.preventDefault();
    	this.upUrl();
		this.setState({
			shows: [],
		})
    }

	upUrl = () => {
		let url = 'https://api.themoviedb.org/3/search/tv?api_key=df3c5710c44169cdf3776559c77f511a&query='+this.state.inputField.split(' ').join('+');
        this.fetchShow(url);
	}
    handleRecommendClick = (showId) =>{
        let dataId = showId;
        let url2 = 'https://api.themoviedb.org/3/tv/'+dataId+'?api_key=df3c5710c44169cdf3776559c77f511a&query&append_to_response=recommendations';
        this.fetchRecommendedShow(url2);
    }

    fetchShow(url){
        fetch(url).then((res) => res.json()).then((results) => {
        	let show = results.results[0];
        	let shows = this.state.shows;
        	shows.push(show);
        	this.setState({
        		shows: shows,
        	})
        })
    }

    fetchRecommendedShow(url2){
        fetch(url2).then((res) => res.json()).then((results2) => {

            let recommendations = results2.recommendations.results;

            function getRandomIndex(items) {
                return Math.floor(Math.random() * items.length-3);
            }

            let index = getRandomIndex(recommendations);
            let selectedRecommendations = recommendations.splice(index-1, 3);

            let shows = this.state.shows;
            this.setState({
            	shows: shows.concat(selectedRecommendations),
            });

        })
    }

    render() {
		function getRandomKey() {
			return Math.floor(Math.random() * 10000);
		}
        const tv = this.state.shows.map((show) =>{
            return <Show key={show.id+Math.floor(Math.random() * 1000)}
                       imgSrc={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                       overview={show.overview}
                       name={show.name}
                       score={show.vote_average}
                       onClick={this.handleRecommendClick.bind(this, show.id)}/>})
        return (<div>
            <div className="header">
                <div className="navigation">
                <a href="https://www.themoviedb.org/" title="ReactJS TMDb Movie Search"><img src={TMDBLogo} className="logo" alt="The Movie Database" /></a>
                <form>
                    <input className="searchBox" onChange={this.handleInputChange.bind(this)} type="text" placeholder="Search Tv Show..."/>
                    <i className="fa fa-search" aria-hidden="true" onClick={this.handleBtnClick.bind(this)}></i>
                </form>
                </div>
            </div>
            <div className="container">
                {/* <div className="row">
                    <div className="col-12">

                    </div>
                </div> */}
                <div className="row">
                    <div className="col-12">
                        {tv}
                    </div>
                </div>

                    <div className="row">
                        <div className="col-12 footer">
                            <a className="github" href="#" title="My GitHub Page">View Code </a>
                            <i className="fa fa-github" aria-hidden="true"></i>

                        </div>
                    </div>
            </div>
        </div>
        );





    }
}
