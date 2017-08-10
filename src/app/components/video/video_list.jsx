import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({...props}) => (
  <div>
    {props.videos.map(v => (
      <VideoListItem key={v.id} video={v} />
    ))}
  </div>
);

export default VideoList;
