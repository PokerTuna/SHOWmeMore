import React from 'react';
import ReactDOM from 'react-dom';


class TvApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputField: '',
            recommendations: [],
            removedItem: [],

            recommendationOneId: 0,
            recommendationTwoId: 0,
            recommendationThreeId: 0,

            recommendationOneName: '',
            recommendationTwoName: '',
            recommendationThreeName: '',

            recommendationOnePosterPath: '',
            recommendationTwoPosterPath: '',
            recommendationThreePosterPath: '',

            recommendationOneScore: 0,
            recommendationTwoScore: 0,
            recommendationThreeScore: 0,
        }
    }

    handleInputChange = (event) => {
        this.setState({
            inputField: event.target.value
        });
    }

    handleBtnClick = (event) => {
        event.preventDefault();
        let url = 'https://api.themoviedb.org/3/search/tv?api_key=df3c5710c44169cdf3776559c77f511a&query='+this.state.inputField.split(' ').join('+');
        this.fetchShow(url);
    }

    handleRecommendBtnClick = (event) => {
        event.preventDefault();
        let dataId = this.state.showId;
        let url2 = 'https://api.themoviedb.org/3/tv/'+dataId+'?api_key=df3c5710c44169cdf3776559c77f511a&query&append_to_response=recommendations';
        this.fetchRecommendedShow(url2);

    }

    fetchShow(url){
        fetch(url).then((res) => res.json()).then((results) => {
            this.setState({
                showId: results.results[0].id,
                name: results.results[0].name,
                poster: results.results[0].poster_path,
                rating: results.results[0].vote_average,
                posterPic: 'https://image.tmdb.org/t/p/w500'+results.results[0].poster_path,
                recommendations: [],
                recommendationOnePosterPic: '',
                recommendationTwoPosterPic: '',
                recommendationThreePosterPic: '',
            })
        })
    }

    fetchRecommendedShow(url2){
        fetch(url2).then((res) => res.json()).then((results2) => {
            // console.log(results2.recommendations.results);
            // console.log(this.state.recommendations);

            if(this.state.recommendations.length < 1){

                var myShows = results2.recommendations.results;
            }else{

                var myShows = this.state.recommendations;
            }

            function getRandomIndex(items) {
                return Math.floor(Math.random() * items.length);
            }

            let removedItem = [];
            for (var i = 0; i < 3; i++) {
                removedItem.push(myShows.splice(getRandomIndex(myShows), 1));
            }
            console.log(this.state.removedItem); // pushuje sobie 3 itemy rekomendowane, na ich podstawie chce zrobic kolejne.
            this.setState({
                recommendations: myShows,

                removedItem: removedItem,

                recommendationOneId: removedItem[0][0].id,
                recommendationTwoId: removedItem[1][0].id,
                recommendationThreeId: removedItem[2][0].id,

                recommendationOneName: removedItem[0][0].name,
                recommendationTwoName: removedItem[1][0].name,
                recommendationThreeName: removedItem[2][0].name,

                recommendationOnePosterPath: removedItem[0][0].poster_path,
                recommendationTwoPosterPath: removedItem[1][0].poster_path,
                recommendationThreePosterPath: removedItem[2][0].poster_path,

                recommendationOneScore: removedItem[0][0].vote_average,
                recommendationTwoScore: removedItem[1][0].vote_average,
                recommendationThreeScore: removedItem[2][0].vote_average,

                recommendationOnePosterPic: 'https://image.tmdb.org/t/p/w500'+removedItem[0][0].poster_path,
                recommendationTwoPosterPic: 'https://image.tmdb.org/t/p/w500'+removedItem[1][0].poster_path,
                recommendationThreePosterPic: 'https://image.tmdb.org/t/p/w500'+removedItem[2][0].poster_path,
            })
        })
    }

    render() {

        return <div>
            <form>
                <input onChange={this.handleInputChange} type="text" placeholder="Search Tv Show Title..."/>
                <button onClick={this.handleBtnClick}>Search</button>
              </form>
              <div>
                  <img style={{
                      maxWidth: '500px'
                  }} className='poster' src={this.state.posterPic} onClick={this.handleRecommendBtnClick}/>
              </div>
              <div>
                  <img style={{
                      maxWidth: '500px'
                  }} className='poster' src={this.state.recommendationOnePosterPic}/>
                  <img style={{
                      maxWidth: '500px'
                  }} className='poster' src={this.state.recommendationTwoPosterPic}/>
                  <img style={{
                      maxWidth: '500px'
                  }} className='poster' src={this.state.recommendationThreePosterPic}/>
              </div>
        </div>
    }

}

class App extends React.Component {
    render(){
        return <div>
            <TvApp />
        </div>
    }
}
ReactDOM.render(
    <App/>, document.getElementById('app'));
