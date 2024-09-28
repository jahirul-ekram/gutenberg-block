
const Render = ({ imageUrl, title, description }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-img" />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default Render;