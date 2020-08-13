import React from 'react';
import LikedPicture from '../LikedPicture';

const Final = ({ activeUserImage, likedPictures }) => (
  <div id="lonely">
    <p>There's no more pictures to see. </p>

    <span className="pulse">
      <img src={`/images/pictures/${activeUserImage}`} alt="You..." />
    </span>

    <div id="liked-picture">
      <p>
        {likedPictures.length > 0
          ? "Pictures you liked !"
          : ''}
      </p>

      {likedPictures.map(item => (
        <LikedPicture key={item.id} picture={item} />
      ))}


    </div>
  </div>
);

export default Final;
