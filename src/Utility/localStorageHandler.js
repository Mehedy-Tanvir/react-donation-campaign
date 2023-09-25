const addToLs = (id) => {
  let donations = getFromLs() || [];
  donations.push(id);
  let donationsStr = JSON.stringify(donations);
  localStorage.setItem("donations", donationsStr);
};

const getFromLs = () => {
  let donationsStr = localStorage.getItem("donations");
  let donations = JSON.parse(donationsStr);
  return donations;
};
export { addToLs, getFromLs };
