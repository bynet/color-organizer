import React from 'react';
import StarRating from './StarRating';

const Color = ({title , color , rating = 0 , onRemove = f=>f , onRate = f=>f } ) => {

  return (
    <section className="color card">
      <div className="row">
        <h4>{title}</h4>
        <button className="close">close</button>
      </div>
      <div className="color" style={ {backgroundColor : color } }></div>
      <StarRating starsSelected={rating} totalStars={5} onRate={onRate} />
    </section>
  )
};

export default Color ;
