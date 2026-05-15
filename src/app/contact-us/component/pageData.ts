// import {contacts} from "@/utils/constant";

import { EmailIcon, LocationIcon, PhoneIcon } from "@/utils/icons";

// import { CallIcon, LocationIcon,MailIcon } from "@/utils/icons";
export const contactPageData = {
  visitData: {
      sectionLabel: "Contact",

  title: {
    normal: "Get In ",
    highlighted: "TOUCH",
  },
    links: [
      {
        
         icon: PhoneIcon,
        label: "+91 78766 24372, +91 89883 34372",
        href: "tel:+917876624372",
       
      },
      {
       
        icon: EmailIcon,
        label: "info@saraayaglamps.com",
        href: "mailto:info@saraayaglamps.com",
      },
      {
       
        icon: LocationIcon,
        label: "Village Nauhali, Dharamshala 176217",
        href: "#",
       
      },
    ],
  },

  reservationsData: {
    title: "RESERVATIONS & ENQUIRIES",
    items: [
      "Room Bookings",
      "Restaurant Bookings",
      "Private Events",
      "On-site Parking Available",
    ],
  },

  enquiryForm: {
    title: "ENQUIRE NOW ",
    subtitle: "Let's Plan your Stay at Saraaya",
    privacyNote: "We respect your privacy. Your information is never shared.",
  },

 img :{
  src: "/contactbg.jpg",
  alt: "contact-bg",
},
  travelInfo: {
    mapUrl:"#",
  },
};