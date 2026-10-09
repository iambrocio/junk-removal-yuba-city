import type { GlyphName } from "@/components/glyph";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  glyph: GlyphName;
  card: string;
  metaTitle: string;
  description: string;
  lead: string;
  intro: string[];
  takes: string[];
  steps: { t: string; b: string }[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    glyph: "sofa",
    card: "Couches, recliners, dressers, bed frames, and patio sets carried out from any room.",
    metaTitle: "Furniture Removal | Couch & Furniture Pickup Service",
    description:
      "Furniture removal in Yuba City, CA. We carry out couches, sectionals, dressers, and bed frames, then donate or recycle what we can. Flat price up front.",
    lead: "Old couch, broken recliner, a whole bedroom set? We carry it out of any room and haul it off the same trip.",
    intro: [
      "Getting a sectional through a hallway or down a flight of stairs is the hardest part of replacing furniture. Our crew handles the lifting, protects door frames and floors on the way out, and loads everything straight onto the truck.",
      "Pieces in decent shape go to local donation centers around Yuba City. Wood, metal frames, and other materials are separated for recycling, and only what's left goes to the transfer station.",
    ],
    takes: [
      "Couches, sectionals, and sleeper sofas",
      "Recliners and armchairs",
      "Dressers, nightstands, and bed frames",
      "Dining tables and chairs",
      "Desks, bookshelves, and entertainment centers",
      "Patio and outdoor furniture",
    ],
    steps: [
      {
        t: "Tell us what's going",
        b: "Send a short list or a few photos through the quote form. We'll reply with a flat price range.",
      },
      {
        t: "We confirm on site",
        b: "The crew looks at the pieces, confirms the price, and only starts once you say go.",
      },
      {
        t: "Carried out and gone",
        b: "We take it out of the room, load the truck, and sweep up where it was sitting.",
      },
    ],
    faqs: [
      {
        q: "Do I need to move furniture to the curb first?",
        a: "No. We pick it up wherever it is: upstairs bedrooms, back patios, garages, or storage sheds.",
      },
      {
        q: "Can you take apart large pieces?",
        a: "Yes. If a sectional, bed frame, or desk won't fit through a doorway, we'll disassemble it on site.",
      },
      {
        q: "What happens to furniture you haul away?",
        a: "Usable pieces are donated locally when charities can accept them. Everything else is sorted for recycling before disposal.",
      },
    ],
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    glyph: "fridge",
    card: "Fridges, washers, dryers, stoves, and water heaters disconnected and recycled.",
    metaTitle: "Appliance Removal | Old Appliance Haul Away",
    description:
      "Appliance removal in Yuba City, CA. Refrigerators, washers, dryers, ovens, and water heaters hauled away and taken to proper recycling. Get a flat quote.",
    lead: "New fridge arriving and the old one still in the kitchen? We'll haul out the old appliance and get it to the right recycler.",
    intro: [
      "Appliances are heavy, awkward, and easy to scrape against walls and floors. We use dollies and straps to move them out safely, whether it's a side-by-side fridge in the kitchen or a washer stacked in a tight laundry closet.",
      "Most appliances are made largely of steel, so nearly all of them can be recycled. Refrigerators, freezers, and AC units go to facilities that handle refrigerant the way California requires, so nothing is dumped.",
    ],
    takes: [
      "Refrigerators and freezers",
      "Washers and dryers",
      "Stoves, ovens, and range hoods",
      "Dishwashers and microwaves",
      "Water heaters",
      "Window and portable AC units",
    ],
    steps: [
      {
        t: "Disconnect if you can",
        b: "Unplug the appliance and shut off water or gas lines. If you're not comfortable doing that, let us know when you book.",
      },
      {
        t: "We move it out",
        b: "The crew wheels it out with care for your floors, door frames, and stairs.",
      },
      {
        t: "Sent to recycling",
        b: "Metal, wiring, and refrigerant are handled by recyclers instead of ending up in the landfill.",
      },
    ],
    faqs: [
      {
        q: "Will you take an appliance that doesn't work?",
        a: "Yes. Working or broken, we haul it. Working units in good shape may be donated instead of recycled.",
      },
      {
        q: "Do you disconnect gas appliances?",
        a: "Gas lines should be shut off and capped by you or a licensed professional before pickup. We'll take it from there.",
      },
      {
        q: "Can you take several appliances at once?",
        a: "Absolutely. Kitchen remodels often mean a fridge, range, dishwasher, and microwave all at once, and one trip covers it.",
      },
    ],
  },
  {
    slug: "mattress-disposal",
    name: "Mattress Disposal",
    glyph: "bed",
    card: "Mattresses and box springs of any size picked up and sent for recycling.",
    metaTitle: "Mattress Disposal | Mattress Pickup & Recycling",
    description:
      "Mattress disposal in Yuba City, CA. We pick up mattresses and box springs of any size from any room and send them for recycling. Quick, flat-rate quotes.",
    lead: "Upgraded your bed? We'll carry the old mattress and box spring out of the bedroom and make sure they get recycled.",
    intro: [
      "Mattresses are bulky, floppy, and a pain to fit in a pickup bed, and most curbside trash service won't take them. We handle the carry-out so you don't have to wrestle a king-size mattress down the stairs.",
      "California runs a statewide mattress recycling program, and that's where your old mattress goes. The steel springs, foam, and wood frames are broken down and reused instead of buried in a landfill.",
    ],
    takes: [
      "Twin, full, queen, and king mattresses",
      "Box springs and foundations",
      "Memory foam and hybrid mattresses",
      "Futon mattresses and toppers",
      "Crib and toddler mattresses",
      "Bed frames and headboards",
    ],
    steps: [
      {
        t: "Book a pickup",
        b: "Tell us how many mattresses and box springs, and where they are in the house.",
      },
      {
        t: "We carry them out",
        b: "The crew bags the mattress if needed and carries it out without scuffing walls.",
      },
      {
        t: "Recycled, not dumped",
        b: "Mattresses go to recycling, where springs, foam, and fabric are separated and reused.",
      },
    ],
    faqs: [
      {
        q: "Can you take a mattress with stains or bed bugs?",
        a: "We take stained mattresses. For bed bugs, tell us ahead of time so we can wrap it before it leaves the room.",
      },
      {
        q: "Will you take the bed frame too?",
        a: "Yes. We can break down the frame and headboard and haul them in the same trip.",
      },
      {
        q: "Can I add other items to a mattress pickup?",
        a: "Sure. Many customers add a dresser, nightstands, or a few bags of clutter while we're there.",
      },
    ],
  },
  {
    slug: "garage-cleanouts",
    name: "Garage Cleanouts",
    glyph: "warehouse",
    card: "Years of boxes, old tools, and clutter cleared so you can park inside again.",
    metaTitle: "Garage Cleanouts | Garage Junk Removal Service",
    description:
      "Garage cleanouts in Yuba City, CA. We clear out boxes, old tools, broken equipment, and clutter so you can park inside again. One flat price, we do the lifting.",
    lead: "Can't park in the garage anymore? We'll clear out years of boxes, old equipment, and clutter in a single visit.",
    intro: [
      "Garages in Yuba City take a beating. Summer heat makes them miserable to work in, and they end up storing everything that doesn't fit in the house. We do the hauling so you don't spend a 100-degree Saturday sorting junk.",
      "You decide what stays. We pull out everything you want gone, load it, and leave the floor swept so you can start fresh with shelving or simply get your car back inside.",
    ],
    takes: [
      "Boxes, bins, and general clutter",
      "Old tools, workbenches, and shelving",
      "Bikes, exercise equipment, and toys",
      "Lawn mowers and yard equipment (drained)",
      "Old tires and car parts",
      "Broken furniture and appliances",
    ],
    steps: [
      {
        t: "Mark what stays",
        b: "Set aside or tag anything you're keeping. Everything else is fair game.",
      },
      {
        t: "We clear it out",
        b: "The crew loads the truck, donating usable items and separating metal for recycling.",
      },
      {
        t: "Floor swept clean",
        b: "We sweep up when we're done, so the garage is ready for whatever you want next.",
      },
    ],
    faqs: [
      {
        q: "Do I need to sort everything before you arrive?",
        a: "No. Just point out what you're keeping. We can sort the rest on site.",
      },
      {
        q: "Will you take paint cans and chemicals?",
        a: "We can't haul liquid paint, oil, pesticides, or other hazardous materials. Those need to go to a household hazardous waste drop-off.",
      },
      {
        q: "How long does a garage cleanout take?",
        a: "Most single or two-car garages are cleared in a few hours, depending on how full they are.",
      },
    ],
  },
  {
    slug: "estate-cleanouts",
    name: "Estate Cleanouts",
    glyph: "home",
    card: "Full-house clearing handled with patience, care, and respect for the family.",
    metaTitle: "Estate Cleanouts | Full House Cleanout Service",
    description:
      "Estate cleanouts in Yuba City, CA. Respectful full-house clearing for families, executors, and realtors. We work around keepsakes and donate what we can.",
    lead: "Clearing out a loved one's home is hard enough. We'll handle the heavy part carefully and at a pace that works for your family.",
    intro: [
      "An estate cleanout usually means a full house of furniture, closets, and decades of belongings. We work room by room, set aside anything that looks personal or valuable, and check with you before it leaves.",
      "We work with families, executors, and realtors getting a Yuba City home ready to sell or rent. Usable furniture and household goods are donated, and the house is left empty and broom-clean.",
    ],
    takes: [
      "Furniture throughout the house",
      "Clothing, linens, and closet contents",
      "Kitchenware and small appliances",
      "Garage, shed, and attic contents",
      "Large appliances",
      "Yard debris and outdoor items",
    ],
    steps: [
      {
        t: "Walk-through first",
        b: "We go through the home with you or your representative to mark what stays.",
      },
      {
        t: "Room-by-room clearing",
        b: "The crew works through the house carefully, setting aside photos, papers, and anything that looks meaningful.",
      },
      {
        t: "Ready for the next step",
        b: "The house is left empty and swept, ready for cleaning, listing, or a new tenant.",
      },
    ],
    faqs: [
      {
        q: "Can you work with a realtor or executor instead of family?",
        a: "Yes. We regularly coordinate access and timing with whoever is managing the property.",
      },
      {
        q: "What if we find something important during the cleanout?",
        a: "Papers, photos, jewelry, and anything that looks personal are set aside for you to review. Nothing like that gets thrown out.",
      },
      {
        q: "Can the cleanout happen over more than one day?",
        a: "Yes. Larger homes or families who need time to sort can split the work across several visits.",
      },
    ],
  },
  {
    slug: "yard-waste-removal",
    name: "Yard Waste Removal",
    glyph: "leaf",
    card: "Branches, brush piles, old fencing, and storm debris hauled off the property.",
    metaTitle: "Yard Waste Removal | Brush & Debris Hauling",
    description:
      "Yard waste removal in Yuba City, CA. Branches, brush, stumps, old fencing, and storm debris hauled away. Too much for the green bin? We'll take it.",
    lead: "Too much for the green waste bin? We'll haul off brush piles, cut branches, old fencing, and storm debris.",
    intro: [
      "Pruning fruit trees, clearing an overgrown lot, or cleaning up after a windstorm can leave a pile far bigger than one curbside bin. We load it all onto the truck in one trip and rake up the leftovers.",
      "Green waste is taken to composting and mulching facilities whenever possible. Old fencing, landscape timbers, and other materials are sorted and sent for recycling or disposal.",
    ],
    takes: [
      "Branches and tree trimmings",
      "Brush and overgrowth",
      "Leaves, grass, and garden waste",
      "Old fencing and lattice",
      "Landscape timbers and edging",
      "Storm debris",
    ],
    steps: [
      {
        t: "Pile it or leave it",
        b: "Pile the debris if you can, or we'll gather it from around the yard.",
      },
      {
        t: "We load the truck",
        b: "The crew loads everything, including long branches and fence panels.",
      },
      {
        t: "Raked and finished",
        b: "We rake up the loose bits so the yard looks finished when we leave.",
      },
    ],
    faqs: [
      {
        q: "Do you cut down trees?",
        a: "No. We haul debris after cutting is done. If you need a tree taken down, have a tree service do the cutting and we'll handle the cleanup.",
      },
      {
        q: "Will you take dirt, rocks, or concrete?",
        a: "Small amounts are fine. Large amounts of soil or concrete are very heavy, so tell us when you request a quote.",
      },
      {
        q: "Can you remove an old fence?",
        a: "We haul fence panels and posts once they're taken down. Ask about tear-out when you book.",
      },
    ],
  },
  {
    slug: "construction-debris-removal",
    name: "Construction Debris Removal",
    glyph: "hammer",
    card: "Drywall, lumber, flooring, and fixtures cleared from remodels and job sites.",
    metaTitle: "Construction Debris Removal | Job Site Cleanup",
    description:
      "Construction debris removal in Yuba City, CA. Drywall, lumber, flooring, cabinets, and fixtures hauled from remodels and job sites. A fast alternative to a dumpster.",
    lead: "Remodel done and the debris is piling up? We'll haul off drywall, lumber, flooring, and old fixtures, with no dumpster sitting in the driveway.",
    intro: [
      "Renting a dumpster means waiting for delivery, giving up the driveway for a week, and loading it yourself. We show up, load the debris, and leave the same day, so it's a good fit for homeowners and contractors working in Yuba City.",
      "Wood, metal, and other materials are separated for recycling where we can. We're happy to come back for repeat pickups as a project moves through each phase.",
    ],
    takes: [
      "Drywall and plaster",
      "Lumber and framing scraps",
      "Flooring, carpet, and tile",
      "Cabinets and countertops",
      "Toilets, sinks, and tubs",
      "Doors, windows, and trim",
    ],
    steps: [
      {
        t: "Describe the job",
        b: "Tell us what kind of debris you have and roughly how much. Photos help.",
      },
      {
        t: "We load it all",
        b: "The crew carries debris out from the work area and loads the truck.",
      },
      {
        t: "Site cleared",
        b: "We sweep the area so work can continue or the space is ready for final cleaning.",
      },
    ],
    faqs: [
      {
        q: "Do you work with contractors?",
        a: "Yes. We do one-time and recurring pickups for remodelers, handymen, and property managers.",
      },
      {
        q: "Is this cheaper than renting a dumpster?",
        a: "For small to mid-size jobs it often is, because you're not paying for rental days and we do all of the loading.",
      },
      {
        q: "Do you take concrete or roofing?",
        a: "We can take limited amounts of concrete and shingles. Because they're heavy, mention them when you ask for a quote.",
      },
    ],
  },
  {
    slug: "hot-tub-removal",
    name: "Hot Tub Removal",
    glyph: "droplets",
    card: "Old spas cut down, disconnected, and removed from decks and backyards.",
    metaTitle: "Hot Tub Removal | Spa Demolition & Haul Away",
    description:
      "Hot tub removal in Yuba City, CA. We cut down old spas, haul off every piece, and leave the pad clean. Get a flat price for spa demolition and removal.",
    lead: "Old spa that hasn't run in years? We'll cut it down, haul every piece away, and leave the pad clean.",
    intro: [
      "Hot tubs weigh hundreds of pounds and rarely fit through a side gate in one piece. We cut the shell and frame into manageable sections so it can come out without damaging fences, decks, or landscaping.",
      "Once the spa is gone, we clean up the pad. The metal, wiring, and pumps get recycled, and the rest goes to disposal.",
    ],
    takes: [
      "Above-ground hot tubs and spas",
      "Swim spas",
      "Spa covers and steps",
      "Pumps, heaters, and plumbing",
      "Surrounding wood skirting",
      "Gazebos and enclosures (disassembled)",
    ],
    steps: [
      {
        t: "Drain and shut off power",
        b: "Drain the tub and turn off its breaker before we arrive. An electrician should disconnect hardwired units.",
      },
      {
        t: "We cut it down",
        b: "The crew cuts the spa into sections that fit through gates and walkways.",
      },
      {
        t: "Hauled and cleaned up",
        b: "Every piece is loaded out and the pad is swept clean.",
      },
    ],
    faqs: [
      {
        q: "Does the hot tub need to be drained first?",
        a: "Yes. A full tub weighs thousands of pounds. Drain it a day or two before the pickup.",
      },
      {
        q: "Can you get it out of a backyard with a narrow gate?",
        a: "Yes. That's why we cut it into sections. Most spas come out through a standard side gate.",
      },
      {
        q: "Will you remove the concrete pad too?",
        a: "We focus on the spa itself. Ask about the pad when you request a quote and we'll tell you what's possible.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
