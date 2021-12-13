const { row } = { row: { data: { a: "123", b: "234", c } } };
console.log(row);

function create({ ttt }) {
  let createStore = {
    foo: function () {
      console.log(ttt);
    },
    bar: function () {
      console.log(ttt);
    },
  };

  return createStore;
}

create({ ttt: "777" }).foo();
create({ ttt: "888" }).bar();
create(row).foo();
