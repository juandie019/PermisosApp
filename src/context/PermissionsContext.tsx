import React, { createContext, useState, useEffect } from 'react';
import { AppState, Platform } from 'react-native';
import { PermissionStatus, PERMISSIONS, request, check } from 'react-native-permissions';

export interface PermissionState {
    locationStatus: PermissionStatus;
}

export const permissionInitState: PermissionState = {
    locationStatus: 'unavailable',
};

type PermissionsContextProps = {
    permissions: PermissionState;
    askLocationPermission: () => void;
    checkLocationPermission: () =>  void;
}

export const PerrmissionContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({ children }: any) => {

    const [permissions, setPermissions] = useState<PermissionState>(permissionInitState);

    useEffect(() => {
        AppState.addEventListener('change', state => {
            if (state !== 'active') { return; }

            checkLocationPermission();
        });
    }, []);


    const askLocationPermission = async () => {
        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios'){
          permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
          permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        setPermissions( { ...permissions, locationStatus: permissionStatus} );
    };

    const checkLocationPermission = async () => {
        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios'){
          permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
          permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        setPermissions( { ...permissions, locationStatus: permissionStatus} );
    };

    return (
        <PerrmissionContext.Provider
            value={{
                permissions,
                askLocationPermission,
                checkLocationPermission,
            }}
        >
         { children }
        </PerrmissionContext.Provider>
    );
};
