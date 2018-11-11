import { State } from "./state";
import { IAction, ActionType } from "./actions";

export function reducer(oldState: State, action: IAction): State {

    let newState = new State();
    newState.isLoggedIn = oldState.isLoggedIn;

    switch (action.type) {

        case ActionType.LoggedIn:
            newState.isLoggedIn = true;
        break;

        case ActionType.GotAllProduct:
            newState.products = action.payload;
            break;

        case ActionType.AddNewProduct:
            newState.products = oldState.products;
            newState.products.unshift(action.payload); // Add in the beginning.
            break;

        case ActionType.GotTopProduct:
            break;

        case ActionType.UpdateExistingProduct:
            break;

        case ActionType.DeleteProduct:
            break;

        case ActionType.GotError:
            break;
    }

    return newState;
}