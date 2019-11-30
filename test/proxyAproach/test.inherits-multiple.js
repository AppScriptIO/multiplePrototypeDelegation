"use strict";{


  class A {
    constructor(x) {
      this.A = x;
    }

    AA() {
      return this.A + this.A;
    }}


  class B extends A {
    constructor(x, y) {
      super(y);
      this.B = x;
    }

    BB() {
      return this.B + this.B;
    }}


  class _C {
    constructor(x) {
      this.C = x;
    }

    CC() {
      return this.C + this.C;
    }}

  const C = inheritsMultiple(_C, [B]);

  const a = new A(1);
  console.log(a);
  console.log(a.AA());

  const b = new B(2, 1);
  console.log(b);
  console.log(b.AA());
  console.log(b.BB());

  const c = new C([3], [[2, 1]]);
  console.log(c);
  console.log(c.AA());
  console.log(c.BB());
  console.log(c.CC());
}

{


  class A {
    constructor(x) {
      this.A = x;
    }

    AA() {
      return this.A + this.A;
    }}


  class _B {
    constructor(x) {
      this.B = x;
    }

    BB() {
      return this.B + this.B;
    }}

  const B = inheritsMultiple(_B, [A]);

  class C extends B {
    constructor(x, y, z) {
      super(y, z);
      this.C = x;
    }

    CC() {
      return this.C + this.C;
    }}


  const a = new A(1);
  console.log(a);
  console.log(a.AA());

  const b = new B([2], [[1]]);
  console.log(b);
  console.log(b.AA());
  console.log(b.BB());

  const c = new C(3, [2], [[1]]);
  console.log(c);
  console.log(c.AA());
  console.log(c.BB());
  console.log(c.CC());
}


