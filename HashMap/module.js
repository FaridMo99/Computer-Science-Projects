export default class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }

  set(key, value) {
    this.size++;

    if (this.size > this.capacity * this.loadFactor) {
      this.resize();
    }

    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  }

  resize() {
    this.capacity *= 2;
    const newBuckets = new Array(this.capacity).fill(null).map(() => []);

    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      for (let j = 0; j < bucket.length; j++) {
        const [key, value] = bucket[j];
        const index = this.hash(key) % this.capacity;
        newBuckets[index].push([key, value]);
      }
    }

    this.buckets = newBuckets;
  }

  get(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return null;
  }

  has(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    this.size--;

    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  keys() {
    const arr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      for (let j = 0; j < bucket.length; j++) {
        arr.push(bucket[j][0]);
      }
    }
    return arr;
  }

  values() {
    const arr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      for (let j = 0; j < bucket.length; j++) {
        arr.push(bucket[j][1]);
      }
    }
    return arr;
  }

  entries() {
    const arr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      for (let j = 0; j < bucket.length; j++) {
        arr.push([bucket[j][0], bucket[j][1]]);
      }
    }
    return arr;
  }
}
