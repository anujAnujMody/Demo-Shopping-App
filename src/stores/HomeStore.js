import {action, makeObservable, observable, runInAction} from 'mobx';
import BaseStore from './BaseStore';
import {utils} from '../utils/Utils';
import {apiRequest} from '../network/ApiRequest';
import moment from 'moment';

class HomeStore extends BaseStore {
  @observable data = observable.array();
  @observable elapsedTime = '0000';
  @observable cart = 1;

  constructor() {
    super();
    makeObservable(this);
  }

  @action getData = () => {
    this.toggleLoading(true);
    apiRequest
      .callAPIs(apiRequest.getData())
      .then((response) => {
        if (response.status === apiRequest.STATUS.SUCCESS) {
          this.data = response.data.payload;
          this.toggleLoading(false);
        }
      })
      .catch((err) => {
        this.toggleLoading(false);
      });
  };

  @action calcElapsedTime = (item) => {
    // var currentDate = new moment(new Date());
    // var dateFromServer = new moment(item.expireAt);
    // setInterval(() => {
    //   runInAction(() => {
    //     item.elapsedTime =  moment(dateFromServer.diff(currentDate)).format(
    //       'HH:mm:ss',
    //     )
    //   });
    // }, 0);
  };
}

export default HomeStore;
