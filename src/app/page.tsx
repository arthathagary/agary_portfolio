import React from "react";
import { WorkspaceShell } from "@/components/WorkspaceShell";
import { PROFILE_DATA } from "@/data/portfolio";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE_DATA.fullName,
    jobTitle: PROFILE_DATA.title,
    url: PROFILE_DATA.domain,
    email: PROFILE_DATA.contact.email,
    telephone: PROFILE_DATA.contact.phone,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: PROFILE_DATA.education.institution,
    },
    sameAs: [
      PROFILE_DATA.contact.linkedinUrl,
      PROFILE_DATA.contact.githubPersonalUrl,
      PROFILE_DATA.contact.githubWorkUrl,
      PROFILE_DATA.contact.websiteUrl,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkspaceShell />
    </>
  );
}
