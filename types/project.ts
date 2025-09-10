export type WhoWeAre = {
  title: string;
  image: string;
  paragraphs: string[];
};

export type faqItems = {
  _key: string;
  question: string;
  answer: string;
};

export type faqDataProps = {
  items: faqItems[];
  image: string;
};
export type ValuePropositionItem = {
  title: string;
  description: string;
  icon: string;
};

export type ValuePropositionSection = {
  items: ValuePropositionItem[];
};
export type TrainEquipSupportItem = {
  title: string;
  text: string;
};

export type FeaturesContent = {
  title: string;
  image: string;
  items: TrainEquipSupportItem[];
};

export type HeroCard = {
  _key: string;
  _type: "heroCard";
  image: any;
  text: string;
};

export type HeroSection = {
  _key: string;
  _type: "heroSection";
  title: string;
  words: string[];
  cards: HeroCard[];
};

export type ourVision = {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  image: string;
};

export type successStoryMetrics = {
  icon: string;
  number: number;
  label: string;
  _id: string;
};

export type successStory = {
  _id: string;
  title: string;
  text: string;
  metrics: successStoryMetrics[];
};
export type workhighlights = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  image: string;
  description: string;
};

export type testimonial = {
  _id: string;
  _createdAt: Date;
  author: string;
  quote: string;
};

export type CoreValue = {
  title: string;
  number: number;
  icon: string;
};

export type CoreValuesSection = {
  values: CoreValue[];
};

export type legacy = {
  _id: string;
  _createdAt: Date;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export type notes = {
  _id: string;
  _createdAt: Date;
  text: string;
  bgColor: string;
  textColor: string;
};

export type gallery = {
  _id: string;
  _createdAt: Date;
  title: string;
  images: { src: string; alt: string }[];
};

export type social = {
  _id: string;
  _createdAt: Date;
  platform: string;
  url: string;
};

export type seo = {
  title: string;
  description: string;
};
