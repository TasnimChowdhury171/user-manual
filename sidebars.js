const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'System Administration',
      items: [
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'system-administration/configuration/widget-configuration',
           
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;