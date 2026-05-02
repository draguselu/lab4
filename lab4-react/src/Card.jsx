function Card(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {props.tech && (
        <span className="card-tech">{props.tech}</span>
      )}
    </div>
  );
}

export default Card;
