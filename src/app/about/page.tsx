import AboutSection from '../components/aboutMe/AboutSection';
import HomeSection from '../components/home/HomeSection';
import MainContainer from '../components/mainContainer';
import Sidebar from '../components/Sidebar';

export default function About() {
  return (

    <MainContainer gradient='from-purple-500 to-purple-800'>
      <div className="flex w-full h-full">
        <div>
          <Sidebar />
        </div>

        <div className="h-full overflow-y-auto">
          <AboutSection />
        </div>
      </div>
    </MainContainer>
  );
}
