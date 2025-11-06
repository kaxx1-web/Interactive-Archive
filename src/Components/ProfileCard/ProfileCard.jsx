import React from 'react';
import ImageCard from '../imageCard/imageCard';
import './ProfileCard.css';

function ProfileCard({ profile, onMoveToFront, onShuffle }) {
  return (
    <div className="profile-card-large">
      <div className="profile-header">
        <h2 className="profile-name">{profile.name}</h2>
      </div>

      <div className="profile-gallery">
        <h3>Photo Gallery</h3>

        <button className="shuffle-btn" onClick={onShuffle}>
          Shuffle {profile.name}'s Images
        </button>
        
        <div className="gallery">
          {profile.images.map((img, i) => (
            <ImageCard
              key={img.id}
              image={img}
              onMoveToFront={() => onMoveToFront(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;