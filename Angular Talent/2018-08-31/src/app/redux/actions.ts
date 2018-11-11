export enum ActionType {
    LoggedIn,
    GotAllProduct,
    GotTopProduct,
    AddNewProduct,
    UpdateExistingProduct,
    DeleteProduct,
    GotError
}

export interface IAction {
    type: ActionType,
    payload?: any;
}