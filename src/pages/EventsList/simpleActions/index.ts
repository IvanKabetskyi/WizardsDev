import * as actionsTypes from 'store/Events/actionsTypes';
import EventEntity from 'core/entities/Event/types';

export const putEventsList = (events: EventEntity[]): actionsTypes.PutEventsList => ({
    type: actionsTypes.PUT_EVENTS_LIST,
    payload: events,
});

export const putSelectedEvent = (event: EventEntity): actionsTypes.PutSelectedEvent => ({
    type: actionsTypes.PUT_SELECTED_EVENT,
    payload: event,
});
