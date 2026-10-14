export type Partner = {
  name: string;
  url: string;
  category: string;
  // Exact link text. Keep it geo-targeted, e.g. "Junk Removal in Honolulu".
  anchor: string;
  blurb: string;
  // Set for paid, reciprocal, or network links.
  nofollow?: boolean;
};

export const partners: Partner[] = [
  {
    name: "Any Kine Junk",
    url: "https://junkremovaloahu.com/",
    category: "Junk Removal in Other Areas",
    anchor: "Junk Removal in Honolulu & Oahu",
    blurb:
      "Any Kine Junk handles junk removal across Honolulu and the rest of Oahu. If you or your family are clearing out a place on the island, they're who we send you to.",
  },
];

export const partnerGroups = () => {
  const groups = new Map<string, Partner[]>();
  for (const p of partners) {
    groups.set(p.category, [...(groups.get(p.category) ?? []), p]);
  }
  return [...groups.entries()];
};
