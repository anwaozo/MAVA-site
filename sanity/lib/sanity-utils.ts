import { client } from "./client";

export async function getSocialMediaLinks() {
  return await client.fetch(
    `*[_type == "socialMediaLinks"] | order(_createdAt desc){
      _id,
      platform,
      url
    }`
  );
}

// home page SEO data
export async function getHomeSeo() {
  return await client.fetch(
    `*[_type == "seo"][0]{
      _id,
      title,
      description
    }`
  );
}

// about page SEO data
export async function getAboutSeo() {
  return await client.fetch(
    `*[_type == "aboutSeo"][0]{
      _id,
      title,
      description
    }`
  );
}

// legacy page SEO data
export async function getLegacySeo() {
  return await client.fetch(
    `*[_type == "legacySeo"][0]{
      _id,
      title,
      description
    }`
  );
}

// workshop page SEO data
export async function getWorkshopSeo() {
  return await client.fetch(
    `*[_type == "workshopSeo"][0]{
      _id,
      title,
      description
    }`
  );
}

// gallery page SEO data
export async function getGallerySeo() {
  return await client.fetch(
    `*[_type == "gallerySeo"][0]{
      _id,
      title,
      description
    }`
  );
}

// contact us page SEO data
export async function getContactSeo() {
  return await client.fetch(
    `*[_type == "contactSeo"][0]{
      _id,
      title,
      description
    }`
  );
}

export async function getHomePageContent() {
  return await client.fetch(`{
    "heroSection": *[_type == "heroSection"][0]{
      _id,
      title,
      words,
      cards[]{
        "image": image.asset->url,
        text
      }
    },
    "brandLogos": *[_type == "brands"] | order(_createdAt desc){
      _id,
      "image": image.asset->url,
      alt
    },
    "trainEquipSupport": *[_type == "trainEquipSupport"][0]{
      _id,
      "image": image.asset->url,
      title,
      items[]{
        title,
        text
      }
    },
    "ourVision": *[_type == "ourVision"][0]{
      _id,
      title,
      "image": image.asset->url,
      paragraphs
    },
    "workHighlights": *[_type == "workHighlights"] | order(_createdAt desc){
      _id,
      title,
      description,
      "image": image.asset->url,
      "imageAlt": image.alt
    },
    "successStory": *[_type == "successStory"][0]{
      _id,
      title,
      text,
      metrics[]{
        "icon": icon.asset->url,
        number,
        label
      }
    },
    "testimonials": *[_type == "testimonial"] | order(_createdAt desc){
      _id,
      quote,
      author
    }
  }`);
}

export async function getAboutPageContent() {
  return await client.fetch(`{
    "whoWeAre": *[_type == "whoWeAre"][0]{
      _id,
      title,
      "image": image.asset->url,
      paragraphs
    },
    "successStory": *[_type == "successStory"][0]{
      _id,
      title,
      text,
      metrics[]{
        "icon": icon.asset->url,
        number,
        label
      }
    },
    "pfoVision": *[_type == "pfoVision"][0]{
      _id,
      title,
      "image": image.asset->url,
      paragraphs
    },
    "whatWeDo": *[_type == "whatWeDoSection"] | order(_createdAt desc){
      _id,
      title,
      description,
      "image": image.asset->url,
      "imageAlt": image.alt
    },
    "coreValues": *[_type == "coreValuesSection"] | order(number asc){
      _id,
      title,
      number,
      "icon": icon.asset->url
    },
    "valueProposition": *[_type == "valuePropositionSection"] | order(_createdAt desc){
      _id,
      title,
      description,
      "icon": icon.asset->url
    },
    "services": *[_type == "servicesSection"][0]{
      _id,
      title,
      "brochure": brochure.asset->url,
      "image": image.asset->url,
      services[]{
        name,
        "icon": icon.asset->url
      }
    },
    "faq": *[_type == "faqSection"][0]{
      _id,
      "image": image.asset->url,
      items[]{
        _key,
        question,
        answer
      }
    }
  }`);
}

export async function getLegacyPageContent() {
  return await client.fetch(`{
    "legacySlides": *[_type == "pfoLegacySlide"] | order(_createdAt desc){
      _id,
      title,
      text,
      "image": image.asset->url,
      "imageAlt": image.alt
    },
    "notesFromLovers": *[_type == "notesFromLovers"] | order(_createdAt desc){
      _id,
      text,
      textColor,
      bgColor
    }
  }`);
}

export async function getWorkshopPageContent() {
  return await client.fetch(`{
    "shapingLives": *[_type == "shapingLives"][0]{
      _id,
      title,
      description
    },
    "empoweringCreatives": *[_type == "empoweringCreativesSection"][0]{
      _id,
      "icon": icon.asset->url,
      title,
      description,
      "image": image.asset->url
    },
    "workshopGallery": *[_type == "workshopSection"][0]{
      _id,
      description,
      images[]{
        "src": src.asset->url,
        alt
      }
    },
    "testimonials": *[_type == "testimonial"] | order(_createdAt desc){
      _id,
      quote,
      author
    }
  }`);
}

export async function getGalleryPageContent() {
  return await client.fetch(`{
    "gallerySections": *[_type == "gallerySection"] | order(_createdAt desc){
      _id,
      title,
      images[]{
        "src": src.asset->url,
        alt
      }
    }
  }`);
}

export async function getContactPageContent() {
  return await client.fetch(`{
    "contactDetails": *[_type == "contactSection"][0]{
      _id,
      contactDetails{
        contactNumber,
        email,
        location,
        openingHours
      },
    }
  }`);
}
