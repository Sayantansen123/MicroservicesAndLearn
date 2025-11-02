obj = {
  abc: 123,
  def: 456,
  pqs: {
    xyz: 789,
    sxx: 987,
  },
};

const { abc: a, def, pqs: p } = obj;
console.log(abc, def, p);
