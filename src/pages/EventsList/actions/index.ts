import {Dispatch} from 'redux';
import {AsyncThunkActionType} from 'types/ThunkAction';
import * as requests from 'core/gateways/Events';
import * as simpleActions from '../simpleActions';

export function putEventsList(): AsyncThunkActionType<void> {
    return function (dispatch: Dispatch): Promise<void> {
        return requests
            .fetchEventList()
            .then(events => {
                dispatch(simpleActions.putEventsList(events));
            })
            .catch(error => {
                console.error(error);
            });
    };
}
