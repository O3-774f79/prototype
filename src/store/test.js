import { observable, action, toJS } from "mobx";

export default new class Test {
  @observable
  testWord = "1";

  @action
  resetTest = () => {
    console.log(this.testWord);
    this.testWord == "2";
  };
}();
