var array = []
const button =document.getElementById('btn')
const grade =document.getElementById('grade')
const studentName =document.getElementById('name')
const section = document.getElementById('section')
const average = document.getElementById('average')
console.log(average)


button.addEventListener('click',(e)=>{
  e.preventDefault()
  var grad = grade.value
  var gra = parseInt(grad)
  var nam = studentName.value
  const gram ={
    studentNo:nam,
    score:gra
  }
  array.push(gram)
console.log(array)
var displayArray = array.map((are)=>{
    return`<p>${are.studentNo} ${are.score}</p>`
 })
displayArray = displayArray.join("")
section.innerHTML = displayArray
grade.value=''
let mark =0
studentName.value=''
for (let i = 0; i < array.length; i++) {
 mark += array[i].score   
    
}
var mar = mark/array.length
 console.log(mar)
 
 average.innerHTML = `the average score of the ${array.length} total no of student is ${mar}` 
})




