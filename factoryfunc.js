//factory function

function createcircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createcircle(1);

console.log(circle1);
