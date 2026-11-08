//933. Number of Recent Calls

class RecentCounter {
  constructor() {
    this.requests = [];
    this.front = 0;
  }
  ping(t) {
    if (this.requests.length !== 0) {
      let val = this.requests[this.front];

      while (t - val > 3000) {
        this.front++;
        val = this.requests[this.front];
      }
      this.requests.push(t);
    } else {
      this.requests.push(t);
    }

    return this.requests.length - this.front;
  }
}
let counter = new RecentCounter();
