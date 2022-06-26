import "./Gallery.css"

import { gallery } from "../../constants/gallery.js";
import GalleryItem from "./GalleryItem/GalleryItem";
function Gallery() {
  return (
    <section className="gallery">
      {gallery.map(item=>(
        <GalleryItem key={item.id} item={item}/>
      ))}

    </section>
  );
}

export default Gallery;