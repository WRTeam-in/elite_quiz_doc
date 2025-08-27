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
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Admin Panel',
      items: [
        'admin/overview',
        'admin/installation',
        'admin/configuration',
        'admin/settings',
        'admin/system-language',
        'admin/bulk-imports',
      ],
    },
    {
      type: 'doc',
      id: 'common_firebase_config',
      label: 'Common Firebase Configuration',
    },
    {
      type: 'category',
      label: 'Website',
      items: [
        'web/setup-nodejs',
        'web/web-setup-overview',
        'web/run-project',
        'web/firebase-integration',
        'web/firebase-auth',
        'web/cloud-firestore',
        'web/web-customization',
        'web/languages',
        'web/deploy',
      ],
    },
    {
      type: 'category',
      label: 'Mobile App',
      items: [
        'mobile/overview',
        'mobile/setup',
        'mobile/configuration',
        'mobile/keystore',
        'mobile/firebase',
        'mobile/customization',
        'mobile/monetization',
        'mobile/deployment',
        'mobile/update',
        'mobile/faq',
      ],
    },
    {
      type: 'category',
      label: 'Changelogs',
      items: ['changelog/web', 'changelog/app'],
    },
    {
      type: 'doc',
      id: 'support',
      label: 'Contact Support',
    },
    {
      type: 'doc',
      id: 'rating',
      label: 'Feedback & Suggestions',
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },
  ],
};
