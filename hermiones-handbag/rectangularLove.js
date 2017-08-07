// Find intersection of two rectangles 

// Rectangles are always straight and never diagonal
// Each side is parallel with either the x-axis or y-axis

// Rectangles are defined as follows:

const myRectangle = {

  // coordinates of bottom-left corner
  bottomY: 1,
  bottomY: 5,

  // width and height
  width: 10,
  height: 4,

};

const testRec1 = {
  leftX: 2,
  bottomY: 1,
  width: 4,
  height: 3
};

const testRec2 = {
  leftX: 4,
  bottomY: 2,
  width: 4,
  height: 8
}

// Intersection if:
  // one rectangle leftX is greater than or equal to other recLeft X && less than other recLeftX + width
  // AND
  // one rectangle bottomY is greater than or equal to other rec bottomY && less than other bottomY + height

const xIntersection = (rec1, rec2) => {
  if (rec1.leftX >= rec2.leftX && rec1.leftX < rec2.leftX + rec2.width) {
    return true;
  } else if (rec2.leftX >= rec1.leftX && rec2.leftX < rec1.leftX + rec1.width) {
    return true;
  }

  return false;
}

const yIntersection = (rec1, rec2) => {
  if (rec1.bottomY >= rec2.bottomY && rec1.bottomY < rec2.bottomY + rec2.height) {
    return true;
  } else if (rec2.bottomY >= rec1.bottomY && rec2.bottomY < rec1.bottomY + rec1.height) {
    return true;
  }

  return false;
}

const rectangleIntersection = (rec1, rec2) => {
  // if xIntersection && yIntersection
  if (xIntersection(rec1, rec2) && yIntersection(rec1, rec2)) {
    // return {}
    const left = Math.max(rec1.leftX, rec2.leftX);
    const bottom = Math.max(rec1.bottomY, rec2.bottomY);

    return {
      //leftX: Math.max(leftX)
      leftX: left,//Math.max(rec1.leftX, rec2.leftX),
      // bottomY: Math.max(bottomY)
      bottomY: bottom,//Math.max(rec1.bottomY, rec2.bottomY),
      // width: Math.min(left + width)
      width: Math.min(rec1.leftX + rec1.width, rec2.leftX + rec2.width) - left,
      // height: Math.min(bottom + height)
      height: Math.min(rec1.bottomY + rec1.height, rec2.bottomY + rec2.height) - bottom
    }
  }

  return false;
}



const test = rectangleIntersection(testRec1, testRec2);

console.log('test', test);