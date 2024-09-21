import MainContainer from '../components/mainContainer';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import Sidebar from '../components/Sidebar';

export default function Portfolio() {
  return (
    <MainContainer gradient='from-yellow-500 to-orange-400'>
      <div className="flex w-full h-full">
        <div>
          <Sidebar />
        </div>

        <div className="h-full overflow-y-auto">
          <PortfolioSection/>
        </div>
      </div>
    </MainContainer>
  );
}
