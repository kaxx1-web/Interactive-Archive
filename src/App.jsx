import { useState } from 'react'
import './App.css'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import ImageData from "./data/images.json";
import BubbleMenu from './Components/BubbleMenu/BubbleMenu'

function App() {
  const [activeProfile, setActiveProfile] = useState('one');
  const [profileImages, setProfileImages] = useState({
    one: ImageData.slice(0, 3),
    two: ImageData.slice(6, 8),
    three: ImageData.slice(3, 6),
    four: ImageData.slice(5, 8)
  });
  
  // Profile metadata
  const profilesData = {
    one: {
      name: "gallery one",
    },
    two: {
      name: "gallery two",
    },
    three: {
      name: "gallery three",
    },
    four: {
      name: "gallery four",
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
        <BubbleMenu 
        activeProfile={activeProfile} 
        setActiveProfile={setActiveProfile}
        profiles={profilesData}
        />
        <ProfileCard 
          profile={currentProfile}
          onMoveToFront={moveImageToFront}
          onShuffle={shuffleImages}
        />
      </div>

    </div>
  );
}

export default App;