
const petia = {
    username: "Petya",
    showName() {
    console.log(petia.username);
    },
};

petia.showName();

const petya = {
    username: "Petya",
    showName() {
    console.log(this.username);
    },
};

petya.showName();