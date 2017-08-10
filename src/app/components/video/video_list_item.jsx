import React from 'react';

const VideoListItem = ({...props}) => (
  <div>
    <p>video List Item</p>
    <p>{props.video.name}</p>
  </div>
);

export default VideoListItem;
