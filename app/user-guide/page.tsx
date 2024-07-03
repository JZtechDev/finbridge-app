import Guide from "@/components/sections/guide/Guide";
import GuideHero from "@/components/sections/guide/GuideHero";
import Seamless from "@/components/sections/home/Seamless";

const basePath: string = "https://thoughtful-wonder-a30fab97ed.strapiapp.com";

async function getStrapiData() {
  try {
    const resposne = await fetch(`${basePath}/api/tabcontents`);
    const data: any = await resposne.json();
    return data;
  } catch (error: any) {
    console.log(error.messsage);
  }
}

const page = async () => {
  const { data }: any = await getStrapiData();
  const titlesArray: Array<string> = [];
  const tabContent: Array<any> = [];

  data.map((item: any) => {
    titlesArray.push(item.attributes.title);
    tabContent.push(item.attributes);
  });

  return (
    <div className="user_guide overflow-hidden pb-10">
      <GuideHero />
      <Guide titles={titlesArray} data={tabContent} imgPath={basePath} />
      <Seamless />
    </div>
  );
};

export default page;
