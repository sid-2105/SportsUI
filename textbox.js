/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Text Box

//== Design Properties
//## Helper classes to change the look and feel of the widget
========================================================================== */
// Text Box Color
import { brand, font, fontDefaults } from "../../variables";
import * as variables from "../../../../../theme/native/custom-variables";

export const textInputCapitalizeNone = {
    input: {
        autoCapitalize: "none"
    }
};
export const textInputCapitalizeCharacters = {
    input: {
        autoCapitalize: "characters"
    }
};
export const textInputCapitalizeWords = {
    input: {
        autoCapitalize: "words"
    }
};
export const textInputCapitalizeSentences = {
    input: {
        autoCapitalize: "sentences"
    }
};







// --------
export const placeholderParagraph = {
    input: {
        placeholderTextColor: font.colorParagraph
    }
};
export const placeholderDisabled = {
    input: {
        placeholderTextColor: font.colorDisabled
    }
};
export const placeholderWhite = {
    input: {
        placeholderTextColor: fontDefaults.colorTitleLight
    }
};
export const placeholderBlack = {
    input: {
        placeholderTextColor: fontDefaults.colorTitleDark
    }
};
export const placeholderPrimary = {
    input: {
        placeholderTextColor: brand.primary
    }
};
export const placeholderSuccess = {
    input: {
        placeholderTextColor: brand.success
    }
};
export const placeholderWarning = {
    input: {
        placeholderTextColor: brand.warning
    }
};
export const placeholderDanger = {
    input: {
        placeholderTextColor: brand.danger
    }
};

export const grayPlaceholder = {
    input: {
        placeholderTextColor: variables.customColors.grayText,
    }
}; 

export const bluePlaceholder = {
    input: {
        placeholderTextColor: variables.customColors.blueText,
    }
}
