function ddd(tagetClass: { new (...args: any[]): C }) {
  console.log(tagetClass.name);
}
class C {
  constructor() {
    console.log("fdsafdsa");
  }
}
@ddd
class D {
  static someThing = "DDDD";
  constructor(public name: string = "22") {}
  showName() {
    console.log(this.name);
  }
}

const f = new D();
console.log(f, "ffffe");
