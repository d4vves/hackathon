import React from 'react';
import Actions from './Actions';

const Picture = ({ picture, modifySuperficialChoices }) => {
  const { name, desc, image } = picture;

  return (
    <>
      <div className="picture">
        <div className="picture-photo">
          <img src={`/images/users/${image}`} alt={name} />
        </div>

        <div className="picture-description">
          <p className="picture-name-age">
            {name}, 
          </p>
          <p className="picture-info">{desc}</p>
        </div>
      </div>

      <Actions
        picture={picture}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </>
  );
};

export default Picture;
