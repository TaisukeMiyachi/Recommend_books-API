//googlebooksAPIへのリンク//////////////////////////////////////////

// const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:ベクトル"

// axios.get(url)
//     .then(function (response) {
//         console.log(response.data)
//     })

//参加生徒追加///////////////////////////////////////////////////////////
let student = ["", "秋山好古", "秋山真之", "夏目金之助", "児玉源太郎", "乃木希典"];

$(document).ready(function () {

    const studentname_array = [];
    for (let i = 0; i < student.length; i++) {
        studentname_array.push(`<option>` + student[i] + `</option>`);
    }

    console.log(studentname_array)
    $("#studentName").html(studentname_array);
});




