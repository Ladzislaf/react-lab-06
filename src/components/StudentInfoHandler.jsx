import React from 'react'

const StudentInfoHandler = ({info}) => {
    const {
        name,
        surname,
        secondName,
        day,
        month,
        year,
        enterYear,
        faculty,
        group,
        spec,
        email,
        phoneNumber
    } = info

    let age = ''
    const dateOfBirth = new Date(Number(year), Number(month), Number(day))
    if (day && month && year)
        age = Math.floor((new Date() - dateOfBirth) / (24 * 3600 * 365.25 * 1000))

    let studCourse = ''
    if (enterYear)
        studCourse = new Date().getFullYear() - enterYear

    let emailOperator = ''
    if (email) emailOperator = email.split('@').pop()

    let phoneOperator = ''
    if (phoneNumber) {
        if (phoneNumber.match(/\+375 \(29\) [1369]/) || phoneNumber.match(/\+375 \(44\)/))
            phoneOperator = 'A1 (Velcom)'
        if (phoneNumber.match(/\+375 \(29\) [2578]/) || phoneNumber.match(/\+375 \(33\)/))
            phoneOperator = 'MTC'
        if (phoneNumber.match(/\+375 \(25\)/))
            phoneOperator = 'Life:)'
        if (phoneNumber.match(/\+375 \(17\)/))
            phoneOperator = 'Beltelecom'
    }

    // TODO: добавить кроме +375, еще и обработку 8029...
    return (
        <table>
            <tbody>
            <tr>
                <td>FIO</td>
                <td>{surname} {name} {secondName}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{age}</td>
            </tr>
            <tr>
                <td>Faculty, course, group</td>
                <td>{faculty} {studCourse} {group}</td>
            </tr>
            <tr>
                <td>Speciality</td>
                <td>{spec}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{email}</td>
            </tr>
            <tr>
                <td>Email operator</td>
                <td>{emailOperator}</td>
            </tr>
            <tr>
                <td>Phone number</td>
                <td>{phoneNumber}</td>
            </tr>
            <tr>
                <td>Phone operator</td>
                <td>{phoneOperator}</td>
            </tr>
            </tbody>
        </table>
    )
}

export default StudentInfoHandler