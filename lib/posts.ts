export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string;
  excerpt: string;
  sections: { h: string; p: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "junk-removal-pricing",
    title: "How Junk Removal Pricing Works",
    metaTitle: "How Junk Removal Pricing Works (and What Changes It)",
    description:
      "What goes into a junk removal price in Yuba City: truck space, item type, labor, and disposal. Learn what changes the cost and how to keep it down.",
    date: "2026-10-09",
    excerpt:
      "Truck space, item type, and access all affect what you pay. Here's how a junk removal quote is put together.",
    sections: [
      {
        h: "You pay for space in the truck",
        p: [
          "Most junk removal in Yuba City is priced by volume, meaning how much of the truck your items take up. A single recliner takes a small slice. A full garage might fill most of the truck. The more space your junk needs, the higher the price.",
          "Volume pricing is easy to follow because you can see it. When the crew arrives, they look at the pile, estimate how much room it needs, and give you a number before anything is loaded.",
        ],
      },
      {
        h: "What can raise the price",
        p: [
          "Some items cost more to get rid of because of how they're disposed of. Mattresses, refrigerators, tires, and electronics often carry an extra charge because recycling them costs more than dropping off household junk.",
          "Very heavy materials like concrete, dirt, roofing, or tile can also add to the cost, since transfer stations charge by weight. Hard access, like hauling from a third-floor apartment or a cramped crawl space, adds labor time too.",
        ],
      },
      {
        h: "How to keep your cost down",
        p: [
          "Group everything into one pickup instead of booking several small ones, since each trip has a base cost. If you can, move items to the garage or driveway beforehand so loading goes faster.",
          "Pull out anything you can sell or give to a neighbor first. And be clear about heavy or unusual items when you ask for a quote so there are no surprises on pickup day.",
        ],
      },
      {
        h: "Get a real number",
        p: [
          "The fastest way to know your price is to send a short list or a few photos. We'll give you a flat price range, then confirm it on site before we start.",
        ],
      },
    ],
  },
  {
    slug: "garage-cleanout-checklist",
    title: "A Garage Cleanout Checklist for Homeowners",
    metaTitle: "Garage Cleanout Checklist: Clear It Out in a Weekend",
    description:
      "A simple garage cleanout checklist for Yuba City homes: when to start, how to sort, what can't go in the trash, and how to finish in one weekend.",
    date: "2026-10-09",
    excerpt:
      "A step-by-step plan for clearing out a packed garage, timed around Yuba City's heat and local disposal rules.",
    sections: [
      {
        h: "Pick the right time",
        p: [
          "Yuba City summers make garage work brutal by midday. Plan your cleanout for spring or fall, or start early in the morning and stop before the afternoon heat. Give yourself a full weekend for a two-car garage that hasn't been cleaned in years.",
        ],
      },
      {
        h: "Sort into four piles",
        p: [
          "Set up four zones on the driveway: keep, donate, sell, and haul. Work one wall or shelf at a time instead of jumping around. If you haven't used something in two years and it isn't sentimental, it probably belongs in the donate or haul pile.",
          "Be honest about broken things. A treadmill that hasn't run since 2019 or a lawn mower that won't start is junk, not a project.",
        ],
      },
      {
        h: "Set aside hazardous items",
        p: [
          "Garages collect things that can't go in the trash or in a junk truck: old paint, motor oil, pesticides, pool chemicals, propane tanks, and car batteries. Gather them in one spot and take them to a household hazardous waste drop-off.",
        ],
      },
      {
        h: "Clear it out in one trip",
        p: [
          "Once everything is sorted, schedule a single pickup for the haul pile and any bulky donate items. Then sweep the floor, wipe down the shelves, and put the keep pile back in labeled bins. You'll finally have room to park inside again.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
