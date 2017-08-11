import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import {
  SearchBar,
  VideoDetail,
  VideoList,
} from './components';

const API_KEY = 'AIzaSyC65e0itDIWnvwFnuCRaB70KEEFSAuxjX0';

class App extends Component {
    constructor(props) {
      super(props);
      this._searchYoutube();

      this.state = {
        videos: [],
        selectedVideo: null,
      };
    }

    render() {
      return (
        <div>
          <SearchBar />
          <div>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos}
            />
          </div>
        </div>
      );
    }

    _searchYoutube = () => {
        YTSearch({
        key: API_KEY,
        term: 'surfboard',
      }, (videos) => {
        this.setState({
          selectedVideo: videos[0],
          videos,
        });
      });
    }
}

export default App;
