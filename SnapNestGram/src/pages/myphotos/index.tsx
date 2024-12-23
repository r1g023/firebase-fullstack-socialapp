import React from "react";

interface IMyPhotosProps {
  photos: { id: number; url: string; title: string }[];
}

const MyPhotos: React.FC<IMyPhotosProps> = ({ photos }) => {
  return (
    <div>
      <h1>My Photos</h1>
      <div className="photos-grid">
        {photos.map(photo => (
          <div key={photo.id} className="photo-item">
            <img src={photo.url} alt={photo.title} />
            <p>Title:{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPhotos;
