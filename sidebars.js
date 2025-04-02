/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

export default {
  docs: [
    {
      type: "category",
      label: "Getting Started",
      items: ["introduction"],
    },
    {
      type: "category",
      label: "Admin Panel",
      items: [
        "admin/overview",
        "admin/installation",
        "admin/configuration",
        "admin/user-management",
        "admin/quiz-management",
        "admin/settings",
        "admin/api-integration",
      ],
    },
    {
      type: "category",
      label: "Website",
      items: [
        "web/installation",
        "web/setup",
        "web/api-url",
        "web/run-project",
        "web/firebase-integration",
        "web/firebase-auth",
        "web/cloud-firestore",
        "web/app-customization",
        "web/languages",
        "web/deploy",
      ],
    },
    {
      type: "category",
      label: "Mobile App",
      items: [
        "mobile/overview",
        "mobile/setup",
        "mobile/configuration",
        "mobile/firebase",
        "mobile/customization",
        "mobile/monetization",
        "mobile/deployment",
        "mobile/faq",
      ],
    },
    {
      type: "category",
      label: "Change Logs",
      items: ["changelog/index", "changelog/web", "changelog/app"],
    },
    {
      type: "doc",
      id: "support",
      label: "Support",
    },
    {
      type: "doc",
      id: "rating",
      label: "Your Feedback",
    },
    {
      type: "doc",
      id: "contactus",
      label: "Contact Us",
    },
    {
      type: "category",
      label: "Common Errors",
      items: [
        {
          type: "category",
          label: "Admin Panel",
          items: ["errors/admin"],
        },
        {
          type: "category",
          label: "Website",
          items: ["errors/web"],
        },
        {
          type: "category",
          label: "Mobile App",
          items: ["errors/mobile"],
        },
      ],
    },
  ],
};
