import { ImageSourcePropType } from "react-native";

export interface SpiceProps {
    like: Boolean;
    img: ImageSourcePropType;
    name: string;
    price: string;
    about: string
}

export interface NavigationProps {
    navigation: { navigate: (data: String) => void };
}