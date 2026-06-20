// // console.log("welcome students")
// // // var a=10
// // // var b="10"
// // // console.log(a===b)
// // // var name ="Anushna"
// // // var name ="Arun"
// // name ="pranthi"
// // console.log(name)
// // var name="kumar"
// // console.log(name)
// // name ="aruna"
// // console.log(name)

// // // function greet () {
// // //     var a = "welcome"
// // //     console.log(a)
// // // }
// // // console.log(c)
// // // console.log(a)

// // // if(true){
// // //     let c = 100
// // //     console.log(c)
// // // }


// // // let a = 10
// // // a = 10

// // // const a = 10
// // // a = 10

// // //question: take 3 numbers and print which one is greater among them
// // let a = 10;
// // let b = 25;
// // let c = 15;

// // if (a > b && a > c) {
// //     console.log(a + " is the greatest number");
// // }
// // else if (b > a && b > c) {
// //     console.log(b + " is the greatest number");
// // }
// // else {
// //     console.log(c + " is the greatest number");
// // }

// // //question: check wheather a person is having driving license or not 
// // let age = 20;
// // let hasLicense = true;

// // if (age >= 18) {
// //     if (hasLicense) {
// //         console.log("You can drive.");
// //     } else {
// //         console.log("You are eligible for a license but do not have one.");
// //     }
// // } else {
// //     console.log("You are not eligible to drive.");
// // }


// // const arr =["Anushna","Devayani","Pranathi"]
// // for(let name of arr){
// //     console.log(name)
// // }

// // const obj = [{
// //     name: "samsung A50",
// //     disc: "stylish phone",
// //     price: 25000
// // },{
// //     name: "vivo edge",
// //     disc: "stylish phone",
// //     price: 13000
// // },{
// //     name: "realme A 30",
// //     disc: "stylish phone",
// //     price: 44000
// // }]

// // //function declaration
// // mern()
// // function mern(){
// // console.log("welcome to mern stack frontend")
// // }
// // //mern()

// // //function expression
// // //function()
// // const frontend = function(){
// //     console.log("lets start frontend")
// //     return "frontend completed"
// // }


// // //arrow function --> introduced to ES6
// // const fullstack =()=>{
// //     console.log("learning full stack")
// //     return "fullstack completed"
// // }
// // const backend = () => "backend completed"
// // const b =backend()
// // console.log(b)


// // //callback function 

// // const higherorderfunction =(a) => {
// //     console.log("you are in HOF")
// // a()
// // }
// // const callbackfunction = ()=> {
// //     console.log("Im in callback function")
// // }
// // higherorderfunction(callbackfunction)


// //array methods
// //push 
//  //const arr = [10,4,8,29,4,38]
//  //console.log(arr.push(6))
// //console.log(arr)

// // //pop
// // console.log(arr.pop(6))
// // console.log(arr)

// // //unshift
// // console.log(arr.unshift("anu"))
// // console.log(arr)

// // //shift
// // console.log(arr.shift("anu"))
// // console.log(arr)

// // const arr2 =[10,"anu",76,23,"dev"]
// // arr2.splice(2,1)
// // console.log(arr2)
// // arr2.splice(0,2,"karthik")
// // console.log(arr2)

// // const arr3 = ["arr","dev","anushna"]
// // console.log(arr3.indexOf("anushna"))


// //find()
// //   const arr=[
// //       {
// //          rollno:"24AG1A05P5",
// //          name:"ANUSHNA",       
// //          department: "CSE"
// //      },
// //      {
// //          rollno:"24AG1A05P5",
// //         name:"DEVAYANI",
// //           department: "CSE"
// //       },
// //      {
// //          rollno:"24AG1A05P5",
// //          name:"PRANATHI",
// //         department: "CSE"
// //      },
// //      {
// //          rollno:"24AG1A05P5",
// //          name:"VAMSHI",
// //         department: "CSM"
// //      },
// //            {         
// //              rollno:"24AG1A05P5",
// //          name:"ARUN",
// //         department: "CSM"
// //       }

// //  ]

// //  const studentreport = arr.find(
// //  s => s.name === "anushna"
// //  )
// //  console.log(studentreport) 

//  //map()
// //   const modarr =arr.map(student =>student.name)
// //   console.log(modarr)
// //   const arrx = [2,50,18]
// //   const modarrx = arrx.map(element => element +5)
// //   console.log(modarrx)
  
// // //REDUCE()
// // const marks = [24,36,47,29,40,53]
// // const total =marks.reduce(
// //     (sum,sub)=> sum+sub , 0
// // )
// // console.log(total) 

// //sort()
// // const arr =[67,29,10,40,29,47]
// // arr.sort()
// // // console.log(arr)
// // // arr.sort(
// // //     (a,b)=> a-b
// // // )
// // // console.log(arr)

// // const students = [
// //   { rollNo: 101, name: "Arun", department: "CSE", marks: 85 },
// //   { rollNo: 102, name: "Ravi", department: "CSD", marks: 22 },
// //   { rollNo: 103, name: "Sita", department: "CSM", marks: 78 },
// //   { rollNo: 104, name: "Kiran", department: "IT", marks: 45 },
// //   { rollNo: 105, name: "Priya", department: "CSO", marks: 91 },

