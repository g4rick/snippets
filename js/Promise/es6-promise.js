const STATUS = {
  pending: 'PENDING',
  resolved: 'RESOLVE',
  rejected: 'REJECTED'
};

const statusProvider = (promise, status) => data => {
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
      statusProvider(this, STATUS.resolved),
      statusProvider(this, STATUS.rejected)
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

  catch(arg) {
    return this.then(undefined, arg);
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve();
});
console.log(promise);
