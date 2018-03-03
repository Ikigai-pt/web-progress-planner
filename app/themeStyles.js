const colors = {
  default: {
    error: '#EB5757',
    primary: '#F2C94C',
    primaryDark: '#bc9914',
    primaryLight: '#fffc7d',
    secondary: '#3D3D3D',
    secondaryDark: '#272727',
    secondaryLight: '#7b7b7b',
    primaryBackground: '#f7f7f7',
    pText: '#000000',
    sText: '#ffffff',
    ok: '#27AE60',
    danger: '#EB5757',
    social: '#9B51E0',
  },
};

const theme = {
  rickshaw: {
    components: {
      header: {
        bg: colors.default.secondaryDark,
      },
    },
    colors: colors.default,
  },
};

export { theme, colors };
