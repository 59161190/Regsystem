const request = require('supertest')
const chai = require('chai')
const app =require('../app')
chai.should()

describe("Reg API",()=>{
    describe('Get /student/:id/timetable',()=>{
        it('should return timetable', (done)=>{
            request(app).get('/student/1/timetable')
            .expect(200)
            .end((err,res)=>{
                let timetable =res.body
                timetable.should.be.an('array')
                let subject = timetable[0]
                subject.should.have.property('subjectNo')
                subject.should.have.property('subjectName')
                subject.should.have.property('startTime')
                subject.should.have.property('endTime')
                subject.should.have.property('day')
                done() 
            })
        })

    })
    describe('Get /subject',()=>{
        it('should return subject with groups when search with subject on.', (done)=>{
            request(app).get('/subjects?subjectNo=001')
            .expect(200)
            .end((err,res)=>{
                let subjects = res.body
                subjects.should.be.an('array')

                let s =subjects[0]
                s.should.have.property('subjectNo')
                s.subjectNo.should.to.equal('001')
                done()
            })
        })

    })

})


