import React from 'react';
import Show from './show.jsx';
import ScrollButton from './scroll.jsx';
const TMDBLogo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';

export default class ShowApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputField: '',
            shows: []
        }
    }

    handleInputChange = (event) => {
        this.setState({inputField: event.target.value});
    }
    handleKeyPress = (event) => {

        if (event.charCode == 13) {
            event.preventDefault();
            this.up_Url();
            this.setState({shows: []})
      }
      if (event.keyCode == 13) {
          event.preventDefault();
          this.up_Url();
          this.setState({shows: []})
      }

    }


    handleBtnClick = (event) => {
        event.preventDefault();
        this.up_Url();
        this.setState({shows: []})
    }
    handleSuggestionClick = (event) => {
        event.preventDefault();
        this.setState({shows: []})
        let url = 'https://api.themoviedb.org/3/search/tv?api_key=df3c5710c44169cdf3776559c77f511a&query=' + event.target.id.split(' ').join('+');
        this.fetchShow(url);
    }

    up_Url = () => {
        let url = 'https://api.themoviedb.org/3/search/tv?api_key=df3c5710c44169cdf3776559c77f511a&query=' + this.state.inputField.split(' ').join('+');
        this.fetchShow(url);
    }

    handleRecommendClick = (showId) => {
        let dataId = showId;
        let url2 = 'https://api.themoviedb.org/3/tv/' + dataId + '?api_key=df3c5710c44169cdf3776559c77f511a&query&append_to_response=recommendations';
        this.fetchRecommendedShow(url2);
    }

    fetchShow(url) {
        fetch(url).then((res) => res.json()).then((results) => {
            let show = results.results[0];
            let shows = this.state.shows;
            shows.push(show);
            this.setState({shows: shows})
        })
    }

    fetchRecommendedShow(url2) {
        fetch(url2).then((res) => res.json()).then((results2) => {

            let recommendations = results2.recommendations.results;

            function getRandomIndex(items) {
                return Math.floor(Math.random() * items.length - 3);
            }

            let index = getRandomIndex(recommendations);
            let selectedRecommendations = recommendations.splice(index - 1, 3);

            let shows = this.state.shows;
            this.setState({shows: shows.concat(selectedRecommendations)});

        })
    }

    render() {
        function getRandomKey() {
            return Math.floor(Math.random() * 10000);
        }
        const tv = this.state.shows.map((show) => {
            return <Show key={show.id + Math.floor(Math.random() * 1000)} imgSrc={`https://image.tmdb.org/t/p/w500${show.poster_path}`} overview={show.overview} name={show.name} score={show.vote_average} onClick={this.handleRecommendClick.bind(this, show.id)}/>
        })
        return (
            <div>
                <div className="header">
                    <div className="navigation">
                        <a href="https://www.themoviedb.org/" target="_blank" title="ReactJS TMDb Movie Search"><img src={TMDBLogo} className="logo" alt="The Movie Database"/></a>
                        <form onKeyPress={this.handleKeyPress}>
                            <input className="searchBox" onChange={this.handleInputChange.bind(this)} type="text" placeholder="Search Tv Show..."/>
                            <i className="fa fa-search" aria-hidden="true" onClick={this.handleBtnClick.bind(this)}></i>
                        </form>
                    </div>
                </div>
                <div className="container intro">
                    <div className="row">
                        <div className="col-12">
                            <div className="info">
                                <p>Welcome to
                                    <span> SHOW</span>me<span>More</span>.<br/><br/>
                                    <span> SHOW</span>me<span>More </span>
                                    will help you find the best TV shows there are based on your favorite series. Just click on one of our suggestions or use the browser. Then, just click on the poster and start discovering new shows!
                                </p><br/>
                                <p>Happy hunting :)</p>
                                <div className="suggestions">
                                    <a href="#" id="House of Cards" onClick={this.handleSuggestionClick.bind(this)}>House of Cards</a>
                                    <a href="#" id="Marvel's Jessica Jones" onClick={this.handleSuggestionClick.bind(this)}>Marvel's Jessica Jones</a>
                                    <a href="#" id="The Night Manager" onClick={this.handleSuggestionClick.bind(this)}>The Night Manager</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 app">
                            {tv}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 footer">
                            <a className="github" target="_blank" href="https://github.com/PokerTuna/Watcher" title="Watcher Code on GitHub">View Code
                        </a> &nbsp;
                            <i className="fa fa-github" aria-hidden="true"></i>

                        </div>
                    </div>
                </div>
                <ScrollButton scrollStepInPx="50" delayInMs="15"/>
            </div>
        );

    }
}
