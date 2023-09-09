import React from "react";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div>
      <div className="Testimonial_bg">
        <h1 className="Testimonial_heading">Testimonial</h1>
        <h3 className="Testimonial_sub_heading">Home Testimonial Company</h3>
      </div>

      <div className="review_bg">
        <div className="review_flex">
          <div>
            <h3>Sarah J.salmi</h3>
            <div className="star_flex">
              <img src="/image/star y.png" alt="" />
              <img src="/image/star y.png" alt="" />
              <img src="/image/star y.png" alt="" />
              <img src="/image/star y.png" alt="" />
              <img src="/image/star y.png" alt="" />
            </div>
          </div>

          <img src="/image/quot.png" alt="" style={{ width: '40px', height: '40px' }} />
        </div>

        <div>
          <p className="review">Excellent service and very fast. I needed US passport / visa pictures and it was done right away. They also kindly checked the pictures would be conformed to the the form requirements. I was even able to ask them to touch up the picture a bit.</p>
          <p className="review">I will definitely keep using them, much better service than Snappy Snap and very professional and efficient.</p>
        </div>


        <div className="review_flex">
          <div>
            <h3>Sarah J.salmi</h3>
            <div className="star_flex">
              <img src="/image/star y.png" alt="" />
              <img src="/image/star y.png" alt="" />
              <img src="/image/star y.png" alt="" />
              <img src="/image/star y.png" alt="" />
              <img src="/image/star y.png" alt="" />
            </div>
          </div>

          <img src="/image/quot.png" alt="" style={{ width: '40px', height: '40px' }} />
        </div>

        <div>
          <p className="review">Excellent service and very fast. I needed US passport / visa pictures and it was done right away. They also kindly checked the pictures would be conformed to the the form requirements. I was even able to ask them to touch up the picture a bit.</p>
          <p className="review">I will definitely keep using them, much better service than Snappy Snap and very professional and efficient.</p>
        </div>


      </div>
    </div>
  );
};
export default Testimonial;
