import Footer from "../layouts/footer";
import MeshyCards from "../layouts/meshy-cards";
import Process from "../layouts/process";
import StorySection from "../layouts/story-section";
import Globe3D from "../mvp-blocks/spline-hero";

const HeroSection = () => {
    return (
        <div className="hero-section">
         <Globe3D/>
         <StorySection/>
         <MeshyCards/>
         <Process/>
         <Footer/>
        </div>
    )
}
export default HeroSection;