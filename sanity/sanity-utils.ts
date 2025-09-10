import { createClient } from "@sanity/client";
import groq from "groq";
import clientConfig from "./config/client-config";

export function getWorkHighlights() {
  const query = groq`*[_type == "workhighlights" ]{
    _id,
    _createdAt,
    title,
    description,
    "image": image.asset->url,
    "slug": slug.current
    }`;
  return createClient(clientConfig).fetch(query);
}

export async function getTestimonials() {
  const query = groq`*[_type == "testimonials"]{
    _id,
    _createdAt,
    name,
    testimonial
  }`;
  return createClient(clientConfig).fetch(query);
}

export function getWhatWeDo() {
  const query = groq`*[_type == "whatwedo"]{
    _id,
    _createdAt,
    title, 
    description, 
    "image": image.asset->url 
    }`;
  return createClient(clientConfig).fetch(query);
}

export function getLegacy() {
  const query = groq`*[_type == "legacy"]{
    _id,
    _createdAt,
    title,
    text,
    alt,
    "image": image.asset->url
    }`;
  return createClient(clientConfig).fetch(query);
}

export function getNotesFromLovers() {
  const query = groq`*[_type == "notesfromlovers"]{
    _id,
    _createdAt,
    text,
    bgColor,
    textColor
    }`;
  return createClient(clientConfig).fetch(query);
}

export function getGalleryContent() {
  const query = groq`*[_type == "gallery"]{
  _id,
  _createdAt,
  title,
  images[]{
    "src": src.asset->url,
    alt
  }

  }`;
  return createClient(clientConfig).fetch(query);
}

export function getSeoData(page: string) {
  const query = groq`*[_type == "seo" && page == $page][0]{
  _id, 
  _createdAt,
  page,
  title,
  description,
  }`;

  return createClient(clientConfig).fetch(query, { page });
}

export async function getSocialLinks() {
  const query = groq`
    *[_type == "socialMediaPage"][0]{
      links
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data?.links;
}

// home contents

export async function getHomeHeroContent() {
  const query = groq`
    *[_type == "home"][0]{
      "hero": sections[_type == "heroSection"][0]{
        title,
        words,
        cards[] {
          text,
          "image": image.asset->url,
          alt
        }
      }
    }
  `;

  const data = await createClient(clientConfig).fetch(query);
  return data?.hero;
}

export async function getBrandImages() {
  const query = groq`
    *[_type == "home"][0]{
    "brands": sections[_type == "brands"][0]{
      items[]{
        "src": image.asset->url,
        alt
      }
    }
}
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

export async function getFeaturesContent() {
  const query = groq`
    *[_type == "home"][0]{
      "trainEquipSupport": sections[_type == "trainEquipSupport"][0]{
        title,
        "image": image.asset->url,
        items[] {
          title,
          text,
          
        }
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

export async function getVisionContent() {
  const query = groq`
    *[_type == "home"][0]{
      "ourVision": sections[_type == "ourVision"][0]{
        title,
        "image": image.asset->url,
        description
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

export async function getsuccessStoryContent() {
  const query = groq`
    *[_type == "home"][0]{
      "successStory": sections[_type == "successStory"][0]{
        title,
        text,
        metrics[]{
          "icon": icon.asset->url,
           number,
           label
        }
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

export async function getWorkHighlightsContent() {
  const query = groq`
    *[_type == "home"][0]{
      "workHighlights": sections[_type == "workHighlights"][0]{
        items[] {
          title,
          "image": image.asset->url,
          description
        }
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

export async function getTestimonialsContent() {
  const query = groq`
    *[_type == "home"][0]{
      "testimonials": sections[_type == "testimonials"][0]{
        items[] {
          quote,
          author
        }
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

// about page contents

export async function getValuePropositionContent() {
  const query = groq`
    *[_type == "about"][0]{
      "valueProposition": sections[_type == "valuePropositionSection"][0]{
        items[] {
          title,
          description,
          "icon": icon.asset->url
        }
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

export async function getWhoWeAreContent() {
  const query = groq`
    *[_type == "about"][0]{
      "whoWeAre": sections[_type == "whoWeAre"][0]{
        title,
        "image": image.asset->url,
        paragraphs
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

export async function getCoreValuesContent() {
  const query = groq`
    *[_type == "about"][0]{
      "coreValues": sections[_type == "coreValuesSection"][0]{
        values[] {
          title,
          number,
          "icon": icon.asset->url
        }
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

export async function getWhatWeDoContent() {
  const query = groq`
    *[_type == "about"][0]{
      "whatWeDo": sections[_type == "whatWeDoSection"][0]{
        items[] {
          title,
          description,
          "image": image.asset->url
        }
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

export async function getPfoVisionContent() {
  const query = groq`
    *[_type == "about"][0]{
      "ourVision": sections[_type == "ourVision"][0]{
        title,
        "image": image.asset->url,
        paragraphs
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

export async function getFaqContent() {
  const query = groq`
    *[_type == "about"][0]{
      "faq": sections[_type == "faqSection"][0]{
        _id,
        "image": image.asset->url,
        items[] {
          _key,
          question,
          answer
        }
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

// Workshop page contents

export async function getShapingLivesContent() {
  const query = groq`
    *[_type == "workshop"][0]{
      "shapingLives": sections[_type == "shapingLives"][0]{
        title,
        description
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

export async function getEmpoweringCreativesContent() {
  const query = groq`
    *[_type == "workshop"][0]{
      "empoweringCreatives": sections[_type == "empoweringCreativesSection"][0]{
        title,
        description,
        "image": image.asset->url,
        "icon": icon.asset->url
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

export async function getWorkshopImagesContent() {
  const query = groq`
    *[_type == "workshop"][0]{
      "workshopImages": sections[_type == "workshopSection"][0]{
        description,
        images[] {
          "src": src.asset->url,
          alt,
        }
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

// gallery page contents

export async function getGalleryImages() {
  const query = groq`
    *[_type == "gallery"][0]{
      "galleryImages": sections[_type == "gallerySection"]{
        title,
        images[] {
          "src": src.asset->url,
          alt
        }
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

// pfo legacy page content

export async function getLegacyContent() {
  const query = groq`
    *[_type == "pfoLegacy"][0]{
      "legacy": sections[_type == "legacy"]{
        title,
        text,
        alt,
        "image": image.asset->url
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

export async function getNotesFromLoversContent() {
  const query = groq`
    *[_type == "pfoLegacy"][0]{
      "notesFromLovers": sections[_type == "notesFromLovers"][0]{
        notes[] {
          text,
          bgColor,
          textColor
        }
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

// contact details content

export async function getContactDetailsContent() {
  const query = groq`
   *[_type == "contact"][0]{
      contactDetails {
      contactNumber,
      email,
      location,
      openingHours
  }
}
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}

// seo fetch

export async function getPageSeo(pageType: string) {
  const query = groq`
    *[_type == $pageType][0]{
      seo {
        title,
        description
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query, { pageType });
  return data?.seo;
}

// brochure fetch function

export async function getBrochureFile() {
  const query = groq`
    *[_type == "about"][0]{
      brochure {
        description,
        file {
          asset->{
            url
          }
        }
      }
    }
  `;
  const data = await createClient(clientConfig).fetch(query);
  return data?.brochure;
}
