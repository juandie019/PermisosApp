import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { AppButton } from '../components/AppButton';
import { PerrmissionContext } from '../context/PermissionsContext';

export const PermissionsScreen = () => {

  const { askLocationPermission, permissions } = useContext(PerrmissionContext);

  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>Necesitamos permisos del gps para mostrar el mapa</Text>
        <AppButton
          title="Permiso"
          onPress={ () => askLocationPermission() }
        />
        <Text style={ styles.title }>
          {
            JSON.stringify(permissions, null, 5)
          }
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    title: {
      marginVertical: 10,
      fontSize: 15,
    },
});
