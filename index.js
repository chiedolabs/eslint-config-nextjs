module.exports = {
  extends: '@chiedolabs/eslint-config-react',
  rules: {
    // Next requires empty a tags in thier Link component
    'jsx-a11y/anchor-is-valid': [
      'error', {
        'components': ['Link'],
        'specialLink': ['hrefLeft', 'hrefRight'],
        'aspects': ['invalidHref', 'preferButton']
      }
    ],
  },
};
