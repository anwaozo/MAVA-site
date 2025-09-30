import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .child(
          S.list()
            .title("Home Page Sections")
            .items([
              S.documentTypeListItem("heroSection").title("Hero Section"),
              S.documentTypeListItem("brands").title("Brands Logo Section"),
              S.documentTypeListItem("trainEquipSupport").title(
                "Train, Equip & Support Section"
              ),
              S.documentTypeListItem("ourVision").title("Our Vision Section"),
              S.documentTypeListItem("workHighlights").title("Work Highlights"),
              S.documentTypeListItem("successStory").title(
                "Success Story Section"
              ),
              S.documentTypeListItem("testimonial").title("Testimonials"),
              S.documentTypeListItem("seo").title("SEO"),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("About Page")
        .child(
          S.list()
            .title("About Page Content")
            .items([
              S.documentTypeListItem("servicesSection").title("Services"),
              S.documentTypeListItem("valuePropositionSection").title(
                "Value Propositions"
              ),
              S.documentTypeListItem("whoWeAre").title("Who We Are"),
              S.documentTypeListItem("coreValuesSection").title("Core Values"),
              S.documentTypeListItem("whatWeDoSection").title("What We Do"),
              S.documentTypeListItem("pfoVision").title("PFO's Vision"),
              S.documentTypeListItem("faqSection").title("FAQs"),
              S.documentTypeListItem("aboutSeo").title("SEO"),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("PFO's Legacy Page")
        .child(
          S.list()
            .title("Page Contents")
            .items([
              S.documentTypeListItem("pfoLegacySlide").title("Legacy Section"),
              S.documentTypeListItem("notesFromLovers").title(
                "Notes From Lovers"
              ),
              S.documentTypeListItem("legacySeo").title("SEO"),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Workshop Page")
        .child(
          S.list()
            .title("Workshop Contents")
            .items([
              S.documentTypeListItem("shapingLives").title(
                "Shaping Lives Section"
              ),
              S.documentTypeListItem("empoweringCreativesSection").title(
                "Empowering Creatives Section"
              ),
              S.documentTypeListItem("workshopSection").title(
                "Workshop Gallery"
              ),
              S.documentTypeListItem("workshopSeo").title("SEO"),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Gallery Page")
        .child(
          S.list()
            .title("Gallery")
            .items([
              S.documentTypeListItem("gallerySection").title("Gallery Section"),
              S.documentTypeListItem("gallerySeo").title("SEO"),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Contact Us Page")
        .child(
          S.list()
            .title("Page Contents")
            .items([
              S.documentTypeListItem("contactSection").title("Contact Details"),
              S.documentTypeListItem("contactSeo").title("SEO"),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Social Media Links")
        .child(
          S.list()
            .title("Socials")
            .items([
              S.documentTypeListItem("socialMediaLinks").title(
                "Social Media Accounts"
              ),
            ])
        ),
      S.divider(),
    ]);
