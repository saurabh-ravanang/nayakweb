import React, { useState } from 'react';
import './video.css';

const YouTubeFacade = ({ videoId }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    setIsLoaded(true);
  };

  return (
    <div className="youtubeDiv">
      {isLoaded ? (
        <iframe
          className="rectangleImg"
          width="100"
          height="100"
          loading="lazy"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <div
          className="youtube-facade"
          onClick={handleClick}
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <div className="play-button"></div>
        </div>
      )}
    </div>
  );
};

export default function Video() {
  const videos = [
    'AtgFnLCMXaM',
    'wZoTjzHZ0RE',
    'r9MgD3XpoDU',
  ];

  return (
    <>
      <div className='higherTopper'>
        <div className='newsmallHeading'><h1>OUR VIDEOS</h1></div>
        <div className='mainTopperDiv'>
          <div className='BigHeading'><h1>OUR TOPPERS</h1></div>
          <div className='smallHeading'><h1>OUR VIDEOS</h1></div>
        </div>
      </div>
      <h4 className='videolatestheading'>Our learning and growth have been encapsulated in this repertoire of videos</h4>
      <div className='mainVideoDiv'>
        {videos.map((id, idx) => (
          <YouTubeFacade key={idx} videoId={id} />
        ))}
      </div>
    </>
  );
}
