import MainContainer from '../components/mainContainer';
import Sidebar from '../components/Sidebar';

export default function Portfolio() {
  return (
    <div>
      <section>
        <MainContainer gradient='from-yellow-600 to-orange-500'>
          <Sidebar />
        </MainContainer>
      </section>
    </div>
  );
}
