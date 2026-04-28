import { contact } from "@/utils/constent";
import { FillLocationIcon } from "@/utils/icons";

export const landingPageData = {
  bannerData: {
    images: [
      "/bnr-1.png",
      "/bnr-2.png",
      "/bnr-3.png",
      "/bnr-4.png",
    ],
  },
  about: {
    title:
      "A Glamping Retreat <br/><span class='text-secondary italic'>in the <i>Himalayas</i></span>",
    description:
      "Saraaya is a luxury glamping retreat located in the forests above Dharamshala in Himachal Pradesh- Built beside a pristine glacier stream flowing from sacred alpine lakes, Saraaya brings together the untamed beauty of the Himalayas and every comfort of a fine stay, four glamp rooms, one extraordinary wilderness.",
    location: {
      label: "Dharamshala, Himachal Pradesh",
      icon: <FillLocationIcon />,
      href: contact.addressLink,
    },
  },

  signatureTherapiesData: {
    title: "Sanctuary by Sacred <i>Himalayan Waters!</i>",
    cta: { label: "Book Now", href: contact.WhatsappCta },
    therapies: [
      {
        src: "/Sacred.png",
        icon: "/Sacred-icon.png",
        name: "Sacred",
        description:
          "Connected to the spiritual heritage of Lam Dal and Kareri Lake sacred waters tied to Lord Shiva, visited by pilgrims and shepherd communities for centuries.",
      },
      {
        src: "/Wild.png",
        icon: "/Wild-icon.png",
        name: "Wild",
        description:
          "Surrounded by forests of deodar cedar, rhododendron, pine and ban oak. Ancient, unmanaged, alive in every season, one of the most beautiful natural settings in the Kangra valley.",
      },
      {
        src: "/Restorative.png",
        icon: "/Restorative-icon.png",
        name: "Restorative",
        description:
          "A retreat designed for silence, nature and reconnection. Where slowing down is not a luxury but the entire point. Where the Himalayas do the healing.",
      },
    ],
  },

  rooms: {
    title: "Luxury Stays by <i>Himalayan Lakes!</i>",
    cards: [
      {
        title: "Mountain View Tents",
        images: [
          "/rooms/Mountain-1.png",
          "/rooms/Mountain-2.png",
          "/rooms/Mountain-3.png",
          "/rooms/Mountain-4.png",
          "/rooms/Mountain-5.png",
          "/rooms/Mountain-6.png",
        ],
      },
      {
        title: "Premium View Tents",
        images: [
          "/rooms/Premium-1.png",
          "/rooms/Premium-2.png",
          "/rooms/Premium-3.png",
          "/rooms/Premium-4.png",
          "/rooms/Premium-5.png",
          "/rooms/Premium-6.png",
        ],
      },
    ],
    cta: {
      label: "Book Now",
      href: contact.WhatsappCta,
    },
  },

  titles: [
    "LIMITED STAYS",
    "HIGH DEMAND ON",
    "ONLY FOUR TENTS AVAILABLE PER NIGHT",
  ],

  experiences: {
    title: "Signature Himalayan <i>Experiences!</i>",
    cards: [
      {
        image: "/exp-1.png",
        alt: "Trek to Hidden Himalayan Lakes",
      },
      {
        image: "/exp-2.png",
        alt: "Stargaze Under Zero Light Pollution",
      },
      {
        image: "/exp-3.png",
        alt: "Glacier Stream Picnic",
      },
    ],
    cta: {
      label: "Book Now",
      href: contact.WhatsappCta,
    },
  },
  testimonialData: {
    title: "Guest <i>Experiences</i>",
    images: ["/guest-1.png", "/guest-2.png", "/guest-3.png", "/guest-4.webp"],
    testimonials: [
      {
        text: "We didn’t just “reach” Saraaya you actually walk the last stretch, and that changes the whole experience. By the time you arrive, it already feels like you’ve left everything behind. No traffic, no noise just silence and space. The tents are beautifully done, but what really stays with you is the feeling of being completely cut off (in a good way). Mornings here feel unreal. Definitely not for people looking for an easy, hotel-like stay. But if you want something different, this place delivers.",
        name: "Rajneesh Thakur",
      },
      {
        text: "Staying at Saraaya was nothing short of magical. Tucked away in the serene beauty it offers the perfect blend of untouched nature and refined luxury—something you rarely come across . hat stood out the most was how effortlessly the property combines comfort with wilderness. What truly makes this place special is that it delivers luxury that feels rare and unexpected in such a remote setting. You get the best of both worlds complete serenity and privacy without compromising on comfort. If you’re looking to disconnect from the chaos and reconnect with nature without giving up on the finer things this place is an absolute must visit",
        name: "Ronak Panchal",
      },
      {
        text: "Beautiful property in midst of mountains and greenery... Such a scenic and calm place to visit ottages are 5 star ...with amazing bed and bathrooms are so well done... Each aspect of the property has a thoughtful insight. Rooms are well heated in winters The host and service staff are delightful amd happy to serve u in a best way possible le We were 2 couple with children hey've a stay a truly memorable experience. Must visit when in dharmsala...",
        name: "Payal Razzaq",
      },
      {
        text: "Awesome place, loved it !!",
        name: "rishi malhotra",
      },
    ],

    cta: {
      label: "Book Now",
      href: contact.WhatsappCta,
    },
  },
};
