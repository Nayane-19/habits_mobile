import { ActivityIndicator, StyleSheet, View } from "react-native";

export function Loading() {
    return (
        <View style={styles.container_loading}>
            <ActivityIndicator color="#7C3AED" />
        </View>
    )
}

const styles = StyleSheet.create({
    container_loading: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#09090A',
    },
  });
  