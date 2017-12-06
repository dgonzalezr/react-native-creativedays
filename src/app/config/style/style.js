const theme = {
    blackColor: '#000000',
    backgroundColor: '#FCFCFC',
    grayDarkColor: '#A7A7A7',
    grayLightColor: '#D4D4D4',
    primaryColor: '#426BD7',
    primaryDarkColor: '#3F30BD',
    primaryLightColor: '#3181E5',
    primaryTextColor: '#474D55',
    secondaryTextColor: '#B6B6B6',
    whiteColor: '#FFFFFF'
};

const styleConfig = {
    // Basic
    backgroundColor: theme.backgroundColor,
    primaryColor: theme.primaryColor,
    primaryDarkColor: theme.primaryDarkColor,
    primaryLightColor: theme.primaryLightColor,
    whiteColor: theme.whiteColor,
    // Border
    border: {
        borderColor: theme.grayLightColor,
        borderRadius: 4,
        borderWidth: 0.5
    },
    // Button
    button: {
        backgroundColor: theme.primaryColor,
        borderColor: theme.primaryColor,
        borderRadius: 50,
        borderWidth: 1
    },
    // Shadow
    shadow: {
        elevation: 2,
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: theme.blackColor
    },
    // Text
    text: {
        primaryColor: theme.primaryTextColor,
        secondaryColor: theme.secondaryTextColor
    }
};

export { styleConfig };
