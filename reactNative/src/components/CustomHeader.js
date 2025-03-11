import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import AppColors from "../kernel/AppColors";

export default function CustomHeader({title}){
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.PRIMARY,
        paddingTop: 50,
        paddingBottom: 16,
        paddingTop: 50,
        paddingHorizontal: 16
    },  
    textHeader: {
        fontSize: 30,
        color: AppColors.TEXT_CONTRAST,
    }
});