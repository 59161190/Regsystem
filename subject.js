let subjects = [
    { subjectNo:"001" , subjectName : "Soft Test" , gruop : 1 , unit : 3}
]

function Subject(id){
    this.id = id
    this.unit = null
    this.subjectNo = null
    this.subjectName = null

}

function getSubject(id){
    return new Subject(id)
}
function search(subjectNo){
    return subjects
}
module.exports.getSubject = getSubject
module.exports.search = search
