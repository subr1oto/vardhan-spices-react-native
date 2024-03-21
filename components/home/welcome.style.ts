import { DimensionValue, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

interface StylesProps {
    color?: string;
    top?: DimensionValue;
}

interface StyleSheetType {
    container: ViewStyle;
    welcomeText: TextStyle;
    searchContainer: ViewStyle
    searchIcon: TextStyle
    searchWrapper: ViewStyle
    searchInput: TextStyle
    searchBtn: TextStyle
}

type StylesFunctionProps = (props: StylesProps) => StyleSheetType;

const styles: StylesFunctionProps = ({ color, top }) =>
    StyleSheet.create<StyleSheetType>({
        container: {
            width: '100%'
        },
        welcomeText: {
            fontFamily: 'bold',
            fontSize: SIZES.xxLarge - 5,
            marginTop: top,
            color: color,
            marginHorizontal: 12
        },
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            marginHorizontal: SIZES.small,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.medium,
            marginVertical: SIZES.medium,
            height: 50
        },
        searchIcon: {
            marginHorizontal: 10,
            color: COLORS.gray
        },
        searchWrapper: {
            flex: 1,
            backgroundColor: COLORS.secondary,
            marginRight: SIZES.small,
            borderRadius: SIZES.small
        },
        searchInput: {
            fontFamily: "regular",
            width: "100%",
            height: "100%",
            paddingHorizontal: SIZES.small
        },
        searchBtn: {
            width: 50,
            height: "100%",
            borderRadius: SIZES.medium,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.primary
        }
    });

export default styles