const eventObj = {
  name: "birthday party",
  guestList: ["Andrew", "jen", "mike"],
  printGuestList() {
    // console.log(this);
    console.log("Guest ist for", this.name);
    const that = this;
    this.guestList.forEach(function (guestName) {
      console.log(that);
      console.log(guestName);
    });
  },
};

eventObj.printGuestList();
