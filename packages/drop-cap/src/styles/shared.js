import styleguide from "@times-components/styleguide";

const sharedStyles = scale => {
  const { colours, fontFactory, spacing } = styleguide({ scale });
  return {
    articleTextElement: {
      ...fontFactory({
        font: "body",
        fontSize: "bodyMobile"
      }),
      marginBottom: spacing(5),
      color: colours.functional.primary
    },
    articleMainContentRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      paddingLeft: spacing(2),
      paddingRight: spacing(2)
    },
    dropCapTextElement: {
      fontSize: 70,
      fontFamily: "TimesDigitalW04",
      lineHeight: 70,
      includeFontPadding: false,
      textAlignVertical: "bottom",
      marginRight: spacing(1),
      color: colours.functional.primary
    }
  };
};

export default sharedStyles;
