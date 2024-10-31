import loadingImage from "../../public/loading1.gif"
import Image from "next/image";

const About = ()=>{

  return <>
    <h1>This is About Page</h1>    
    <Image src={loadingImage} alt="Description of my image" width={100} height={100} />
  </>
}


export default About;