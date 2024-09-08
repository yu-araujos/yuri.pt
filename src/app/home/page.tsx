
import AboutMe from "@/app/components/home/aboutme";
import Widget from "@/app/components/home/widget";

export default function Home() {
  return (
    <main>
      <section className="flex border-2 border-[#F0F8FF] rounded-xl m-2 p-10 justify-around flex-wrap gap-10">
          <Widget width={675} height={340} linkTitle="Projetos" href="/projetos" textColor="#F0F8FF" className="bg-gradient-to-tl from-[#9769db] to-[#BB93DF]"></Widget>
          <Widget width={470} height={340} linkTitle="Sobre Mim" href="/sobre-mim" textColor="#F0F8FF" className="bg-gradient-to-tl from-[#ed8c69] to-[#e8e67e]"></Widget>
          <Widget width={365} height={340} linkTitle="Vamos nos conectar!" textColor="#66B3FF" className="bg-[#E1EFFB]"></Widget>
          <div className="flex items-center"><AboutMe/></div>
          <div className="border-2 border-[#F0F8FF] w-[365px] h-[340px] rounded-[10px]"></div>
      </section>
    </main>
  );
}
