import { useState } from 'react'
import './App.css'
import ImageCard from './Components/imageCard/imageCard'
import ImageData from "./data/images.json";
import BubbleMenu from './Components/BubbleMenu/BubbleMenu'

function App() {
  const [activeProfile, setActiveProfile] = useState('karen');
  const [profileImages, setProfileImages] = useState({
    karen: ImageData.slice(0, 3),    // Images 0, 1, 2
    lisa: ImageData.slice(1, 4),     // Images 1, 2, 3
    twin: ImageData.slice(2, 5),     // Images 2, 3, 4
    lala: ImageData.slice(3, 6)      // Images 3, 4, 5 (updated to use last 3)
  });
  
  // Profile data with their own image sets
  const profiles = {
    karen: {
      name: "Karen",
      hobby: "Photography",
      emoji: "📸",
      bio: "I like dogs and taking photos",
      images: profileImages.karen
    },
    lisa: {
      name: "Lisa",
      hobby: "Reading",
      emoji: "📚",
      bio: "Book lover and coffee enthusiast",
      images: profileImages.lisa
    },
    twin: {
      name: "Twin",
      hobby: "Gaming",
      emoji: "🎮",
      bio: "Pro gamer and streamer",
      images: profileImages.twin
    },
    lala: {
      name: "Lala",
      hobby: "Eating",
      emoji: "🪣",
      bio: "Food critic and chef",
      images: profileImages.lala
    }
  };

  const currentProfile = profiles[activeProfile];

  const moveImageToFront = (index) => {
    const newImages = [...currentProfile.images];
    const [selected] = newImages.splice(index, 1);
    newImages.unshift(selected);
    
    // Update the images for current profile
    setProfileImages({
      ...profileImages,
      [activeProfile]: newImages
    });
  };

  const shuffleImages = () => {
    const shuffled = [...currentProfile.images].sort(() => Math.random() - 0.5);
    setProfileImages({
      ...profileImages,
      [activeProfile]: shuffled
    });
  };

  return (
    <>
      <div className="app-container">
        {/* Profile Card */}
        <div className="profile-showcase">
          <div className="profile-card-large">
            <div className="profile-header">
              <div className="profile-emoji">{currentProfile.emoji}</div>
              <h2 className="profile-name">{currentProfile.name}</h2>
              <p className="profile-hobby">{currentProfile.hobby}</p>
              <p className="profile-bio">{currentProfile.bio}</p>
            </div>

            {/* Image Gallery inside Profile Card */}
            <div className="profile-gallery">
              <h3>Photo Gallery</h3>
              <div className="gallery">
                {currentProfile.images.map((img, i) => (
                  <ImageCard
                    key={img.id}
                    image={img}
                    onMoveToFront={() => moveImageToFront(i)}
                  />
                ))}
              </div>
              <button 
                className="shuffle-btn"
                onClick={shuffleImages}
              >
                Shuffle {currentProfile.name}'s Images
              </button>
            </div>
          </div>
        </div>

        {/* Bubble Menu */}
        <BubbleMenu 
          activeProfile={activeProfile} 
          setActiveProfile={setActiveProfile}
          profiles={profiles}
        />
      </div>
    </>
  )
}

export default App