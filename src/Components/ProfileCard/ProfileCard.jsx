import './ProfileCard.css'
import { useState } from 'react';
function ProfileCard(props) {
    //efining our likes varibale to keep track the number of likes for each profile card
    const [likes, setLikes] = useState(0);
    return (
        <div className="profile-card">
            <h1>{props.name} :3</h1>
            <h2>Hobby: {props.hobby}</h2>
            <h3>Emoji for them: {props.emoji}</h3>
            <button onClick={() => setLikes(likes + 1)}>
            🩵 Likes: {likes}
            </button>
        </div>
    );
}

export default ProfileCard;