import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import {
  SearchBar,
  VideoDetail,
  VideoList,
} from './components';

import { videos } from './db';

const API_KEY = 'AIzaSyC65e0itDIWnvwFnuCRaB70KEEFSAuxjX0';

YTSearch({
  key: API_KEY,
  term: 'surfboards',
}, (data) => {
  console.log('data', data);
});

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    render() {
      return (
        <div>
          <SearchBar />
          <div>
            <VideoDetail video={videos[0]}/>
            <VideoList videos={videos}/>
          </div>
        </div>
      );
    }
}

export default App;
