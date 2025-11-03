import { useState } from 'react'
import './App.css'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import ImageData from "./data/images.json";
import BubbleMenu from './Components/BubbleMenu/BubbleMenu'

function App() {
  const [activeProfile, setActiveProfile] = useState('karen');
  const [profileImages, setProfileImages] = useState({
    karen: ImageData.slice(0, 3),
    lisa: ImageData.slice(1, 4),
    twin: ImageData.slice(2, 5),
    lala: ImageData.slice(3, 6)
  });
  
  // Profile metadata
  const profilesData = {
    karen: {
      name: "Karen",
      hobby: "Photography",
      emoji: "📸",
    },
    lisa: {
      name: "Lisa",
      hobby: "Reading",
      emoji: "📚",

    },
    twin: {
      name: "Twin",
      hobby: "Gaming",
      emoji: "🎮",

    },
    lala: {
      name: "Lala",
      hobby: "Eating",
      emoji: "🪣",
    }
  };

  // Combine profile data with their images
  const currentProfile = {
    ...profilesData[activeProfile],
    images: profileImages[activeProfile]
  };

  const moveImageToFront = (index) => {
    const currentImages = profileImages[activeProfile];
    const newImages = [...currentImages];
    const [selected] = newImages.splice(index, 1);
    newImages.unshift(selected);
    
    setProfileImages({
      ...profileImages,
      [activeProfile]: newImages
    });
  };

  const shuffleImages = () => {
    const currentImages = profileImages[activeProfile];
    const shuffled = [...currentImages].sort(() => Math.random() - 0.5);
    
    setProfileImages({
      ...profileImages,
      [activeProfile]: shuffled
    });
  };

  return (
    <div className="app-container">
      <div className="profile-showcase">
        <ProfileCard 
          profile={currentProfile}
          onMoveToFront={moveImageToFront}
          onShuffle={shuffleImages}
        />
      </div>

      <BubbleMenu 
        activeProfile={activeProfile} 
        setActiveProfile={setActiveProfile}
        profiles={profilesData}
      />
    </div>
  );
}

export default App;