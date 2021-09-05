import EventEntity from 'core/entities/Event/types';

export const PUT_EVENTS_LIST = 'PUT_EVENTS_LIST';
export const CLEAR_SELECTED_EVENT = 'CLEAR_SELECTED_EVENT';
export const PUT_SELECTED_EVENT = 'PUT_SELECTED_EVENT';

export interface PutEventsList {
    type: typeof PUT_EVENTS_LIST;
    payload: EventEntity[];
}

export interface ClearSelectedEvent {
    type: typeof CLEAR_SELECTED_EVENT;
}

export interface PutSelectedEvent {
    type: typeof PUT_SELECTED_EVENT;
    payload: EventEntity;
}

export type EventsActionsTypes = PutEventsList | ClearSelectedEvent | PutSelectedEvent;
