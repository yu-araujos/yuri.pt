import MainSection from './components/home/MainSection';
import MainContainer from './components/mainContainer';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <MainContainer gradient='from-blue-500 to-blue-800'>
      <div className="flex w-full h-full">
        <div>
          <Sidebar />
        </div>

        <div className="h-full overflow-y-auto">
          <MainSection />
        </div>
      </div>
    </MainContainer>
  );
}
