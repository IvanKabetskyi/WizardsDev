import EventEntity from 'core/entities/Event/types';
import * as actionsTypes from '../actionsTypes';
import {omitSelectedEventFromState} from './utils';

export type EventsState = {
    events: EventEntity[];
    selectedEvent?: EventEntity;
};

const defaultState: EventsState = {
    events: [],
};

export default function eventsReducer(state = defaultState, action: actionsTypes.EventsActionsTypes): EventsState {
    switch (action.type) {
        case actionsTypes.PUT_EVENTS_LIST: {
            return {
                ...state,
                events: action.payload,
            };
        }

        case actionsTypes.PUT_SELECTED_EVENT: {
            return {
                ...state,
                selectedEvent: action.payload,
            };
        }

        case actionsTypes.CLEAR_SELECTED_EVENT: {
            return omitSelectedEventFromState(state);
        }
        default: {
            return state;
        }
    }
}
