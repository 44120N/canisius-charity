function About(){
    const handleClick = () => {
      console.log("Hi");
    };
    
    return (
      <div className="about">
          <button onClick={handleClick}>Click me</button>
      </div>
    );
}


export default About;