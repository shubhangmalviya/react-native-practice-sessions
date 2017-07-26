/**
 * Every reducer will return a discrete property of the state,
 * regardless of how many conditions are inside that reducer.
 */

/**
 * This reducer only listens for text change in property values
 * and builds a state that only
 * @param state
 * @param action
 * @returns {{}}
 */
export function textChangeReducer(state = {}, action) {
    switch (action.type) {
        case 'TEXT_CHANGE':
            return {
                ...state,
                [action.screen]: {
                    ...state[action.screen],
                    [action.property]: action[action.property]
                }
            };

        default:
            return state;
    }
}