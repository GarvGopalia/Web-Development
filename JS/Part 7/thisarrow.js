<<<<<<< HEAD
const student1 = {
    name: "garv",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this); //student
        },2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this); //window
        },2000);
    }
=======
const student1 = {
    name: "garv",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this); //student
        },2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this); //window
        },2000);
    }
>>>>>>> origin/main
}