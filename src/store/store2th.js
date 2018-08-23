import { observable, action, toJS } from "mobx";
import axios from "axios";
export default new class Store2th {
  @observable
  value = 100;
  @observable
  data = [];
  @observable
  dataload = [];
  @action
  changeValue = () => {
    this.value = 200;
  };
  @action
  fetchData = async () => {
    try {
      let dataFetch;
      dataFetch = await axios.get("http://localhost:3004/dropdownMenu");
      const res = dataFetch.data;
      this.dataload = await res.map((v, k) => {
        const key = k + 1;
        return {
          num: key,
          valueKey: v.valueKey,
          valueText: v.valueText
        };
      });
    } catch (e) {
      console.log(e);
    }
  };
}();
