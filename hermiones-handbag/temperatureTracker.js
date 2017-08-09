class TempTracker {
  constructor() {
    this._sum = 0;
    this._count = 0;
    this._hash = {};
    this._currentMode = null;
    this._currentMax = null;
    this._currentMin = null;
  }

  insert(temp) {
    // add temp to sum
    this._sum += temp;
    // increment count by 1
    this._count++;
    // track temp count in hash table
    let tempCount = this._hash[temp];
    tempCount ? tempCount++ : tempCount = 1;
    // if hash at temp is greater than hash at curMode
    if (tempCount > this._hash[this._currentMode] || this._currentMode === null) {
      // curMode = temp
      this._currentMode = temp;
    }

    // if curMax exists and temp is greater than curMax || curMax is null
    if ((this._currentMax && temp > this._currentMax) || this._currentMax === null) {
      // curMax = temp
      this._currentMax = temp;
    }

    // if CurMin exists and temp is smaller than curMin || curMin is null 
      // curMin = temp
    if ((this._currentMin && temp < this._currentMin) || this._currentMin === null) {
      // curMax = temp
      this._currentMin = temp;
    }
  }

  getMax() {
    return this._currentMax;
  }

  getMin() {
    return this._currentMin;
  }

  getMean() {
    return this._sum / this._count;
  }

  getMode() {
    return this._currentMode;
  }
}

const tracker = new TempTracker();

tracker.insert(1);
tracker.insert(10);
tracker.insert(1);
tracker.insert(2);

// const maxTest = tracker.getMax();
// console.log('should be 10', maxTest);

// const minTest = tracker.getMin();
// console.log('should be -1', minTest);

// const meanTest = tracker.getMean();
// console.log('should be 3', meanTest);

const modeTest = tracker.getMode();
console.log('should be 1', modeTest);

