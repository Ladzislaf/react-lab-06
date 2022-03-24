import React, {useEffect, useState} from 'react'
import SignUpForm from "./Form/SignUpForm";


const StudentInfo = () => {
    const [studentInfo, setStudentInfo] = useState()

    // useEffect(() => {
    //     alert(studentInfo.fio)
    // }, [studentInfo])

    const onChangeHandle = (student) => {
        setStudentInfo(student)
        console.log(studentInfo)
    }

    return (
        <>
            <SignUpForm getInfo={onChangeHandle}/>
        </>
    )
}

export default StudentInfo