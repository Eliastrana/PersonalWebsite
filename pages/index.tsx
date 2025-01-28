import Newnavbar from "../components/newtest/newnavbar";
import Name from "../components/newtest/name";
import Aboutme from "../components/newtest/aboutme";
import SlotViewer from "../components/newtest/SlotViewer";
import Layout from "../components/layout";
import ProjectCarousel from "../components/ProjectCarousel";

const newPage: React.FC = () => {
  return (
      <div className="custom-cursor">

          <Layout>
              <Name/>
              <ProjectCarousel />
              <Aboutme/>
              {/*<SlotViewer/>*/}

          </Layout>


      </div>
  );
}

export default newPage;