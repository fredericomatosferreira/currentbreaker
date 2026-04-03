/**
 * ========================================
 * SITE CONFIGURATION
 * ========================================
 * Update this file to change all content on the site.
 * Chart data: add new monthly entries as { month: "May", users: 123 }
 */

export const siteConfig = {
  companyName: "Against the Current",
  tagline: "Two operators. Real problems. Shipped fast.",
  location: "The Netherlands",
  totalUsers: 35, // Update this with your total user count across all products
  bio: "A Product Manager and a VP of Operations building tools they actually need.",
};

export const founders = [
  {
    name: "Wais",
    photo: "/photos/wais.png",
    linkedin: "https://www.linkedin.com/in/waispirzad/",
  },
  {
    name: "Fred",
    photo: "/photos/fred.png",
    linkedin: "https://www.linkedin.com/in/frederico-matos-ferreira/?locale=en",
  },
];

export const products = [
  {
    name: "Zanbur",
    url: "https://zanbur.io",
    logo: "/logos/zanbur.png", // Place your logo at public/logos/zanbur.png
    description: "Build clean dashboards for your reports.",
    accent: "#e8793a", // Warm orange
    accentLight: "rgba(232, 121, 58, 0.1)",
    chartColor: "#e8793a",
    data: [
      { month: "Mar", users: 0 },
      { month: "Apr", users: 23 },
      // Add more months: { month: "May", users: 100 }, etc.
    ],
  },
  {
    name: "Roadwave",
    url: "https://roadwave.xyz",
    logo: "/logos/roadwave.png", // Place your logo at public/logos/roadwave.png
    description: "Live roadmaps that embed anywhere.",
    accent: "#3a8ee8", // Cool blue
    accentLight: "rgba(58, 142, 232, 0.1)",
    chartColor: "#3a8ee8",
    data: [
      { month: "Mar", users: 0 },
      { month: "Apr", users: 12 },
      // Add more months: { month: "May", users: 50 }, etc.
    ],
  },
];
