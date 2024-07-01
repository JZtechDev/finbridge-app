"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

let heading: string = "";

const Guide = ({ titles, data }: { titles: any; data: any }) => {
  return (
    <div className="container">
      <Tabs
        defaultValue={titles[0]}
        orientation="horizontal"
        className="flex gap-[10px] w-full justify-between"
      >
        <TabsList className="h-auto flex-col items-start justify-start bg-[#03070D66] border border-[#B7D2FF1A] p-[10px] gap-2">
          {titles.map((title: any, index: number) => (
            <TabsTrigger
              className=" h-10 text-white bg-[#FFFFFF0A] border border-[#FFFFFF0A] w-full justify-start rounded-[10px] pl-5 tab_btn"
              key={index}
              value={title}
            >
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
        {data.map((textContent: any, index: number) => {
          heading = titles[index];

          return (
            <TabsContent
              className="flex-1 bg-[#040A1466] border border-[#B7D2FF1A] w-full rounded-[10px] m-0 p-10 tab_content "
              key={index}
              value={titles[index]}
            >
              <h2 className="text-h3 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-2">
                {heading}
              </h2>
              <BlocksRenderer
                content={textContent.tabcontent}
                blocks={{
                  paragraph: ({ children }) => (
                    <p className="text-body opacity-50 font-medium pb-2">
                      {children}
                    </p>
                  ),
                  heading: ({ children, level }) => {
                    switch (level) {
                      case 1:
                        return (
                          <h1 className="text-h1 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-2">
                            {children}
                          </h1>
                        );
                      case 2:
                        return (
                          <h2 className="text-h2 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-2">
                            {children}
                          </h2>
                        );
                      case 3:
                        return (
                          <h3 className="text-h3 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-2">
                            {children}
                          </h3>
                        );
                      case 4:
                        return (
                          <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-2">
                            {children}
                          </h4>
                        );
                      case 5:
                        return (
                          <h5 className="text-h5 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-2">
                            {children}
                          </h5>
                        );
                      case 6:
                        return (
                          <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-2">
                            {children}
                          </h6>
                        );
                      default:
                        return (
                          <h1 className="text-h1 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-2">
                            {children}
                          </h1>
                        );
                    }
                  },
                  link: ({ children, url }) => (
                    <Link href={url}>{children}</Link>
                  ),
                  image: ({ image }) => (
                    <img
                      className="py-4"
                      src={image.url}
                      alt={image.alternativeText || ""}
                    />
                  ),
                }}
                modifiers={{
                  bold: ({ children }) => <strong>{children}</strong>,
                  italic: ({ children }) => (
                    <span className="italic font-normal">{children}</span>
                  ),
                }}
              />
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Guide;
