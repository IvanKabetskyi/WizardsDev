import React, {useEffect, memo, useState} from 'react';
import {View, VirtualizedList, RefreshControl} from 'react-native';
import EventEntity from 'core/entities/Event/types';
import {useIsFocused} from '@react-navigation/native';
import useEventsListActions from './hooks/useEventsListActions';
import useStateEventsList from './hooks/useStateEventsList';
import ListItem from './components/ListItem';
import RefreshTimer from './components/RefreshTimer';
import {fifteenSeconds} from './constants';

type Timeout = ReturnType<typeof setTimeout> | undefined;

const EventsList: React.FC = () => {
    const minute = 60000;
    const isFocused = useIsFocused();
    const [isUserCanRefresh, setIsUserCanRefresh] = useState<boolean>(false);
    const [isRefresh, setIsRefresh] = useState<boolean>(false);
    const {putEventsList} = useEventsListActions();
    const eventsList = useStateEventsList();

    const refreshList = (): void => {
        setIsRefresh(true);
        setIsUserCanRefresh(false);
        putEventsList().then(() => {
            setIsRefresh(false);
        });
    };

    const manualRefreshList = (): void => {
        if (!isUserCanRefresh) {
            return;
        }
        refreshList();
    };

    useEffect(() => {
        if (isFocused) {
            refreshList();
        }
    }, [isFocused]);

    const startRefreshTimeout = (): Timeout => {
        if (!isRefresh && isFocused) {
            return setTimeout(() => {
                refreshList();
            }, minute);
        }
    };

    const startUserPermissionTimeout = (): Timeout => {
        if (!isRefresh && isFocused) {
            return setTimeout(() => {
                setIsUserCanRefresh(true);
            }, fifteenSeconds);
        }
    };

    useEffect(() => {
        const refreshTimeout: Timeout = startRefreshTimeout();
        const userPermissionTimeOut: Timeout = startUserPermissionTimeout();
        return () => {
            if (refreshTimeout) {
                clearTimeout(refreshTimeout);
            }
            if (userPermissionTimeOut) {
                clearTimeout(userPermissionTimeOut);
            }
        };
    }, [isRefresh, isFocused]);

    const getItemCount = (): number => eventsList.length;

    if (!isFocused) {
        return null;
    }
    return (
        <View>
            <VirtualizedList
                ListHeaderComponent={!isUserCanRefresh && !isRefresh ? <RefreshTimer /> : null}
                data={eventsList}
                initialNumToRender={4}
                renderItem={({item}) => <ListItem event={item} />}
                keyExtractor={(event: EventEntity) => event.id}
                getItemCount={getItemCount}
                getItem={(data, index) => data[index]}
                refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={manualRefreshList} />}
            />
        </View>
    );
};

export default memo(EventsList);
