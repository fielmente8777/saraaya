import { landingPageData } from "@/app/landing-page/components/landingPageData";
import {
  CloudIcon,
  GpsIcon,
  OutlineLOcationIcon,
  SleepsIcon,
  WindIcon,
} from "@/utils/webSiteIcon";

export const homePageData = {
  titles: [
    { title: "Nauhali NEAR Dharamshala", icon: <OutlineLOcationIcon /> },
    { title: "32.2190° N 76.3234° E", icon: <GpsIcon /> },
    { title: "Misty · 14°6", icon: <CloudIcon /> },
    { title: "6 km/h", icon: <WindIcon /> },
  ],

  banner: {
    video: {
      src: "/home/Copy-of-Drone-clips.mp4",
      poster: "/home/Copy-of-Drone-clips.png",
    },
  },
  about: {
    image: "/home/about-img.png",
    logo: "/home/Vector-1.png",
    title: "A LUXURY GLAMPING Retreat",
    heading: "Where The Mountains Learn To Whisper",
    description: [
      `<span class="float-left text-4xl md:text-6xl leading-[0.85] mr-3 font-primary">
        T
      </span>ucked into the cedar slopes above Dharamshala, Saraaya is not a hotel, nor a homestay. It is a long pause, a season measured in tea rituals, river sounds, and the slow rolling of mountain mist.`,
      "Inspired by Tibetan craft and the editorial restraint of Himalayan monasteries, every tent at Saraaya is a quiet room with a window onto the Dhauladhar range.",
    ],
    hostedText: "Hosted by the Saraaya family, since 2019",
  },

  escapeSection: {
    image: "/home/escape-img.png",
    title: "THE HIMALAYAN ESCAPE",
    heading: `Saraaya Invites you to Soak in the “Beauty of the Himalayas”`,
    cta: {
      label: "PLAN YOUR EXCAPE",
      href: "/about",
    },
  },

  glampsSection: {
    title: "THE GLAMPS",
    heading: "Four Suites. One forest. Endless ways to Disappear.",
    description:
      "Each glamp is hand-built from cedar, canvas and stone, a private kingdom of one suite, one view, one fireplace.",
    accommodations: [
      {
        id: "01",
        title: "The Cedar Suite",
        image: "/rooms/Mountain-1.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "know more", href: "/rooms" },
      },
      {
        id: "02",
        title: "The River Tent",
        image: "/rooms/Mountain-2.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "know more", href: "/rooms" },
      },
      {
        id: "03",
        title: "The Cedar Suite",
        image: "/rooms/Mountain-3.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "know more", href: "/rooms" },
      },
      {
        id: "04",
        title: "The Lantern Suite",
        image: "/rooms/Mountain-4.png",
        amenities: { title: "SLEEPS 2", icon: <SleepsIcon /> },
        cta: { label: "know more", href: "/rooms" },
      },
    ],
  },

  experiencesSection: {
    title: "The Saraaya EXPERIENCES",
    heading: "Days arranged like Stories!",
    description:
      "Curated rituals designed by our hosts, none of them on a schedule, all of them on the slow side of time.",
    experiences: [
      {
        image: "/exp-1.png",
        title: "Trek to Hidden Himalayan Lakes",
        timing: "Sunrise · In-tent",
      },
      {
        image: "/exp-8.png",
        title: "Bonfire",
        timing: "Dusk · Daily",
      },
      {
        image: "/exp-2.png",
        title: "Stargaze Under Zero Light Pollution",
        timing: "Sunrise · In-tent",
      },
      {
        image: "/exp-3.png",
        title: "Glacier Stream Picnic",
        timing: "Dusk · Daily",
      },
      {
        image: "/exp-4.png",
        title: "Cultural night",
        timing: "Sunrise · In-tent",
      },
      {
        image: "/exp-7.png",
        title: "Movie under the stars",
        timing: "Dusk · Daily",
      },
      {
        image: "/exp-5.png",
        title: "Private dining by the river",
        timing: "Sunrise · In-tent",
      },
      {
        image: "/exp-6.png",
        title: "Village tour",
        timing: "Dusk · Daily",
      },
    ],
  },

  feelingSection: {
    image: "/home/feeling-img.png",
    title: "The Saraaya Feeling",
    heading:
      "Mornings Wrapped in Mist. Evenings Lit by Fire. Nights Filled with Stars.",
    cta: {
      label: "PLAN YOUR EXCAPE",
      href: "/about",
    },
  },

  reviewsSection: {
    title: "GUESTS REVIEWS",
    reviews: landingPageData.testimonialData.testimonials,
  },
};
