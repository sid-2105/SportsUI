import { brand, font, fontDefaults } from "../../variables";
import * as variables from "../../../../../theme/native/custom-variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Text

//== Design Properties
//## Helper classes to change the look and feel of the widget
========================================================================== */
// Text Colors
export const textTitle = {
    text: {
        color: font.colorTitle
    },
    input: {
        color: font.colorTitle
    }
};
export const textParagraph = {
    text: {
        color: font.colorParagraph
    },
    input: {
        color: font.colorParagraph
    }
};
export const textDisabled = {
    text: {
        color: font.colorDisabled
    },
    input: {
        color: font.colorDisabled
    }
};
export const textWhite = {
    text: {
        color: fontDefaults.colorTitleLight
    },
    input: {
        color: fontDefaults.colorTitleLight
    }
};
export const textBlack = {
    text: {
        color: fontDefaults.colorTitleDark
    },
    input: {
        color: fontDefaults.colorTitleDark
    }
};
export const textPrimary = {
    text: {
        color: brand.primary
    },
    input: {
        color: brand.primary
    }
};
export const textSuccess = {
    text: {
        color: brand.success
    },
    input: {
        color: brand.success
    }
};
export const textWarning = {
    text: {
        color: brand.warning
    },
    input: {
        color: brand.warning
    }
};
export const textDanger = {
    text: {
        color: brand.danger
    },
    input: {
        color: brand.danger
    }
};

export const grayText = {
    text: {
        color: variables.customColors.grayText,
    },
    input: {
        color: variables.customColors.grayText,
    }
}; 

export const blueText = {
    text: {
        color: variables.customColors.blueText,
    },
    input: {
        color: variables.customColors.blueText,
    }
}

export const orangeText = {
    text: {
        color: variables.customColors.orangeText,
    },
    input: {
        color: variables.customColors.orangeText,
    }
}
// Text Alignment
export const textLeft = {
    text: {
        textAlign: "left"
    },
    input: {
        textAlign: "left"
    }
};
export const textCenter = {
    text: {
        textAlign: "center"
    },
    input: {
        textAlign: "center"
    }
};
export const textRight = {
    text: {
        textAlign: "right"
    },
    input: {
        textAlign: "right"
    }
};
//
// Text Weights
export const textLight = {
    text: {
        fontWeight: font.weightLight
    },
    input: {
        fontWeight: font.weightLight
    }
};
export const textNormal = {
    text: {
        fontWeight: font.weightNormal
    },
    input: {
        fontWeight: font.weightNormal
    }
};
export const textSemiBold = {
    text: {
        fontWeight: font.weightSemiBold
    },
    input: {
        fontWeight: font.weightSemiBold
    }
};
export const textBold = {
    text: {
        fontWeight: font.weightBold
    },
    input: {
        fontWeight: font.weightBold
    }
};
//
// Text Sizes
export const textSmallest = {
    text: {
        // fontSize: font.sizeSmallest,
        // lineHeight: font.lineHeightSmallest
        fontSize: variables.customFontSize.smallestFontSize,
        lineHeight: variables.customFontSize.smallestFontSize,
    },
    input: {
        // fontSize: font.sizeSmallest,
        // lineHeight: font.lineHeightSmallest
        fontSize: variables.customFontSize.smallestFontSize,
        lineHeight: variables.customFontSize.smallestFontSize,
    }    
};
export const textSmall = {
    text: {
        // fontSize: font.sizeSmall,
        // lineHeight: font.lineHeightSmall
        fontSize: variables.customFontSize.smallFontSize,
        lineHeight: variables.customFontSize.smallFontSize,
    },
    input: {
        // fontSize: font.sizeSmall,
        // lineHeight: font.lineHeightSmall
        fontSize: variables.customFontSize.smallFontSize,
        lineHeight: variables.customFontSize.smallFontSize,
    }    
};

export const mediumFontSize = {
    text: {
        fontSize: variables.customFontSize.mediumFontSize,
        lineHeight: variables.customFontSize.mediumFontSize,
    },
    input: {
        fontSize: variables.customFontSize.mediumFontSize,
        lineHeight: variables.customFontSize.mediumFontSize,
    }
}
export const textLarge = {
    text: {
        // fontSize: font.sizeLarge,
        // lineHeight: font.lineHeightLarge
        fontSize: variables.customFontSize.largeFontSize,
        lineHeight: variables.customFontSize.largeFontSize,
    },
    input: {
        // fontSize: font.sizeLarge,
        // lineHeight: font.lineHeightLarge
        fontSize: variables.customFontSize.largeFontSize,
        lineHeight: variables.customFontSize.largeFontSize,
    }
};
export const textLargest = {
    text: {
        // fontSize: font.sizeLargest,
        // lineHeight: font.lineHeightLargest
        fontSize: variables.customFontSize.largestFontSize,
        lineHeight: variables.customFontSize.largestFontSize,
    },
    input: {
        // fontSize: font.sizeLargest,
        // lineHeight: font.lineHeightLargest
        fontSize: variables.customFontSize.largestFontSize,
        lineHeight: variables.customFontSize.largestFontSize,
    }
};
//
// == Extra Classes
// ## Helper classes to change the look and feel of the widget
// -------------------------------------------------------------------------------------------------------------------//
//
// Text Transformations
export const textLowercase = {
    text: {
        textTransform: "lowercase"
    }
};
export const textUppercase = {
    text: {
        textTransform: "uppercase"
    }
};
export const textCapitalize = {
    text: {
        textTransform: "capitalize"
    }
};
export const textUnderline = {
    text: {
        textDecorationLine: "underline"
    }
};
export const textLineThrough = {
    text: {
        textDecorationLine: "line-through"
    }
};
