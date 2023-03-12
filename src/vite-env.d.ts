/// <reference types="vite/client" />
type Link = {
  id: string;
  name: string;
};

type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Colors = "primary" | "secondary" | "tertiary" | "light" | "dark";

type BenefitsData = {
  data: {
    heading: string;
    paragraph: string;
    boxes: {
      id: string;
      title: string;
      paragraph: string;
      btn: string;
      icon: string;
      background: string;
    }[];
  };
};

type Testimonials = {
  id: string;
  name: string;
  text: string;
  img: string;
}[];

type ClientsData = {
  data: {
    heading: string;
    paragraph: string;
    CTA: string;
    testimonials: Testimonials;
  };
};

type ContactUsData = {
  data: {
    heading: string;
    paragraph: string;
    CTA: string;
    shadow: string;
    gallery: { id: string; img: string }[];
  };
};

type HomeData = {
  data: {
    heading: string;
    subheading: string;
    shadow: string;
    paragraph: string;
    CTA: string;
    link: string;
  };
};

type NavData = {
  data: {
    name: string;
    navLinks: { id: string; name: string }[];
    CTA: string;
    tagline: string;
    contacts: {
      heading: string;
      adress: string;
      number: string;
      email: string;
    };
  };
};

type TeamData = {
  data: {
    heading: string;
    paragraph: string;
    members: { id: string; name: string; text: string; img: string }[];
  };
};
