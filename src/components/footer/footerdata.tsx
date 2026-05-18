import { contact } from "@/utils/constent";
import {
  Facebook,
  FillCallIcon,
  FillLocationIcon,
  FillMailIcon,
  Instagram,
  LinkedIn,
} from "@/utils/icons";
import { navData } from "../navbar/navData";
import { CallIcon } from "@/utils/formIcons";

interface FooterData {
  logo: string;
  cta: {
    label: string;
    href: string;
  };
  lists: {
    title?: string;
    links: {
      title?: string;
      icon: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

interface WebsiteFooterData {
  logo: string;

  lists: {
    title?: string;
    subtitle?: string;
    links: {
      title?: string;
      icon?: React.ReactNode;
      label: string;
      href?: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/logo.png",
  cta: {
    label: "Book Now",
    href: contact.callCta,
  },
  lists: [
    {
      title: "Contact <i>Information</i>",
      links: [
        {
          icon: <FillLocationIcon />,
          label: contact.address,
          href: contact.addressLink,
        },
        {
          title: "Call: ",
          icon: <FillCallIcon />,
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
          label2: contact.phone[1],
          href2: "tel:" + contact.phone[1],
        },

        {
          title: "Email: ",
          icon: <FillMailIcon />,
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
  ],
};

export const websiteFooterData: WebsiteFooterData = {
  logo: "/logo.png",

  lists: [
    {
      title: "Explore",
      links: navData.links,
    },

    {
      title: "Reservations",
      links: [
        {
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
          label2: contact.phone[1],
          href2: "tel:" + contact.phone[1],
          icon: <CallIcon />,
        },
        {
          label: contact.address,
          href: contact.addressLink,
          icon: <FillLocationIcon />,
        },
        {
          label: contact.email,
          href: "mailto:" + contact.email,
          icon: <FillMailIcon />,
        },
      ],
    },
  ],
};
