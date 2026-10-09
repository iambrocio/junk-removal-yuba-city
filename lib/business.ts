// Single source of truth for business details. Components read from here only.
// Leave phone/email empty until they're assigned; the UI hides them when blank.

export const business = {
  name: "Junk Removal Yuba City",
  shortName: "JRYC",
  url: "https://junkremovalyubacity.com",
  city: "Yuba City",
  state: "CA",
  region: "Sutter County",
  serviceArea: ["Yuba City"],
  phone: "",
  phoneHref: "",
  email: "",
  hours: "Monday–Saturday, 7am–6pm",
  summary:
    "Local junk hauling for Yuba City homes, rentals, and businesses. Tell us what has to go and we load it, haul it, and leave the space swept.",
} as const;

export const hasPhone = business.phone.length > 0;

export const promises = [
  "One flat price before anything is loaded",
  "A two-person crew does all of the lifting",
  "Usable items donated, metal and e-waste recycled",
  "We sweep up before we leave",
];
