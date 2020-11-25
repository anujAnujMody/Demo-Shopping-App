import {action, observable} from 'mobx';
import CartStore from './CartStore';

class BaseStore extends CartStore {
  @observable isLoading = true;
  @action toggleLoading = (value) => {
    this.isLoading = value;
  };
  
}

export default BaseStore;
