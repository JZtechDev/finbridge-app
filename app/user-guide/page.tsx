import Guide from "@/components/sections/guide/Guide";
import GuideHero from "@/components/sections/guide/GuideHero";

async function getStrapiData() {
  try {
    const resposne = await fetch("http://localhost:1337/api/tabcontents");
    const data: any = await resposne.json();
    return data;
  } catch (error: any) {
    console.log(error.messsage);
  }
}

const page = async () => {
  const { data } = await getStrapiData();
  const titlesArray: Array<string> = [];
  const tabContent: Array<any> = [];

  data.map((item: any) => {
    titlesArray.push(item.attributes.title);
    tabContent.push(item.attributes);
  });

  return (
    <div className="user_guide overflow-hidden pb-10">
      <GuideHero />
      <Guide titles={titlesArray} data={tabContent} />
    </div>
  );
};

export default page;
