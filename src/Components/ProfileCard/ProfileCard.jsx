import React from 'react';
import ImageCard from '../imageCard/imageCard';
import './ProfileCard.css';

function ProfileCard({ profile, onMoveToFront, onShuffle }) {
  return (
    <div className="profile-card-large">
      <div className="profile-header">
        <div className="profile-emoji">{profile.emoji}</div>
        <h2 className="profile-name">{profile.name}</h2>
        <p className="profile-hobby">{profile.hobby}</p>
      </div>

      {/* Image Gallery inside Profile Card */}
      <div className="profile-gallery">
        <h3>Photo Gallery</h3>
        <div className="gallery">
          {profile.images.map((img, i) => (
            <ImageCard
              key={img.id}
              image={img}
              onMoveToFront={() => onMoveToFront(i)}
            />
          ))}
        </div>
        <button className="shuffle-btn" onClick={onShuffle}>
          Shuffle {profile.name}'s Images
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;