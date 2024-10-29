import Newnavbar from "../components/newtest/newnavbar";
import Name from "../components/newtest/name";
import Aboutme from "../components/newtest/aboutme";
import Frontpageprojectdisplay from "../components/Frontpageprojectdisplay";

const newPage: React.FC = () => {
    return (
        <div>
            <Newnavbar />
            <Name />
            <Aboutme />
            <Frontpageprojectdisplay />



        </div>
    );
}

export default newPage;