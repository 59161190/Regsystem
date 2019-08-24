function Student(id){
    this.id = id
    this.getTimetable = () =>{
        return [
            {
                subjectNo : "001" , 
                subjectName:"Software Test",
                startTime:"10:00",
                endTime:"12:00",
                day:"Monday"
            }
        ]
    }
}
function getStudent(id){
    return new Student(id)
}
module.exports.getStudent = getStudent