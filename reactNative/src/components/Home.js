import { StyleSheet, Text, View } from 'react-native';
import CustomHeader from './CustomHeader';
import { CustomCard } from './CustomCard';
import { useEffect, useState } from 'react';

export default function Home() {
    const [list, setList] = useState([]);

    const findCategories = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/category", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await response.json();
            console.log(result);

            if (result.data && Array.isArray(result.data)) {
                setList(result.data);
            } else {
                console.error("Expected an array in result.data but received:", result.data);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        findCategories();
    }, []);

    return (
        <View style={styles.container}>
            <CustomHeader title="Inicio" />
            <View style={styles.content}>
                {list.map((item, index) => (
                    <CustomCard key={index} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        padding: 10
    }
});
