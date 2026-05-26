import {
  AmenintiesIcon,
  BreakFastIcon,
  DeckIcon,
  FanIcon,
  OutlineLOcationIcon,
  RoomTentIcon,
  SleepsIcon,
  SQFTIcon,
  TapeIcon,
} from "@/utils/webSiteIcon";

export const accommodationPageData = {
  hero: {
    image: "/rooms/hero.png",
    subtitle: "Experience Luxury ",
    title: "Himalayan Glamping Escapes!",
  },
  about: {
    subtitle: "SUGGESTED STAY",
    logo: "/home/Vector-1.png",
    title: {
      highlight1: "Two",
      normal1: " Nights.",
      highlight2: "Three",
      normal2: " Mornings.",
    },
    description:
      "A private forest retreat in Village Nauhali, near Dharamshala, surrounded by untouched forests, glacier-fed streams, and panoramic views of the Dhauladhar range. Saraaya is designed for travelers seeking silence, slowness, and complete immersion in nature.",
  },
  titles: [
    { title: "Nauhali NEAR Dharamshala", icon: <OutlineLOcationIcon /> },
    { title: "32.2190° N 76.3234° E", icon: <OutlineLOcationIcon /> },
    { title: "Misty · 14°6", icon: <OutlineLOcationIcon /> },
    { title: "6 km/h", icon: <OutlineLOcationIcon /> },
  ],

  accommodations: [
    {
      id: "01",
      title: "DEVDAR — THE KEEPER",
      image: "/rooms/1.jpg",
      description:
        'Named after the sacred deodar cedar - the "wood of the gods" - that stands tall and unwavering through centuries. Devdar holds space the way the oldest trees do: quietly, deeply, and without question.',
      amenities: [
        { title: "SLEEPS 2", icon: <SleepsIcon /> },
        { title: "425 SQ FT", icon: <SQFTIcon /> },
        { title: "BREAKFAST", icon: <BreakFastIcon /> },
      ],
      price: "From ₹ 12000/-",
      ctas: [
        { label: "RESERVE", href: "#" },
        { label: "CALL NOW", href: "#" },
      ],
    },
    {
      id: "02",
      image: "/rooms/2.jpg",
      title: "Rai — The Watcher",
      description:
        "Named after the ban oak, rooted deep and still - the quiet guardian of the Himalayan forest floor. Rai sees everything and says little, offering shade, shelter, and the comfort of steady presence.",
      amenities: [
        { title: "CUSTOM TOILETRY ESSENTIALS", icon: <SleepsIcon /> },
        { title: "425 SQ FT", icon: <SQFTIcon /> },
        { title: "BREAKFAST", icon: <BreakFastIcon /> },
      ],
      price: "From ₹ 12000/-",
      ctas: [
        { label: "RESERVE", href: "#" },
        { label: "CALL NOW", href: "#" },
      ],
    },
    {
      id: "03",
      image: "/rooms/3.jpg",
      title: "BURANSH — THE NURTURER",
      description:
        "Named after the rhododendron, whose crimson blooms bring the first warmth to the mountains each spring. Buransh is a gentle reminder that softness is its own kind of strength.",
      amenities: [
        { title: "SLEEPS 2", icon: <SleepsIcon /> },
        { title: "425 SQ FT", icon: <SQFTIcon /> },
        { title: "BREAKFAST", icon: <BreakFastIcon /> },
      ],
      price: "From ₹ 12000/-",
      ctas: [
        { label: "RESERVE", href: "#" },
        { label: "CALL NOW", href: "#" },
      ],
    },
    {
      id: "04",
      image: "/rooms/4.jpg",
      title: "Kail — The Wanderer",
      description:
        "Named after the Himalayan blue pine, whose seeds travel far on the wind before finding ground. Kail is for those who've journeyed long and are ready to arrive - not at a destination, but at a feeling.",
      amenities: [
        { title: "SLEEPS 2", icon: <SleepsIcon /> },
        { title: "425 SQ FT", icon: <SQFTIcon /> },
        { title: "BREAKFAST", icon: <BreakFastIcon /> },
      ],
      
      ctas: [
        { label: "RESERVE", href: "#" },
        { label: "CALL NOW", href: "#" },
      ],
    },
  ],

  feelingSection: {
    image: "/home/feeling-img.png",
    title: "The Saraaya Feeling",
    heading:
      "Mornings Wrapped in Mist. Evenings Lit by Fire. Nights Filled with Stars.",
    cta: {
      label: "PLAN YOUR EXCAPE",
      href: "/contact-us",
    },
  },

  reviewsSection: {
    title: "GUESTS REVIEWS",
    review:
      "Staying at Saraaya was nothing short of magical. Tucked away in the serene beauty it offers the perfect blend of untouched nature and refined luxury, something you rarely come across . hat stood out the most was how effortlessly the property combines comfort with wilderness. What truly makes this place special is that it delivers luxury that feels rare and unexpected in such a remote setting. You get the best of both worlds complete serenity and privacy without compromising on comfort. If you’re looking to disconnect from the chaos and reconnect with nature without giving up on the finer things this place is an absolute must visit.",
    currentSlide: "01",
    totalSlides: "09",
  },

title: [
  {
    icon: <RoomTentIcon />,
    title: "SPACIOUS LUXURY TENTS",
  },
  {
    icon: <TapeIcon />,
    title: "ATTACHED MODERN BATHROOMS",
  },
  {
    icon: <AmenintiesIcon />,
    title: "PREMIUM LINENS & AMENITIES",
  },
  {
    icon: <FanIcon />,
    title: "HEATERS & FANS ALL SEASONS",
  },
  {
    icon: <DeckIcon />,
    title: "PRIVATE DECKS",
  },
],
};
