export const jobs = [
  {
    slug: "personal-support-worker",
    title: "Personal Support Worker",
    employer: "Creativa Care",
    type: "Full-time",
    workArrangement: "On-site",
    location: "Kingston, Ontario",
    summary: "Provide compassionate, non-medical support to clients at home, helping them maintain comfort, safety, independence and dignity.",
    companyDescription: "Creativa Care is a non-medical home care agency serving Kingston, Ontario and surrounding areas. We provide personalized in-home support and companionship for seniors and individuals who need assistance with daily living. Our services include personal care, companionship, light housekeeping, respite care, and support with everyday routines. We are committed to helping every client maintain independence, dignity, and comfort at home through compassionate, professional, and reliable care.",
    roleDescription: "The Personal Support Worker at Creativa Care provides direct non-medical support to clients in their homes, ensuring comfort, safety, and dignity in daily living. This full-time, on-site role is based in Kingston, ON, and includes assisting clients with personal care, mobility, light housekeeping, meal preparation, and support with daily routines. The Personal Support Worker offers companionship, engages clients in meaningful activities, and accompanies them to appointments as needed. Responsibilities also include monitoring changes in clients’ well-being, documenting care provided, and communicating observations to supervisors or family members in a clear, respectful manner. The role requires working collaboratively with the Creativa Care team to maintain high standards of person-centered care and uphold organizational values.",
    responsibilities: [
      "Assist clients with personal care, mobility, and daily routines while maintaining their comfort, safety, and dignity.",
      "Provide light housekeeping and meal preparation.",
      "Offer companionship and engage clients in meaningful activities.",
      "Accompany clients to appointments as needed.",
      "Monitor changes in clients’ well-being and report observations to supervisors or family members.",
      "Document care provided clearly and accurately.",
      "Work collaboratively with the Creativa Care team and uphold person-centered care standards."
    ],
    qualifications: [
      "Experience as a Support Worker or Personal Support Worker, with knowledge of home care practices and person-centered support.",
      "Strong interpersonal skills and communication abilities to build trust, provide companionship, and interact effectively with clients, families, and team members.",
      "Understanding of safeguarding principles, including client safety, confidentiality, and adherence to professional and ethical care standards.",
      "Ability to use basic technical support tools and digital platforms (e.g., electronic schedules, care documentation systems, mobile apps) to record and access client information.",
      "Relevant certification or training in Personal Support Work, Health Care Aide, or equivalent; current CPR/First Aid is an asset.",
      "Knowledge of safe mobility assistance, infection prevention, and proper body mechanics in a home care setting.",
      "Reliability, patience, cultural sensitivity, and the ability to work independently in clients’ homes.",
      "A valid driver’s license and access to reliable transportation for client visits within Kingston and surrounding areas is an asset."
    ],
    email: "info@creativacare.ca"
  }
];

export function getJobBySlug(slug) {
  return jobs.find((job) => job.slug === slug);
}
