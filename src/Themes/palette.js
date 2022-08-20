import Colors from "./ThemeColors";

export const palette = {
  primary: Colors.primary,
  secondary: Colors.secondary,
  primaryAvatar: {
    color: Colors.primaryDark,
    background: Colors.primaryLight,
    "&:hover": {
      color: Colors.primaryLight,
      background: Colors.primaryDark,
    },
  },
  secondaryAvatar: {
    color: Colors.secondaryDark,
    background: Colors.secondaryLight,
    "&:hover": {
      color: Colors.secondaryLight,
      background: Colors.secondaryDark,
    },
  },
};
