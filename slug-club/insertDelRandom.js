/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this._hash = {};
    this._size = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    
    if (this._hash.hasOwnProperty(val)) {
        return false;
    }
    this._size++;
    this._hash[val] = true;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    
    if (!this._hash.hasOwnProperty(val)) {
        return false;
    }
    
    delete this._hash[val];
    this._size--;
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * (this._size));
    return Number(Object.keys(this._hash)[randomIndex]);
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */