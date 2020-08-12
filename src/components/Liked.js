import React from 'react';

const Liked = ({ picture }) => (
  <div className="liked-picture">
    <div className="liked-picture-image">
      <img
        src={`/images/pictures/${picture.image}`}
        alt={`You liked ${picture.name}`}
      />
    </div>
  </div>
);

export default Liked;
