import React from 'react';

const LikedPicture = ({ picture }) => (
  <div className="liked-person">
    <div className="liked-person-image">
      <img
        src={`/images/pictures/${picture.image}`}
        alt={`You liked ${picture.name}`}
      />
    </div>
  </div>
);

export default LikedPicture;