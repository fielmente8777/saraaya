import Image from "next/image";
import { Container } from "../sectionComponants";
import { websiteFooterData } from "./footerdata";
import Link from "next/link";

const WebSiteFooter = () => {
  return (
    <footer className="max_screen_width ">
      <div className="w-full h-20" />
      <div className="relative w-full aspect-[16/1.79]">
        <Image src="/footer.png" alt="Image" fill className="object-contain" />
      </div>
      <div className="w-full bg-primary py-10 lg:py-16 -mt-[0.7px]">
        <Container className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex flex-col gap-4">
            <h2 className="text-white uppercase tracking-widest">{websiteFooterData.lists[0].title}</h2>

            <ul className="space-y-2">
              {websiteFooterData.lists[0].links.map((item, index) => (
                <li className="text-white" key={index}>
                  {item.href && <Link href={item.href}>{item.label}</Link>}
                </li>
              ))}
            </ul>
          </div>
          <div className=""></div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white uppercase tracking-widest">{websiteFooterData.lists[1].title}</h2>
            <ul className="flex flex-col gap-2">
              {websiteFooterData.lists[1].links.map((item, index) => (
                <li className="text-white  flex items-center" key={index}>
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.href && (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.href2 && <span className="mr-2">,</span>}
                  {item.label2 && (
                    <Link
                      href={item.href2 || ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label2}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default WebSiteFooter;
