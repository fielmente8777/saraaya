import Link from "next/link";
import { Container } from "../sectionComponants";
import Image from "next/image";
import { websiteFooterData } from "./footerdata";
import NewsLetter from "../forms/NewsLetter";

const WebSiteFooter = () => {
  return (
    <footer className="max_screen_width bg-primary">
      <Container>
        <div className="grid md:py-14 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 ">
          <div className=" flex flex-col gap-6">
            <div
              className={`relative 
                  w-full aspect-[4/.7] md:aspect-[4/1.9] md:max-w-25`}
            >
              <Image
                src={websiteFooterData.logo}
                alt="logo"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>
            <NewsLetter />
            {websiteFooterData.description.map((item, index) => (
              <p className="text-white text-[0.854rem]" key={index}>
                {item}
              </p>
            ))}
          </div>

          {websiteFooterData.lists.map((list, index) => (
            <div className={`flex flex-col gap-4`} key={index}>
              <h2
                className="text-[1.375rem] text-white secondary-font"
                dangerouslySetInnerHTML={{ __html: list.title ?? "" }}
              />
              {list.subtitle && (
                <p
                  className="text-white text-base"
                  dangerouslySetInnerHTML={{ __html: list.subtitle ?? "" }}
                />
              )}
              <ul className={`flex gap-3 ${index !== 2 ? "flex-col" : ""}`}>
                {list.links.map((item, suIndex) => (
                  <li key={suIndex}>
                    {item.href ? (
                      <Link
                        target={
                          item.href.includes("https") ? "_blank" : "_self"
                        }
                        rel="noopener noreferrer"
                        href={item.href}
                        className="flex items-center gap-2 text-white text-base"
                      >
                        {item.icon && (
                          <span className="text-xl">
                            {item.icon}
                            <span className="sr-only">{item.label}</span>
                          </span>
                        )}
                        {!item.icon && <span>{item.label}</span>}
                      </Link>
                    ) : (
                      <span className="text-white text-base">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-white h-px w-full max_width" />
      <Container className="py-4 flex max-md:flex-col items-center gap-3.5 justify-center">
        <div className="md:flex max-md:space-x-2 text-center flex-wrap items-center justify-center gap-2 text-white text-sm">
          {" "}
          <span className="text-white">
            © {new Date().getFullYear()} Naad Wellness,
          </span>
          {/* <span className="md:block hidden">|</span> */}
          <span className="text-white"> Inc. All Rights Reserved</span>
          {/* <span className="md:block hidden">|</span> */}
        </div>
        <p className="text-white text-sm">
          Develop by{" "}
          <Link
            href="https://www.fielmente.com/"
            className="font-bold"
            target="_blank"
          >
            Fielmente
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default WebSiteFooter;
