import "./ImageCard.css";

function ImageCard({ image, onMoveToFront }) {

    return (
        <div className="image-card" > 
            <img src={image.url}  width="150"/>
            <button onClick={onMoveToFront}>Move to front</button> 
        </div>
    );
}

export default ImageCard;