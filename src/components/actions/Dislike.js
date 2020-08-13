import React from 'react';

const Dislike = ({ userId, modifySuperficialChoices }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_DISLIKED_PICTURES')}
  >
    <img src="images/misc/dislike.png" alt="Dislike Pictures" />
  </button>
);


export default Dislike;


