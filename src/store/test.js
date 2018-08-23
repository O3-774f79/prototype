import { observable, action, toJS } from "mobx";

export default new class Test {
  @observable
  searchText;
  @observable
  pushValue = 1;
  @action
  setSearchText = searchText => {
    this.searchText = searchText;
  };
  enterValue = s => {
    this.pushValue = s;
  };
}();
