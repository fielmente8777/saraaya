
import { SectionWithContainer } from "@/components/sectionComponants";
import ContactInfo from "./component/contactInfo";
import { contactPageData } from "./component/pageData";
import ContactMap from "./component/contactMap";
import ContactForm from "./component/contactForm";




export default function ContainerPage(){
    return (
        <main>
        <SectionWithContainer sectionClassName="bg-background py-12">
            <div className="grid grid-cols-1 xl:grid-cols-[380px_1fr] gap-14 items-start">
                <ContactInfo
                  visitData={contactPageData.visitData}
                  reservationsData={contactPageData.reservationsData}
                  />

                  <ContactMap
                  mapUrl="/"
                  />
            </div>
         </SectionWithContainer>
         <section className="relative">
            <div className=" relative aspect-[9/5]">
            <img 
             src={contactPageData.img.src}
             alt={contactPageData.img.alt}
             className="absolute inset-0 h-full w-full object-cover"
             />
            </div>
            <div className="absolute inset-0 flex items-center justify-center px-4 ">
            <div className="w-full max-w-3xl">
                <ContactForm
                enquiryForm={contactPageData.enquiryForm}
                />
            </div>
            </div>

         </section>
         </main>
    )
}