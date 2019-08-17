const STATUS = {
  pending: 'PENDING',
  resolved: 'RESOLVE',
  rejected: 'REJECTED'
};

const statusProvider = (promise, status, data) => {
  if (promise.status !== STATUS.pending) {
    return false;
  }
  promise.result = data;
  promise.status = status;
};

class MyPromise {
  constructor(executor) {
    this.status = STATUS.pending;
    this.result = null;
    executor(
      data => statusProvider(this, STATUS.resolved, data),
      data => statusProvider(this, STATUS.rejected, data)
    );
  }

  then(...args) {
    switch (this.status) {
      case STATUS.pending: {
        break;
      }
      case STATUS.resolved: {
        args[0](this.result);
        break;
      }
      case STATUS.rejected: {
        args[1](this.result);
        break;
      }
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve();
});
console.log(promise);
