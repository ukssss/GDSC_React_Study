class CA {
  constructor() {
    this.name = "JeongHun";
  }
  func1() {
    console.log(this.name)
  }

  func2 =() => {
    console.log(this.name)
  }
}

var class1 = new CA();

class1.func1();
class1.func2()