import MainContainer from './components/mainContainer';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <div className="background">
      <main>
        <MainContainer gradient='from-blue-500 to-blue-800'>
          <Sidebar />
        </MainContainer>
      </main>
    </div>
  );
}
