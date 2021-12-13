let aaa = { a: { c: "ths", d: "tts" }, b: "ttt" };

console.log(aaa["a"]["d"]);

const change = (state, key) => {
  return {
    ...state,
    [key]: state[key].c,
  };
};

console.log(change(aaa, "a"));
