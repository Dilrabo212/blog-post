import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";


class mobxStore {
    constructor() {
        makeAutoObservable(this);
        makePersistable(this, {
            name: 'userDataStore',
            storage: window.localStorage,
            properties: ["userData"],
        });
    }
}


const store = new mobxStore();
export default store;