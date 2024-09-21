import MainSection from '../components/home/MainSection';
import MainContainer from '../components/mainContainer';
import Sidebar from '../components/Sidebar';

export default function About() {
  return (
    <div>
      <section>
        <MainContainer gradient='from-purple-500 to-purple-800'>
        <div className="flex w-full h-full">
        <div>
          <Sidebar />
        </div>

        <div className="w-3/4 h-full overflow-y-auto p-4">
          <MainSection />
        </div>
      </div>
        </MainContainer>
      </section>
    </div>
  );
}