{
  class _A {
    constructor(x) {
      this.A = x;
    }

    AA() {
      return this.A + this.A;
    }}

  const A = inheritsMultiple(_A, []);

  class _B {
    constructor(x) {
      this.B = x;
    }

    BB() {
      return this.B + this.B;
    }}

  const B = inheritsMultiple(_B, [A]);

  class _C {
    constructor(x) {
      this.C = x;
    }

    CC() {
      return this.C + this.C;
    }}

  const C = inheritsMultiple(_C, [B]);

  const a = new A([1], []);
  console.log(a);
  console.log(a.AA());

  const b = new B([2], [[[1]]]);
  console.log(b);
  console.log(b.AA());
  console.log(b.BB());

  const c = new C([3], [[[2], [[[1]]]]]);
  console.log(c);
  console.log(c.AA());
  console.log(c.BB());
  console.log(c.CC());
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvcHJveHlBcHJvYWNoL3Rlc3QuaW5oZXJpdHMtbXVsdGlwbGUuanMiXSwibmFtZXMiOlsiQSIsImNvbnN0cnVjdG9yIiwieCIsIkFBIiwiQiIsInkiLCJCQiIsIl9DIiwiQyIsIkNDIiwiaW5oZXJpdHNNdWx0aXBsZSIsImEiLCJjb25zb2xlIiwibG9nIiwiYiIsImMiLCJfQiIsInoiLCJfQSJdLCJtYXBwaW5ncyI6ImFBQUE7OztBQUdFLFFBQU1BLENBQU4sQ0FBUTtBQUNOQyxJQUFBQSxXQUFXLENBQUNDLENBQUQsRUFBSTtBQUNiLFdBQUtGLENBQUwsR0FBU0UsQ0FBVDtBQUNEOztBQUVEQyxJQUFBQSxFQUFFLEdBQUc7QUFDSCxhQUFPLEtBQUtILENBQUwsR0FBUyxLQUFLQSxDQUFyQjtBQUNELEtBUEs7OztBQVVSLFFBQU1JLENBQU4sU0FBZ0JKLENBQWhCLENBQWtCO0FBQ2hCQyxJQUFBQSxXQUFXLENBQUNDLENBQUQsRUFBSUcsQ0FBSixFQUFPO0FBQ2hCLFlBQU1BLENBQU47QUFDQSxXQUFLRCxDQUFMLEdBQVNGLENBQVQ7QUFDRDs7QUFFREksSUFBQUEsRUFBRSxHQUFHO0FBQ0gsYUFBTyxLQUFLRixDQUFMLEdBQVMsS0FBS0EsQ0FBckI7QUFDRCxLQVJlOzs7QUFXbEIsUUFBTUcsRUFBTixDQUFTO0FBQ1BOLElBQUFBLFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJO0FBQ2IsV0FBS00sQ0FBTCxHQUFTTixDQUFUO0FBQ0Q7O0FBRURPLElBQUFBLEVBQUUsR0FBRztBQUNILGFBQU8sS0FBS0QsQ0FBTCxHQUFTLEtBQUtBLENBQXJCO0FBQ0QsS0FQTTs7QUFTVCxRQUFNQSxDQUFDLEdBQUdFLGdCQUFnQixDQUFDSCxFQUFELEVBQUssQ0FBQ0gsQ0FBRCxDQUFMLENBQTFCOztBQUVBLFFBQU1PLENBQUMsR0FBRyxJQUFJWCxDQUFKLENBQU0sQ0FBTixDQUFWO0FBQ0FZLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FB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QUFGLEVBQVo7O0FBRUEsUUFBTVcsQ0FBQyxHQUFHLElBQUlWLENBQUosQ0FBTSxDQUFDLENBQUQsQ0FBTixFQUFXLENBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFELENBQVgsQ0FBVjtBQUNBUSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsQ0FBWjtBQUNBRixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsQ0FBQyxDQUFDWCxFQUFGLEVBQVo7QUFDQVMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLENBQUMsQ0FBQ1IsRUFBRixFQUFaOztBQUVBLFFBQU1TLENBQUMsR0FBRyxJQUFJUCxDQUFKLENBQU0sQ0FBQyxDQUFELENBQU4sRUFBVyxDQUFDLENBQUMsQ0FBQyxDQUFELENBQUQsRUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBRCxDQUFOLENBQUQsQ0FBWCxDQUFWO0FBQ0FJLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxDQUFaO0FBQ0FILEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxDQUFDLENBQUNaLEVBQUYsRUFBWjtBQUNBUyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsQ0FBQyxDQUFDVCxFQUFGLEVBQVo7QUFDQU0sRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlFLENBQUMsQ0FBQ04sRUFBRixFQUFaO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJ7XG4gIC8vIEMgLT4+IEIgLT4gQVxuXG4gIGNsYXNzIEEge1xuICAgIGNvbnN0cnVjdG9yKHgpIHtcbiAgICAgIHRoaXMuQSA9IHhcbiAgICB9XG5cbiAgICBBQSgpIHtcbiAgICAgIHJldHVybiB0aGlzLkEgKyB0aGlzLkFcbiAgICB9XG4gIH1cblxuICBjbGFzcyBCIGV4dGVuZHMgQSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgc3VwZXIoeSlcbiAgICAgIHRoaXMuQiA9IHhcbiAgICB9XG5cbiAgICBCQigpIHtcbiAgICAgIHJldHVybiB0aGlzLkIgKyB0aGlzLkJcbiAgICB9XG4gIH1cblxuICBjbGFzcyBfQyB7XG4gICAgY29uc3RydWN0b3IoeCkge1xuICAgICAgdGhpcy5DID0geFxuICAgIH1cblxuICAgIENDKCkge1xuICAgICAgcmV0dXJuIHRoaXMuQyArIHRoaXMuQ1xuICAgIH1cbiAgfVxuICBjb25zdCBDID0gaW5oZXJpdHNNdWx0aXBsZShfQywgW0JdKVxuXG4gIGNvbnN0IGEgPSBuZXcgQSgxKVxuICBjb25zb2xlLmxvZyhhKVxuICBjb25zb2xlLmxvZyhhLkFBKCkpXG5cbiAgY29uc3QgYiA9IG5ldyBCKDIsIDEpXG4gIGNvbnNvbGUubG9nKGIpXG4gIGNvbnNvbGUubG9nKGIuQUEoKSlcbiAgY29uc29sZS5sb2coYi5CQigpKVxuXG4gIGNvbnN0IGMgPSBuZXcgQyhbM10sIFtbMiwgMV1dKVxuICBjb25zb2xlLmxvZyhjKVxuICBjb25zb2xlLmxvZyhjLkFBKCkpXG4gIGNvbnNvbGUubG9nKGMuQkIoKSlcbiAgY29uc29sZS5sb2coYy5DQygpKVxufVxuXG57XG4gIC8vIEMgLT4gQiAtPj4gQVxuXG4gIGNsYXNzIEEge1xuICAgIGNvbnN0cnVjdG9yKHgpIHtcbiAgICAgIHRoaXMuQSA9IHhcbiAgICB9XG5cbiAgICBBQSgpIHtcbiAgICAgIHJldHVybiB0aGlzLkEgKyB0aGlzLkFcbiAgICB9XG4gIH1cblxuICBjbGFzcyBfQiB7XG4gICAgY29uc3RydWN0b3IoeCkge1xuICAgICAgdGhpcy5CID0geFxuICAgIH1cblxuICAgIEJCKCkge1xuICAgICAgcmV0dXJuIHRoaXMuQiArIHRoaXMuQlxuICAgIH1cbiAgfVxuICBjb25zdCBCID0gaW5oZXJpdHNNdWx0aXBsZShfQiwgW0FdKVxuXG4gIGNsYXNzIEMgZXh0ZW5kcyBCIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KSB7XG4gICAgICBzdXBlcih5LCB6KVxuICAgICAgdGhpcy5DID0geFxuICAgIH1cblxuICAgIENDKCkge1xuICAgICAgcmV0dXJuIHRoaXMuQyArIHRoaXMuQ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGEgPSBuZXcgQSgxKVxuICBjb25zb2xlLmxvZyhhKVxuICBjb25zb2xlLmxvZyhhLkFBKCkpXG5cbiAgY29uc3QgYiA9IG5ldyBCKFsyXSwgW1sxXV0pXG4gIGNvbnNvbGUubG9nKGIpXG4gIGNvbnNvbGUubG9nKGIuQUEoKSlcbiAgY29uc29sZS5sb2coYi5CQigpKVxuXG4gIGNvbnN0IGMgPSBuZXcgQygzLCBbMl0sIFtbMV1dKVxuICBjb25zb2xlLmxvZyhjKVxuICBjb25zb2xlLmxvZyhjLkFBKCkpXG4gIGNvbnNvbGUubG9nKGMuQkIoKSlcbiAgY29uc29sZS5sb2coYy5DQygpKVxufVxuXG4vLyBDIC0+PiBCIC0+PiBBXG57XG4gIGNsYXNzIF9BIHtcbiAgICBjb25zdHJ1Y3Rvcih4KSB7XG4gICAgICB0aGlzLkEgPSB4XG4gICAgfVxuXG4gICAgQUEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5BICsgdGhpcy5BXG4gICAgfVxuICB9XG4gIGNvbnN0IEEgPSBpbmhlcml0c011bHRpcGxlKF9BLCBbXSlcblxuICBjbGFzcyBfQiB7XG4gICAgY29uc3RydWN0b3IoeCkge1xuICAgICAgdGhpcy5CID0geFxuICAgIH1cblxuICAgIEJCKCkge1xuICAgICAgcmV0dXJuIHRoaXMuQiArIHRoaXMuQlxuICAgIH1cbiAgfVxuICBjb25zdCBCID0gaW5oZXJpdHNNdWx0aXBsZShfQiwgW0FdKVxuXG4gIGNsYXNzIF9DIHtcbiAgICBjb25zdHJ1Y3Rvcih4KSB7XG4gICAgICB0aGlzLkMgPSB4XG4gICAgfVxuXG4gICAgQ0MoKSB7XG4gICAgICByZXR1cm4gdGhpcy5DICsgdGhpcy5DXG4gICAgfVxuICB9XG4gIGNvbnN0IEMgPSBpbmhlcml0c011bHRpcGxlKF9DLCBbQl0pXG5cbiAgY29uc3QgYSA9IG5ldyBBKFsxXSwgW10pXG4gIGNvbnNvbGUubG9nKGEpXG4gIGNvbnNvbGUubG9nKGEuQUEoKSlcblxuICBjb25zdCBiID0gbmV3IEIoWzJdLCBbW1sxXV1dKVxuICBjb25zb2xlLmxvZyhiKVxuICBjb25zb2xlLmxvZyhiLkFBKCkpXG4gIGNvbnNvbGUubG9nKGIuQkIoKSlcblxuICBjb25zdCBjID0gbmV3IEMoWzNdLCBbW1syXSwgW1tbMV1dXV1dKVxuICBjb25zb2xlLmxvZyhjKVxuICBjb25zb2xlLmxvZyhjLkFBKCkpXG4gIGNvbnNvbGUubG9nKGMuQkIoKSlcbiAgY29uc29sZS5sb2coYy5DQygpKVxufVxuIl19