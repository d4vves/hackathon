import React from 'react';
import Dislike from './actions/Dislike';
import Like from './actions/Like';


const Actions = ({ picture, modifySuperficialChoices }) => (
  <div id="actions">
    
    <Dislike
      userId={picture.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Like
      userId={picture.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    
  </div>
);

export default Actions;