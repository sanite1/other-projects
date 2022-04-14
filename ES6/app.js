
let name = "collins";
console.log(`Welcome, ${name}`);

let coll = 89;
console.log(name, coll);

const arr = [1,2,4,5,7,8];
const arr1 = arr.map((item) => {
    return item*2;
});

console.log(`New array = ${arr1}`);

let arr2 = arr.reduce((acc, item) => {
    return acc + item;
}, 0);

console.log(`New array = ${arr2}`);

let arr3 = arr.filter((item) => {
    return item%2===0;
})

console.log(`New array = ${arr3}`);

class Land {
    constructor(rad, len, bre) {
        this.length = len;
        this.breadth = bre;
        this.radius = rad;
    }
}

class Wilson extends Land{
    constructor(name, age, rad) {
        super(rad, 0, 0);
        this.name = name;
        this.age = age;
    }
    getInfo = () => {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Shape of land: Circle`);
        console.log(`Are: ${this.radius * this.radius * 3.142}`);
    }
}

let wilso = new Wilson("Wilson", 16, 7);
 wilso.getInfo();

 let myObjs = [{
         fname: "Collins",
         lname: "Sanni",
         age: 19
     },{
         fname: "Steve",
         lname: "Sanni",
         age: 21
     },{
        fname: "Wilson",
        lname: "Sanni",
        age: 16
    }
 ]

 let myObjs2 = [...myObjs];
 console.log(myObjs2);
let myObjs3 = myObjs2.map((items) => {
    return {
        fname: items.fname,
        lname: items.lname,
        age: items.age,
        occpation: "Student"
    }
});

console.log(myObjs3);

let [a, b, c] = myObjs3;
console.log(a, c);

let {fname, lname} = myObjs3[0];
console.log(fname, lname);


console.log("******************************************************************************************************");
console.log("******************************************************************************************************");
console.log("******************************************************************************************************");
console.log("******************************************************************************************************");
console.log("******************************************************************************************************");
console.log("******************************************************************************************************");
console.log("******************************************************************************************************");



const getList = new Promise((resolve, reject) => {
    console.log(`SENDING LIST DETAILS`);
    $.get("https://jsonplaceholder.typicode.com/todos", (data) => {
        
        resolve(data);
    }).fail(err => {
        // console.log(err);
        reject(new Error(`${err}`));
    })
});


// You have to make the second promis a function
const getListComments = (data) => new Promise((resolve, reject) => {
    console.log(`SENDING COMMENTS DETAILS`);
    $.get("https://jsonplaceholder.typicode.com/posts/1/comments", (data) => {
        
        resolve(data);
    }).fail(err => {
        // console.log(err);
        reject(new Error(`${err}`));
    });
});

const getListPost = (data) => new Promise((resolve, reject) => {
    console.log(`SENDING POST DETAILS`);
    $.get("https://jsonplaceholder.typicode.com/posts/1/comments", (data) => {
        
        resolve(data);
    }).fail(err => {
        // console.log(err);
        reject(new Error(`${err}`));
    });
})

getList
.then(getListComments)
.then(getListPost)
.then((res) => {
    let newRes = res.map((item) => {
        return item.body;
    })
    console.log(newRes);
})
.catch((res) => {
    // res parameter is collected from the reject function
    console.log("Unsuccessful...");
    console.log(res);
});


