import { View, Text, StyleSheet } from 'react-native'

export const CustomCard = () => {
  return (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <Text>Encabezado</Text>
        </View> 
        <View style={styles.cardBody}>
            <Text>Cuerpo</Text>
        </View> 
    </View>
  )
}

const styles = StyleSheet.create({
    card:   {
        borderWidth: 1,
        borderColor: "#B4B4B4",
        borderRadius: 12
    }, 
    cardHeader: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#B4B4B4",
        backgroundColor: "#E6E6E6",
        borderTopStartRadius: 12,
        borderTopEndRadius: 12
    },
    cardBody: {
        padding: 16
    }
})
