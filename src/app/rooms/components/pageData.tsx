import { OutlineLOcationIcon, SleepsIcon } from "@/utils/webSiteIcon";

export const accommodationPageData = {
  hero: {
    subtitle: "Experience Luxury ",
    title: "Himalayan Glamping Escapes!",
  },
  about: {
    logo: "",
    title:
      "Saraaya Glamps is a Himalayan Sanctuary for Stillness, Slow Living & Quiet Rejuvenation!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
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
      title: "The Cedar Suite",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      amenities: [
        { title: "SLEEPS 2", icon: <SleepsIcon /> },
        { title: "425 SQ FT", icon: <SleepsIcon /> },
        { title: "BREAKFAST", icon: <SleepsIcon /> },
      ],
      price: "From ₹ 12000/-",
      ctas: [
        { label: "RESERVE", href: "#" },
        { label: "CALL NOW", href: "#" },
      ],
    },
    {
      id: "02",
      title: "The River Tent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      amenities: [
        { title: "SLEEPS 2", icon: <SleepsIcon /> },
        { title: "425 SQ FT", icon: <SleepsIcon /> },
        { title: "BREAKFAST", icon: <SleepsIcon /> },
      ],
      price: "From ₹ 12000/-",
      ctas: [
        { label: "RESERVE", href: "#" },
        { label: "CALL NOW", href: "#" },
      ],
    },
    {
      id: "03",
      title: "The Cedar Suite",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      amenities: [
        { title: "SLEEPS 2", icon: <SleepsIcon /> },
        { title: "425 SQ FT", icon: <SleepsIcon /> },
        { title: "BREAKFAST", icon: <SleepsIcon /> },
      ],
      price: "From ₹ 12000/-",
      ctas: [
        { label: "RESERVE", href: "#" },
        { label: "CALL NOW", href: "#" },
      ],
    },
    {
      id: "04",
      title: "The Lantern Suite",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      amenities: [
        { title: "SLEEPS 2", icon: <SleepsIcon /> },
        { title: "425 SQ FT", icon: <SleepsIcon /> },
        { title: "BREAKFAST", icon: <SleepsIcon /> },
      ],
      price: "From ₹ 12000/-",
      ctas: [
        { label: "RESERVE", href: "#" },
        { label: "CALL NOW", href: "#" },
      ],
    },
  ],

  feelingSection: {
    title: "The Saraaya Feeling",
    heading:
      "Mornings Wrapped in Mist. Evenings Lit by Fire. Nights Filled with Stars.",
    buttonText: "PLAN YOUR EXCAPE",
  },

  reviewsSection: {
    title: "GUESTS REVIEWS",
    review:
      "Staying at Saraaya was nothing short of magical. Tucked away in the serene beauty it offers the perfect blend of untouched nature and refined luxury, something you rarely come across . hat stood out the most was how effortlessly the property combines comfort with wilderness. What truly makes this place special is that it delivers luxury that feels rare and unexpected in such a remote setting. You get the best of both worlds complete serenity and privacy without compromising on comfort. If you’re looking to disconnect from the chaos and reconnect with nature without giving up on the finer things this place is an absolute must visit.",
    currentSlide: "01",
    totalSlides: "09",
  },
};
