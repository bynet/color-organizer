import React from 'react';
import StarRating from './StarRating';

const Color = ({title , color , rating = 0 , onRemove = f=>f , onRate = f=>f } ) => {

  return (
    <section className="color card">
      <h4>{title}</h4>
      <div className="color" style={ {backgroundColor : color } }></div>
      <StarRating starsSelected={rating} totalStars={5} onRate={onRate} />
    </section>
  )
};

export default Color ;