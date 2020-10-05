// Student Grade Calculator

"use strict"

function $(selector) {
    return document.querySelector(selector);
}

var bttn = $('.submit_btn');

bttn.addEventListener('click', function grade_calc(e) {
    e.preventDefault();
    var bangNum = parseInt($('#bang').value);
    var engNum = parseInt($('#eng').value);
    var mathNum = parseInt($('#math').value);
    var phyNum = parseInt($('#phy').value);
    var chemNum = parseInt($('#chem').value);
    var bioNum = parseInt($('#bio').value);

    function subjectPoint(inp_val) {
        var gradePoint;
        var grade;
        if (inp_val >= 80 && inp_val <= 100) {
            return gradePoint = 5;


        } else if (inp_val >= 70 && inp_val <= 79) {
            return gradePoint = 4;

        } else if (inp_val >= 60 && inp_val <= 69) {
            return gradePoint = 3;

        } else if (inp_val >= 50 && inp_val <= 59) {
            return gradePoint = 2;

        } else if (inp_val >= 33 && inp_val <= 49) {
            return gradePoint = 1;

        } else {
            return gradePoint = 0;
        }
    }

    function subjectGrade(inp_val) {
        var grade;
        if (inp_val >= 80 && inp_val <= 100) {
            return grade = "A+";

        } else if (inp_val >= 70 && inp_val <= 79) {
            return grade = "A";

        } else if (inp_val >= 60 && inp_val <= 69) {
            return grade = "B";

        } else if (inp_val >= 50 && inp_val <= 59) {
            return grade = "C";

        } else if (inp_val >= 33 && inp_val <= 49) {
            return grade = "D";

        } else {
            return grade = "F";
        }
    }


    // let totalNum = bangNum + engNum + mathNum + phyNum + chemNum + bioNum;
    let totalgrade = subjectPoint(bangNum) + subjectPoint(engNum) + subjectPoint(phyNum) + subjectPoint(chemNum) + subjectPoint(mathNum) + subjectPoint(bioNum);
    let finalGPA = totalgrade / 6

    // Show input field Value
    $('.bang_num').innerText = bangNum;
    $('.eng_num').innerText = engNum;
    $('.math_num').innerText = mathNum;
    $('.phy_num').innerText = phyNum;
    $('.chem_num').innerText = chemNum;
    $('.bio_num').innerText = bioNum;


    // Show GradePoint
    $('.bang_grade').innerText = subjectPoint(bangNum);
    $('.eng_grade').innerText = subjectPoint(engNum);
    $('.math_grade').innerText = subjectPoint(mathNum);
    $('.phy_grade').innerText = subjectPoint(phyNum);
    $('.chem_grade').innerText = subjectPoint(chemNum);
    $('.bio_grade').innerText = subjectPoint(bioNum);

    // Show grade
    $('.bang_num').innerText = subjectGrade(bangNum);
    $('.eng_num').innerText = subjectGrade(engNum);
    $('.math_num').innerText = subjectGrade(mathNum);
    $('.phy_num').innerText = subjectGrade(phyNum);
    $('.chem_num').innerText = subjectGrade(chemNum);
    $('.bio_num').innerText = subjectGrade(bioNum);

    // Show total Number
    // $('.total_num').innerText = totalNum;


    if (finalGPA >= 5) {
        $('.total_GPA').innerText  = "A+";
    } else if (finalGPA < 5 && finalGPA > 4) {
        $('.total_GPA').innerText = "A";
    } else if (finalGPA < 4 && finalGPA >= 3.5) {
        $('.total_GPA').innerText = "A-";
    } else if (finalGPA < 3.5 && finalGPA >= 3) {
        $('.total_GPA').innerText = "B";
    } else if (finalGPA < 3 && finalGPA >= 2) {
        $('.total_GPA').innerText = "C";
    } else if (finalGPA < 2 && finalGPA >= 1) {
        $('.total_GPA').innerText = "D";
    } else {
        $('.total_GPA').innerText = "F";
    }
    $('.total_gradepoint').innerText = finalGPA;



});