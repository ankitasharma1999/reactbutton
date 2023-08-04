import React from "react";
import ReactDOM  from "react";
function Car(props){
    return <h1>My car  brand name is { props.brand }!</h1>;
}

function Garage() {
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <Car brand="Ford" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
 
export default Car;