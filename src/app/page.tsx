import About from "./components/home/aboutme";
import Eyes from "./components/home/eyes";
import Widget from "./components/home/widget";

export default function Home() {
  return (
    <main>
      <section className="flex border-[1px] border-[#F0F8FF] rounded-xl m-10 p-10 justify-around flex-wrap gap-10">
          <Widget width={675} height={340} linkTitle="Projetos" href="/projetos" textColor="#F0F8FF" className="bg-gradient-to-tl from-[#9769db] to-[#BB93DF]"></Widget>
          <Widget width={470} height={340} linkTitle="Sobre Mim" href="/sobre-mim" textColor="#F0F8FF" className="bg-gradient-to-tl from-[#ed8c69] to-[#e8e67e]"></Widget>
          <Widget width={365} height={355} linkTitle="Vamos nos conectar!" textColor="#66B3FF" className="bg-[#E1EFFB]"></Widget>
          <div className="flex items-center"><About/></div>
          <Widget width={365} height={355} textColor="#66B3FF" className="border-[1px] border-[#F0F8FF]"><Eyes/></Widget>
      </section>
    </main>
  );
}
