const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  GHOST: 'ghost'
};

export const getAppearance = ({ variant, theme }) => {
  const { colors } = theme;
  switch (variant) {
    case VARIANTS.PRIMARY:
      return {
        color: colors.white.base,
        backgroundColor: colors.primary.base,
        borderColor: colors.primary.base,
        hoverBackgroundColor: colors.primary.dark,
        hoverBorderColor: colors.primary.dark
      };

    case VARIANTS.SECONDARY:
      return {
        color: colors.primary.base,
        backgroundColor: colors.white.base,
        borderColor: colors.primary.base,
        hoverBackgroundColor: colors.primary.lighter,
        hoverBorderColor: colors.primary.base
      };

    case VARIANTS.SUCCESS:
      return {
        color: colors.white.base,
        backgroundColor: colors.success.base,
        borderColor: colors.success.base,
        hoverBackgroundColor: colors.success.dark,
        hoverBorderColor: colors.success.dark
      };

    case VARIANTS.DANGER:
      return {
        color: colors.white.base,
        backgroundColor: colors.danger.base,
        borderColor: colors.danger.base,
        hoverBackgroundColor: colors.danger.dark,
        hoverBorderColor: colors.danger.dark
      };

    case VARIANTS.WARNING:
      return {
        color: colors.white.base,
        backgroundColor: colors.warning.base,
        borderColor: colors.warning.base,
        hoverBackgroundColor: colors.warning.dark,
        hoverBorderColor: colors.warning.dark
      };

    case VARIANTS.GHOST:
      return {
        color: colors.primary.base,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        hoverBackgroundColor: 'transparent',
        hoverBorderColorColor: 'transparent'
      };

    default:
      return {
        color: colors.primary.base,
        backgroundColor: colors.white.base,
        borderColor: colors.primary.base,
        hoverBackgroundColor: colors.primary.lighter,
        hoverBorderColor: colors.primary.lighter
      };
  }
};