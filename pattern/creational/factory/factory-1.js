const CoordinateSystem = {
  CARTESIAN: 0,
  POLAR: 1,
};

class PointFactory {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // constructor(a, b, cs=CoordinateSystem.CARTESIAN)
  // {
  //   switch (cs)
  //   {
  //     case CoordinateSystem.CARTESIAN:
  //       this.x = a;
  //       this.y = b;
  //       break;
  //     case CoordinateSystem.POLAR:
  //       this.x = a * Math.cos(b);
  //       this.y = a * Math.sin(b);
  //       break;
  //   }
  //
  //   // steps to add a new system
  //   // 1. augment CoordinateSystem
  //   // 2. change ctor
  // }

  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}


let p1 = PointFactory.newCartesianPoint(1, 2);
console.log(p1);

let p2 = PointFactory.newPolarPoint(1, 2);
console.log(p2)
