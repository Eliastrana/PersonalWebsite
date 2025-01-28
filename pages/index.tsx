import PhysicsFrontpage from "../components/PhysicsFrontpage";
import Aboutme from "../components/aboutme";
import Layout from "../components/layout";
import ProjectCarousel from "../components/ProjectCarousel";

const newPage: React.FC = () => {
  return (
      <div className="custom-cursor">

          <Layout>
              <PhysicsFrontpage/>
              <ProjectCarousel />
              <Aboutme/>

          </Layout>


      </div>
  );
}

export default newPage;