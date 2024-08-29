import * as variables from "../../../../../theme/native/custom-variables";
import {Dimensions} from "react-native"
// ------------------------------------ Border Radius -------------------------------
export const borderRadiusNone = {
    container: {
        borderRadius: variables.customBorderRadius.borderRadiusNone,
    },
    input: {
        borderRadius: variables.customBorderRadius.borderRadiusNone,
    }
};

export const borderRadiusSmall = {
    container: {
        borderRadius: variables.customBorderRadius.borderRadiusSmall,
    },
    input: {
        borderRadius: variables.customBorderRadius.borderRadiusSmall,
    }
};

export const lightBlueBorder = {
    container:{
        borderColor:"#7792a5"
    }
}

export const borderRadiusMedium = {
    container: {
        borderRadius: variables.customBorderRadius.borderRadiusMedium,
    },
    input: {
        borderRadius: variables.customBorderRadius.borderRadiusMedium,
    }
};

export const borderRadiusLarge = {
    container: {
        borderRadius: variables.customBorderRadius.borderRadiusLarge,
    },
    input: {
        borderRadius: variables.customBorderRadius.borderRadiusLarge,
    }
};

export const borderRadiusLargest = {
    container: {
        borderRadius: variables.customBorderRadius.borderRadiusLargest,
    },
    input: {
        borderRadius: variables.customBorderRadius.borderRadiusLargest,
    }
};

export const borderRadiusCircle = {
    container: {
        borderRadius: variables.customBorderRadius.borderRadiusCircle,
    },
    input: {
        borderRadius: variables.customBorderRadius.borderRadiusCircle,
    }
};

// --------------------------------- Border Position --------------------------
export const borderAll = {
    container: {
        borderWidth: 1,
    },
    input: {
        borderWidth: 1,
    }
};
export const borderNone = {
    container: {
        borderWidth: 0,
    },
    input: {
        borderWidth: 0,
    }
};
export const borderTop = {
    container: {
        borderTopWidth: 1
    },
    input: {
        borderTopWidth: 1
    }
}
export const borderBottom = {
    container: {
        borderBottomWidth: 1,
    },
    input: {
        borderBottomWidth: 1,
    }
}
export const borderLeft = {
    container: {
        borderLeftWidth: 1,
    },
    input: {
        borderLeftWidth: 1,
    }
}
export const borderRight = {
    container: {
        borderRightWidth: 1,
    },
    input: {
        borderRightWidth: 1,
    }
}


// ----------------------------------- Background Color -----------------------------

export const disableGrayBackground = {
    inputDisabled: {
        backgroundColor : variables.customColors.grayBackground,
    }
}

export const disableWhiteBackground = {
    inputDisabled : {
        backgroundColor : variables.customColors.whiteBackground,
    }
}

export const disableTransparentBackground = {
    inputDisabled : {
        backgroundColor : "transparent",
    }
}
export const grayBackground = {
    container : {
        backgroundColor : variables.customColors.grayBackground,
    },
    input: {
        backgroundColor : variables.customColors.grayBackground,
    }
}

export const whiteBackground = {
    container : {
        backgroundColor : variables.customColors.whiteBackground,
    },
    input : {
        backgroundColor : variables.customColors.whiteBackground,
    }
}

export const transparentBackground = {
    container : {
        backgroundColor : "transparent",
    },
    input : {
        backgroundColor : "transparent",
    }
}

export const lightSkyBlueBackground = {
    container : {
        backgroundColor : "#c6e6fd",
    },
    input : {
        backgroundColor : "#c6e6fd",
    }
}
// ------------------------------- Height ---------------------------------
export const commonHeight = {
    container: {
        height: variables.Height.commonHeight,
    }
}

export const headerHeight = {
    container: {
        height: variables.Height.headerHeight,
    }
}
export const HundredPercentHeight = {
    container:{
        height:"100%"
    }
}
export const windowHeight = {
    container:{
        height: Dimensions.get("window").height
    }
}
export const grayBorder  = {
    container: {
        borderColor: variables.customColors.grayBorder,
    }
}

// ------------------------- Position -------------------------------------
export const Absolute = {
    container:{
        position:"absolute"
    }
}
export const Relative = {
    container:{
        position:"relative"
    }
}
export const Fixed = {
    container:{
        position:"fixed"
    }
}
// ------------------------------- Width ---------------------------------
export const WidthTen = {
    container:{
        width:"10%"
    }
}
export const WidthTwenty = {
    container:{
        width:"20%"
    }
}
export const WidthThirty = {
    container:{
        width:"30%"
    }
}
export const WidthFourty = {
    container:{
        width:"40%"
    }
}
export const WidthFifty = {
    container:{
        width:"50%"
    }
}
export const WidthSixty = {
    container:{
        width:"60%"
    }
}
export const WidthSeventy = {
    container:{
        width:"70%"
    }
}
export const WidthEighty = {
    container:{
        width:"80%"
    }
}
export const WidthNinety = {
    container:{
        width:"90%"
    }
}
export const WidthHundred = {
    container:{
        width:"100%"
    }
}
export const widthFull = {
    container:{
        width:Dimensions.get('window').width,
    }
}
// ----------------------------------- Gap -------------------------------------------

export const smallGap = {
    container: {
        gap: variables.customGap.smallGap,
    }
}

export const mediumGap = {
    container: {
        gap: variables.customGap.mediumGap,
    }
}

export const largeGap = {
    container: {
        gap: variables.customGap.largeGap,
    }
}

export const largestGap = {
    container: {
        gap: variables.customGap.largestGap,
    }
}


export const flexOne = {
    container: {
        flex: 1,
    }
}

export const Ellipsis = {
    text: {
        numberOfLines: 1,
        ellipsizeMode: "tail"
    }
}