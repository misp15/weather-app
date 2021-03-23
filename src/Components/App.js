import Search from './Search';
function App() {
 
    
  return (
    <div className="Container">
      <div className="Weather-Container">
      <Search/>
      </div>
      <div className="social-icons">
          <a
           className="ui circular linkedin icon button"
            href="https://www.linkedin.com/in/milica-spasenovic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="linkedin icon"></i>
          </a>
          <a
            className="ui circular green icon button"
            href="mailto:spasenovic.milica@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >

          <i className="envelope outline icon"></i>
          </a>
          <a
          className="ui circular pink icon button"
            href="https://github.com/misp15"
            target="_blank"
            rel="noopener noreferrer"
          >
          <i className="github icon"></i>
          </a>
      </div>
   
    </div>
  );
}

export default App;
