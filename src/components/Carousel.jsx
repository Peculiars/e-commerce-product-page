import React, { useState } from 'react';
import image1 from '../assets/images/image-product-1.jpg';
import image2 from '../assets/images/image-product-2.jpg';
import image3 from '../assets/images/image-product-3.jpg';
import image4 from '../assets/images/image-product-4.jpg';
import imaget1 from '../assets/images/image-product-1.jpg';
import imaget2 from '../assets/images/image-product-2.jpg';
import imaget3 from '../assets/images/image-product-3.jpg';
import imaget4 from '../assets/images/image-product-4.jpg';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const Carousel = () => {
    const images=[
        {original: image1, thumbnail: imaget1},
        {original: image2, thumbnail: imaget2},
        {original: image3, thumbnail: imaget3},
        {original: image4, thumbnail: imaget4},
    ];
  return (
    <div>
        <ImageGallery 
        items={images} 
        showPlayButton={false}
        showNav={true}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showLightboxThumbnails={true}
        thumbnailSize={20}
        renderItem={_renderItem}
        renderThumbInner={_renderThumbInner}
        />
    </div>
  )
}

const _renderItem = (item) => {
  return (
    <div className={`image-gallery-image ${item.originalClass || ''}`}>
      <img
        src={item.original}
        alt={item.originalAlt}
        srcSet={item.srcSet}
        sizes={item.sizes}
      />
    </div>
  );
};

// Render thumb inner function
const _renderThumbInner = (item) => {
  return (
    <div className={`image-gallery-thumbnail-inner ${item.thumbnailClass || ''}`}>
      <div className='img-container'>
      <img
        src={item.thumbnail}
        alt={item.thumbnailAlt}
        style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '11px' }}
      />
      <div className='overlay'></div>
      </div>
    </div>
  );
};

