import "./ImageCard.css";

function ImageCard({ image, onMoveToFront }) {

    return (
        <div className="image-card" > {/* Add space after className="image-card" */}
            <img src={image.url} alt={image.title} width="150"/>
            <p>{image.title}</p>
            <button onClick={onMoveToFront}>Move to front</button> {/* Change moveImageToFront to onMoveToFront */}
        </div>
    );
}

export default ImageCard;