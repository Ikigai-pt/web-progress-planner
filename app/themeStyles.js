import './global-styles';
// colors go from shallowest (0) to deepest (n) layers
// NOTE: consider changing colors to use descriptive keys
const colors = {
  basic: {
    // error validation
    error: '#F2635D',
    // layers
    0: '#252839',
    1: '#677077',
    2: '#b5b5b7',
    3: '#f2b632',
    // text
    4: '#FAFAFA',
    5: '#f6ce77',
    // theme toggle
    6: '#000000',
    link: '#2ABDFF',
    linkHover: '#94DEFF',
  },
  solar: {
    // error validation
    error: '#F2635D',
    // layers
    0: '#FFFFFF',
    1: '#EEEEEE',
    2: '#E0E0E0',
    3: '#D5D5D5',
    4: '#CCCCCC',
    5: '#BABABA',
    // text
    6: '#292929',
    // theme toggle
    7: '#4D4D4D',
    8: '#000000',
    link: '#1565C0',
    linkHover: '#074994',
  },
};

const layers = {
  lunar: {
    text: {
      primary: {
        color: colors.lunar[6],
        opacity: '100%',
      },
      secondary: {
        color: colors.lunar[6],
        opacity: '70%',
      },
    },
    // tile layers from shallowest (0) to deepest (n)
    tile: {
      0: {
        bg: colors.lunar[1],
      },
      1: {
        bg: colors.lunar[2],
        line: colors.lunar[3],
      },
      3: {
        bg: colors.lunar[4],
        line: colors.lunar[5],
      },
      2: {
        bg: colors.lunar[3],
        line: colors.lunar[4],
      },
    },
  },
  solar: {
    text: {
      primary: {
        color: colors.solar[6],
        opacity: '100%',
      },
      secondary: {
        color: colors.solar[6],
        opacity: '70%',
      },
    },
    // tile layers from shallowest (0) to deepest (n)
    tile: {
      0: {
        bg: colors.solar[1],
      },
      1: {
        bg: colors.solar[2],
        line: colors.solar[3],
      },
      2: {
        bg: colors.solar[3],
        line: colors.solar[4],
      },
      3: {
        bg: colors.solar[4],
        line: colors.solar[5],
      },
    },
  },
};

const theme = {
  lunar: {
    components: {
      // NOTE: appWrapper isn't really needed here, but header is a good usecase
      // NOTE: need to make a decision on if we're okay rendering an entire component style, e.g. appWrapper
      // NOTE: or if we always want to interpolate css values without the selectors themselves
      appWrapper: {
        'background-color': layers.lunar.tile[0].bg,
        color: layers.lunar.text.primary.color,
      },
      header: {
        bg: colors.lunar[0],
        color: layers.lunar.text.primary.color,
      },
      themeToggle: {
        checkedTrackColor: colors.lunar[7],
        trackHoverColor: colors.lunar[8],
      },
    },
    layers: layers.lunar,
    colors: colors.lunar,
    inverseColors: colors.solar,
  },
  solar: {
    components: {
      appWrapper: {
        'background-color': layers.solar.tile[0].bg,
        color: layers.solar.text.primary.color,
      },
      header: {
        bg: colors.solar[2],
        color: layers.solar.text.primary.color,
      },
      themeToggle: {
        checkedTrackColor: colors.solar[7],
        trackHoverColor: colors.solar[8],
      },
    },
    layers: layers.solar,
    colors: colors.solar,
    inverseColors: colors.lunar,
  },
};

export { theme, colors, layers };
