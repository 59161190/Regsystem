const express = require("express");
const app =express()
const student = require('./student')
const subject = require('./subject')
app.get('/student/:id/timetable',(req,res)=>{
    let s = student.getStudent(req.param.id);
    let timetable = s.getTimetable()
    res.send(timetable)
})
app.get('/subjects',(req,res)=>{
    let subjectNo = req.query.subjectNo
    let subjects = subject.search(subjectNo)
    res.send(subjects)
})
module.exports = app
