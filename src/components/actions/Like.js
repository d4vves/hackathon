import React from 'react';

const Like = ({ userId, modifySuperficialChoices }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_LIKED_PICTURES')}
  >
    <img src="images/misc/like.png" alt="Like Pictures" />
  </button>
);

export default Like;