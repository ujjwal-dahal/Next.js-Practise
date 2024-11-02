import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image7.jpg";
import image8 from "../../images/image8.jpg";
import image9 from "../../images/image9.jpg";
import image10 from "../../images/image10.jpg";
import image11 from "../../images/image11.jpg";
import image12 from "../../images/image12.jpg";
import image13 from "../../images/image13.jpg";
import image14 from "../../images/image14.jpg";
import image15 from "../../images/image15.jpg";

import Image from "next/image";
import "./gallery.scss";

import {Poppins} from "next/font/google"

const  poppins = Poppins({
  display:"swap",
  weight:"500",
  subsets : ["latin"]
})

export default function Gallery() {
  const images = [image1, image2, image3, image4, image5, image6,image7,image8,image9,image10,image11,image12,image13,image14,image15];

  return (
    <div className="gallery">
      <h1 className={poppins.className}>Image Gallery</h1>
      <div className="image-grid">
        {images.map((imageSrc, index) => (
          <Image
            key={index}
            src={imageSrc}
            alt={`Image ${index + 1}`}
            layout="responsive"
            className="image"
            placeholder="blur"
          />
        ))}
      </div>
    </div>
  );
}
