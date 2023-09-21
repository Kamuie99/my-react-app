import "../styles/App.css";

function App(props) {
  const cardStyle = {
    backgroundColor: props.backgroundColor,
  };
  return(
    <div className="card" style={cardStyle}>
      <img src={props.src} alt=""/>
      <div className="contents">
        <h1>{props.name}</h1>
        <p>{props.hobby}</p>
        <h4>{props.job}</h4>
      </div>
    </div>
  )
}

export default App;