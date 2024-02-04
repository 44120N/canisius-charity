function About(){
    const handleClick = () => {
      console.log("Hi");
    };
    
    return (
      <div className="about">
          <div className="content">
            <button onClick={handleClick}>Click Me</button>
          </div>
      </div>
    );
}


export default About;