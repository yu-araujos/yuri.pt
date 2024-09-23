import ContactSection from '../components/contact/contactSection';
import MainContainer from '../components/mainContainer';
import Sidebar from '../components/Sidebar';

export default function Contact() {
  return (

    <MainContainer gradient='from-green-500 to-green-700'>
      <div className="flex w-full h-full">
        <div>
          <Sidebar />
        </div>

        <div className="h-full overflow-y-auto">
          <ContactSection/>
        </div>
      </div>
    </MainContainer>
  );
}
