import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'react-native';
import { PerrmissionContext } from '../context/PermissionsContext';

export const PermissionsScreen = () => {

  const { askLocationPermission, permissions } = useContext(PerrmissionContext);

  return (
    <View style={ styles.container }>
        <Text>PermissionsScreen</Text>
        <Button
          title="Permiso"
          onPress={ () => askLocationPermission() }
        />
        <Text>
          {
            JSON.stringify(permissions)
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
});