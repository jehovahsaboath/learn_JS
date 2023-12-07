
// function functionname() {

//     //  this is how to declear a function  to do a specitic  task  

// }

// functionname()


class student {

    name = "speeddy"
    place = "batumi"
    add = "tbilisi"
    course = "biology"

        printdata(){

            console.log(this.student)
        }

        // studentdetails(){

        //     student.place = "batumi",
        //     student.add = "tbilisi",
        //     student.course = "biology"
        // }

         printdetails() {

                console.log(this.name, this.place, this.add, this.course)
            }
        
}


   let student1 = new student()

   console.log(student1.printdetails)




