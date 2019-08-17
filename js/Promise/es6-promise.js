const STATUS = {
  pending: 'PENDING',
  resolved: 'RESOLVE',
  rejected: 'REJECTED'
}
class MyPromise {
  constructor(executor) {
    this.status = STATUS.pending;
    executor(this.resolve, this.reject);
  }

  resolve(data) {
    this.status = STATUS.resolved;
  }

  reject(data) {
    this.status = STATUS.rejected;
  }
}