// //   { rollNo: 106, name: "Rahul", department: "CSE", marks: 30 },
// //   { rollNo: 107, name: "Sneha", department: "CSD", marks: 67 },
// //   { rollNo: 108, name: "Teja", department: "CSM", marks: 55 },
// //   { rollNo: 109, name: "Divya", department: "IT", marks: 29 },
// //   { rollNo: 110, name: "Ajay", department: "CSO", marks: 72 },

// //   { rollNo: 111, name: "Anil", department: "CSE", marks: 95 },
// //   { rollNo: 112, name: "Meena", department: "CSD", marks: 41 },
// //   { rollNo: 113, name: "Vamsi", department: "CSM", marks: 18 },
// //   { rollNo: 114, name: "Nisha", department: "IT", marks: 88 },
// //   { rollNo: 115, name: "Kavya", department: "CSO", marks: 36 },

// //   { rollNo: 116, name: "Ramesh", department: "CSE", marks: 50 },
// //   { rollNo: 117, name: "Pooja", department: "CSD", marks: 93 },
// //   { rollNo: 118, name: "Tarun", department: "CSM", marks: 34 },
// //   { rollNo: 119, name: "Deepika", department: "IT", marks: 62 },
// //   { rollNo: 120, name: "Manoj", department: "CSO", marks: 28 },

// //   { rollNo: 121, name: "Lokesh", department: "CSE", marks: 74 },
// //   { rollNo: 122, name: "Anusha", department: "CSD", marks: 81 },
// //   { rollNo: 123, name: "Sai", department: "CSM", marks: 39 },
// //   { rollNo: 124, name: "Harika", department: "IT", marks: 27 },
// //   { rollNo: 125, name: "Keerthi", department: "CSO", marks: 58 },

// //   { rollNo: 126, name: "Bhanu", department: "CSE", marks: 33 },
// //   { rollNo: 127, name: "Mahesh", department: "CSD", marks: 46 },
// //   { rollNo: 128, name: "Jyothi", department: "CSM", marks: 87 },
// //   { rollNo: 129, name: "Chandu", department: "IT", marks: 53 },
// //   { rollNo: 130, name: "Suresh", department: "CSO", marks: 20 }
// // ];

// // const passedStudents = students.filter(student => student.marks >= 35)
// // console.log(passedStudents)
// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85, placed: true, package: 12 },
//   { rollNo: 102, name: "Ravi", department: "IT", marks: 65, placed: false, package: 0 },
//   { rollNo: 103, name: "Sita", department: "CSD", marks: 92, placed: true, package: 15 },
//   { rollNo: 104, name: "Rahul", department: "CSM", marks: 55, placed: true, package: 6 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 88, placed: true, package: 18 },
//   { rollNo: 106, name: "Ajay", department: "CSE", marks: 72, placed: false, package: 0 },
//   { rollNo: 107, name: "Sneha", department: "IT", marks: 81, placed: true, package: 10 },
//   { rollNo: 108, name: "Kiran", department: "CSD", marks: 49, placed: false, package: 0 },
//   { rollNo: 109, name: "Deepika", department: "CSM", marks: 90, placed: true, package: 14 },
//   { rollNo: 110, name: "Manoj", department: "CSO", marks: 76, placed: true, package: 8 }
// ];

// // const placedstudents = students.filter(student => student.placed)
// // console.log(placedstudents)

// const placedstudents = students.filter(student => student.package)
// console.log(placedstudents)

// const placedstudentsnames = placedstudents.map(student =>({
//     name: student.name,
//     package: student.package
// })) 
// console.log(placedstudentsnames)

// const totalpackage = placedstudentsnames.reduce((sum,student) => sum + student.package,0)
// const averagepackage = totalpackage / placedstudents.length
// console.log(averagepackage)

// // const highestpackage = placedstudentsnames.reduce((max,student) => max>+ student.package ? max :)
// // console.log(highestpackage)

// const morethen101pastudents = placedstudentsnames.filter(student=>student.package > 10)
// console.log(morethen101pastudents)


let iscolor=false
let p = document.createElement("p")
p.innertext="like"
const container = document.getElementById("container")
const paragraph = document.getElementById("paragraph")
function heartcolorchange(){
    const heart =document.getElementById("heart")
    if(iscolor){
        heart.src ="https://media.istockphoto.com/id/1903985199/vector/heart-flat-icon.jpg?s=612x612&w=0&k=20&c=FOAQ1kofne38dLzm6C6vBE39nY9fynVBpQb7UcDW7gk="
        iscolor = false
        p.innertext="dislike"
        container.appendchild(p)
    }
    else{
        heart.src ="https://www.clipartmax.com/png/middle/12-123476_lofty-design-heart-images-clip-art-clipart-outline-heart-shape-vector-free.png"
        iscolor= true
        p.innertext="like"
    }
}



