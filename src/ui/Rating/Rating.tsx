import React from "react";
import ReactStars from "react-rating-stars-component";
import { bool, boolean } from "yup";

interface RatingProps {
  ratingValue?: number;
  edit?: boolean;
}
export default function Rating({ ratingValue = 0, edit = true }: RatingProps) {
  return (
    <>
      <ReactStars
        count={5}
        // onChange={ratingChanged}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#1551e5"
        color="#cbcbcb"
        edit={edit}
        value={ratingValue}
      />
    </>
  );
}
