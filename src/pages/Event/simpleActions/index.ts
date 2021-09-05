import * as actionsTypes from 'store/Events/actionsTypes';

export const clearSelectedEvent = (): actionsTypes.ClearSelectedEvent => ({
    type: actionsTypes.CLEAR_SELECTED_EVENT,
});
