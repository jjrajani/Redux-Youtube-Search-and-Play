import React from 'react';

const VideoDetail = ({...props}) => (
  <div>
    <p>Video Detail</p>
    <p>{props.video.name}</p>
  </div>
);

export default VideoDetail;
