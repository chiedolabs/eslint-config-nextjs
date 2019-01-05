module.exports = {
  extends: 'eslint-config-chiedo-labs-react',
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
