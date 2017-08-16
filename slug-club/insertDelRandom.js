/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this._storage = [];
    this._size = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    
    for (let i = 0; i < this._storage.length; i++) {
        const element = this._storage[i];
        if (element === val) {
            return false;
        }
    }
    
    this._storage.push(val);
    this._size++;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    for (let i = 0; i < this._storage.length; i++) {
        const element = this._storage[i];
        if (element === val) {
            this._storage.splice(i, 1);
            this._size--;
            return true;
        }
    }
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * (this._size));
    return this._storage[randomIndex];
};