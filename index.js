// Frist assignment //
Array.prototype.customReverse = function () {
	var output = [];
	for (var i = this.length - 1; i > -1; i--) {
		output.push(this[i]);
	}

	return output;
};

Array.prototype.customReverseTwo = function () {
	return this.map((item, idx) => this[this.length - 1 - idx]);
};

Array.prototype.customReverseThree = function () {
	self = this;
	return this.map(function (item, idx) {
		return self[self.length - 1 - idx];
	});
};

function createRandArray(arrayLength) {
	return new Array(arrayLength).fill(0).map(function (item) {
		return Math.floor(Math.random() * 101);
	});
}

var makeArray = createRandArray(5);
makeArray.customReverseTwo();
// --Frist assignment //

// Second assingment //

function createMatrix(width, height) {
	var result = [];
	for (var i = 0; i < width; i++) {
		result[i] = new Array(height).fill(0).map(function (item) {
			return Math.floor(Math.random() * 101);
		});
	}
	return result;
}
var myMatrix = createMatrix(6, 4);

Array.prototype.swapMatrix = function () {
	var newMatrix = new Array(this.length).fill([]);

	for (var i = 1; i < this.length; i += 2) {
		newMatrix[i - 1] = this[i];
		newMatrix[i] = this[i - 1];
	}
	return newMatrix;
};

// --Second assingment //
