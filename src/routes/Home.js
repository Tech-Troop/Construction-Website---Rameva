
import AboutHome from "./AboutHome";
import Contact from "./Contact";
import ProjectsHome from "./ProjectsHome"
import ServiceHome from './ServiceHome';
import Stats from "./Stats";
import Welcome from './Welcome'
import React, { useEffect, useState } from 'react';


const Home=() =>{

  const [isLoad, setIsLoad] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoad(true);
		}, 3000)
	}, []);

  return (
    <div className="App" style={{ height: isLoad ? "fit-content" : "100vh", overflowY: isLoad ? "" : "hidden" }}>
      <Welcome isLoad={isLoad} />
      <ServiceHome/>
      <Stats/>
      <AboutHome/>
     

    </div>
  )
}
export default Home;
