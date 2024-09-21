import MainContainer from '../components/mainContainer';
import Sidebar from '../components/Sidebar';

export default function About() {
  return (
    <div>
      <section>
        <MainContainer gradient='from-purple-500 to-purple-800'>
          <Sidebar />
        </MainContainer>
      </section>
    </div>
  );
}
