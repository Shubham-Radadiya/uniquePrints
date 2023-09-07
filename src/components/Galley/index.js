import React from "react";
import "./index.css";

export default function Gallery() {
    return (
        <>
        <h2 className="gallery_small_heading" >designed to perfection</h2>
        <h1 className="gallery_heading" >Our Gallery</h1>
            <div className="gallery_flex">

              
                    <div className="gallery_sub_flex">
                        <img className="img_1" src="/image/stephanie-harvey-OTUahHcqs0Y-unsplash.png"alt="" />
                        <img className="img_2" src="/image/matthew-brodeur-ZnwP4M-m1e0-unsplash.png" alt="" />
                         <img className="img_3" src="/image/brooke-lark-nTZOILVZuOg-unsplash.png" alt="" />
                    </div>
               

                <img className="img_4" src="/image/quino-al-mBQIfKlvowM-unsplash (1).png" alt="" />
            </div>
        </>
    );
}
