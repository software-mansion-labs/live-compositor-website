import { COLORS } from '../colors';

export const DARK_THEME = {
  colors: {
    mainBackground: COLORS.black100,
    nav: {
      icon: COLORS.white100,
      searchContent: COLORS.white100,
      searchBorder: COLORS.white25,
    },
    hero: {
      title: COLORS.white100,
      subtitle: COLORS.secondary60,
      authorLabel: COLORS.white100,
      docsButton: COLORS.white100,
      docsGradientFrom: COLORS.secondary100,
      docsGradientTo: COLORS.primary100,
    },
    explanation: {
      header: COLORS.white100,
      text: COLORS.white100,
      background: COLORS.black100,
      borderFrom: COLORS.secondary100,
      borderTo: COLORS.primary100,
    },
    useCases: {
      header: COLORS.white100,
      subHeader: COLORS.white100,
      background: COLORS.black100,
      borderFrom: COLORS.secondary100,
      borderTo: COLORS.primary100,
      borderInactive: COLORS.white25,
    },
    usage: {
      header: COLORS.white100,
      subHeader: COLORS.secondary60,
      hoverBackground: COLORS.primary15,
    },
    capabilities: {
      header: COLORS.white100,
      subHeader: COLORS.white100,
      border: COLORS.white25,
    },
    form: {
      header: COLORS.white100,
      border: COLORS.white25,
      label: COLORS.white100,
    },
    footer: {
      logo: COLORS.white100,
      copyright: COLORS.white100,
    },
  },
} as const;
