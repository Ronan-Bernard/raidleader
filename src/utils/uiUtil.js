module.exports = {
  isOverElement: function(e, elementId) {
    let item = document.getElementById(elementId);
    return (item.offsetLeft <= e.clientX
      && e.clientX <= (item.offsetLeft + item.offsetWidth)
      && item.offsetTop <= e.clientY
      && e.clientY <= (item.offsetTop + item.offsetHeight));
  },
  playersListIndexForSlot(slotId) {
    let numericOnly = slotId.substr(6);
    return (parseInt(numericOnly, 10) - 1);
  }
};
