import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const images = [
  'Gallery/sweet.jpeg',
  'Gallery/construction.jpg',
  'Gallery/pool.jpg',
  'Gallery/laundery.jpg',
  'Gallery/water-tank.jpg',
  'Gallery/swimming-pool.jpg',
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      controls.start({ opacity: 0, x: '-50%' });
      controls.start({ opacity: 1, x: '0%', transition: { duration: 1 } });
    }, 1000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="gallery-container" style={{ height: '500px', overflow: 'hidden' }}>
      <strong><h1>Gallery</h1></strong>
      <motion.div
        animate={controls}
        style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div className="image" style={{ height: '100%', width: 'auto', margin: 0, padding: 0 }}>
          {/* eslint-disable-next-line */}
          <img src={images[index]} alt={`Image ${index + 1}`} style={{ height: '100%', width: 'auto' }} />
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
