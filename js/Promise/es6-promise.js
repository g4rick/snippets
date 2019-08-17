const STATUS = {
  pending: 'PENDING',
  resolved: 'RESOLVE',
  rejected: 'REJECTED'
};

const resolve = () => {
  promise.status = STATUS.resolved;
}


const reject = () => {
  promise.status = STATUS.rejected;
}

class MyPromise {
  constructor(executor) {
    this.status = STATUS.pending;
    executor((data) => resolve(this, data), (data) => reject(this, data));
  }
}

const promise = new MyPromise((resolve, reject) => {});
console.log(promise.resolve());
