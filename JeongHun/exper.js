class AAA {
  state = {
    name: 'kim'
  };


  func = ()=> {
    const {name} = this.state;
    console.log(name);

  }
}

var c = new AAA();
c.func();