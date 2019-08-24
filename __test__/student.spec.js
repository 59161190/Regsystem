const expect = require('chai').expect
const student =require('../student')
describe('Student', ()=>{
    describe('timetable',()=>{
        it('should return list of subjects with timetable',()=>{
            let s= student.getStudent(1)
            let timetable = s.getTimetable()
            expect(timetable).to.be.an('array')
        })
    })
})
