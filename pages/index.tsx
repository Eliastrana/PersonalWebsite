import Newnavbar from "../components/newtest/newnavbar";
import Name from "../components/newtest/name";
import Aboutme from "../components/newtest/aboutme";
import Frontpageprojectdisplay from "../components/Frontpageprojectdisplay";
import SlotViewer from "../components/newtest/SlotViewer";
import Layout from "../components/layout";

const newPage: React.FC = () => {
  return (
      <div className="custom-cursor">

          <Layout>
              <Name/>
              <Aboutme/>
              <Frontpageprojectdisplay/>
              <SlotViewer/>

          </Layout>


      </div>
  );
}

export default newPage;