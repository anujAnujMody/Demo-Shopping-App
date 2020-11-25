import {action, computed, observable, runInAction} from 'mobx';
import {utils} from '../utils/Utils';

class CartStore {
  @observable cartData = observable.array();
  @observable itemCount = 0;

  @computed get cartTotalCount() {
    return this.cartData.length;
  }

  @action addToCart = (item) => {
    this.cartData.push(item);
    this.getItemCount(item.itemId);
  };

  @action getItemCount = (id) => {
    this.itemCount = this.cartData.filter((value) => {
      return value.itemId === id;
    }).length;
  };

  @action removeFromCart = (item) => {
    var deletedCount = 0;
    this.cartData.forEach((value, index) => {
      if (item.itemId === value.itemId) {
        if (deletedCount === 0) {
          this.cartData.splice(index, 1);
        }
        deletedCount = 1;
      }
      if (deletedCount > 0) {
        return;
      }
    });
    this.getItemCount(item.itemId);
  };
}

export default CartStore;
