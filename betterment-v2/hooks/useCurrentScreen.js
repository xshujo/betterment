import { useEffect, useState } from 'react';
import { useNavigationState } from '@react-navigation/native';

export const useCurrentScreen = () => {
    const [currentScreen, setCurrentScreen] = useState('');

    const routeName = useNavigationState((state) => {
        return state.routes[state.index].name;
    });

    useEffect(() => {
        setCurrentScreen(routeName);
    }, [routeName]);

    return currentScreen;
};
