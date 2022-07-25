const roles = {
	admin: "https://cdn-icons-png.flaticon.com/512/1424/1424453.png",
	student: "https://cdn-icons-png.flaticon.com/512/1424/1424424.png",
	lector: "https://cdn-icons-png.flaticon.com/512/1424/1424450.png"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "https://cdn-icons-png.flaticon.com/512/2922/2922522.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "https://cdn-icons-png.flaticon.com/512/2922/2922656.png",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "https://cdn-icons-png.flaticon.com/512/2922/2922661.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "https://cdn-icons-png.flaticon.com/512/2922/2922688.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "https://cdn-icons-png.flaticon.com/512/2922/2922565.png",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "https://cdn-icons-png.flaticon.com/512/2922/2922719.png",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 25
			}
		]
	}
]

// debugger
class User {
    constructor(img, name, age, role, courses, roleImg) {
        // debugger
        this.img = img;
        this.name = name;
        this.age = age;
        this.role = role;
        this.courses = courses;
        this.roleImg = roleImg;
    }
    render() {
        document.write(`<div class = "main">
		<div class = "table">
			<div>Name:${this.name}</div> 
			<div> Age:${this.age}</div> 
				<div class = "person-img">
				<div><img src = "${this.img}" alt = "${this.img}" width = 100px> </div>
				<div class = "role-img"><img src = "${this.roleImg}" width = 50px alt = "${this.roleImg}">${this.role}</div>
				</div>
		</div>
		</div>`);
    }

    renderCourses() {}
}

// debugger
class Student extends User {
    constructor(img, name, age, role, title, mark) {
        super(img, name, age, role, title, mark);
        this.mark = studentMark;
        this.title = studentTitle;
    }

    renderCourses(studentTitle, studentMark) {
        // debugger
        super.renderCourses();
        document.write(`
		<div class = "courses">
		<div>${studentTitle}</div>
		<div>${studentMark}</div>
		</div>
		`);
    }
}

class Admin extends User {
    constructor(img, name, age, role, title, score, lector) {
        super(img, name, age, role, title, score, lector);
        this.score = adminScore;
        this.title = adminTitle;
        this.lector = adminLector;
    }

    renderCourses(adminTitle, adminScore, adminLector) {
        super.renderCourses();
        document.write(`
		<div class = "courses">
			<div class = "admin-courses">
			<div>Title:${adminTitle}</div>
			<div>Admin's score: ${adminScore}</div>
			<div>Lector:${adminLector}</div>
			</div>
		</div>
		`);
    }
}
class Lector extends User {
    constructor(img, name, age, role, title, score, studentsScore) {
        super(img, name, age, role, title, score, studentsScore);
        this.score = lectorScore;
        this.title = lectorTitle;
        this.studentsScore = studentsScore;
    }

    renderCourses(lectorScore, lectorTitle, studentsScore) {
        super.renderCourses();
        document.write(`
			<div class = "courses">
			<div class = "admin-courses">
				<div>Title:${lectorTitle}</div>
				<div>Lector's score:${lectorScore}</div>
				<div>Average student's score:${studentsScore}</div>
				</div>
			</div>
			`);
    }
}

let student;
let studentMark;
let studentTitle;
users.forEach(function (user) {
    // debugger
    if (user.role === "student") {
        user.roleImg = roles[user.role];
        student = new Student(user.img, user.name, user.age, user.role, user.courses, user.roleImg);
        student.render();
        getStudent(student);
    }
});
// debugger

function getStudent(student) {
    // debugger
    for (let key in student) {
        if (key === "courses" && typeof student[key] != "undefined") {
            student[key].forEach(function (arr) {
                // debugger
                studentMark = arr.mark;
                studentTitle = arr.title;
                if (arr.mark <= 20) {
                    studentMark = gradation[20];
                    studentTitle = arr.title;
                }
                if (arr.mark > 20 && arr.mark <= 55) {
                    studentMark = gradation[55];
                    studentTitle = arr.title;
                }
                if (arr.mark > 55 && arr.mark <= 85) {
                    studentMark = gradation[85];
                    studentTitle = arr.title;
                }
                if (arr.mark > 85 && arr.mark >= 100) {
                    studentMark = gradation[100];
                    studentTitle = arr.title;
                }
                student.renderCourses(studentTitle, studentMark);
            });
        } else {
            studentMark = "";
            studentTitle = "";
        }
    }
}

let admin;
let adminScore;
let adminTitle;
let adminLector;
users.forEach(function (user) {
    if (user.role === "admin") {
        user.roleImg = roles[user.role];
        admin = new Admin(user.img, user.name, user.age, user.role, user.courses, user.roleImg);
        admin.render();
        getAdmin(admin);
    }
});
function getAdmin(admin) {
    // debugger
    for (let key in admin) {
        if (key === "courses" && typeof admin[key] != "undefined") {
            admin[key].forEach(function (arr) {
                // debugger
                adminLector = arr.lector;
                adminScore = arr.score;
                adminTitle = arr.title;
                if (arr.score <= 20) {
                    adminScore = gradation[20];
                    adminLector = arr.lector;
                    adminTitle = arr.title;
                }
                if (arr.score > 20 && arr.score <= 55) {
                    adminScore = gradation[55];
                    adminLector = arr.lector;
                    adminTitle = arr.title;
                }
                if (arr.score > 55 && arr.score <= 85) {
                    adminScore = gradation[85];
                    adminLector = arr.lector;
                    adminTitle = arr.title;
                }
                if (arr.score > 85 && arr.score >= 100) {
                    adminScore = gradation[100];
                    adminLector = arr.lector;
                    adminTitle = arr.title;
                }
                admin.renderCourses(adminTitle, adminScore, adminLector);
            });
        } else {
            adminScore = "";
            adminTitle = "";
            adminLector = "";
        }
    }
}

let lector;
let lectorScore;
let lectorTitle;
let studentsScore;
users.forEach(function (user) {
    if (user.role === "lector") {
        user.roleImg = roles[user.role];
        lector = new Lector(user.img, user.name, user.age, user.role, user.courses, user.roleImg);
        lector.render();
        getLector(lector);
    }
});

function getLector(lector) {
    // debugger
    for (let key in lector) {
        if (key === "courses" && typeof lector[key] != "undefined") {
            lector[key].forEach(function (arr) {
                // debugger
                lectorScore = arr.score;
                let lectorTitle = arr.title;
                if ((arr.score <= 20, arr.studentsScore <= 20)) {
                    lectorTitle = arr.title;
                    lectorScore = gradation[20];
                    studentsScore = gradation[20];
                }
                if ((arr.score > 20 && arr.score <= 55, arr.studentsScore > 20 && arr.studentsScore <= 55)) {
                    lectorTitle = arr.title;
                    lectorScore = gradation[55];
                    studentsScore = gradation[55];
                }
                if ((arr.score > 55 && arr.score <= 85, arr.studentsScore > 55 && arr.studentsScore <= 85)) {
                    lectorTitle = arr.title;
                    lectorScore = gradation[85];
                    studentsScore = gradation[85];
                }
                if ((arr.score > 85 && arr.score >= 100, arr.studentsScore > 85 && arr.studentsScore >= 100)) {
                    lectorTitle = arr.title;
                    lectorScore = gradation[100];
                    studentsScore = gradation[100];
                }
                lector.renderCourses(lectorScore, lectorTitle, studentsScore);
            });
        } else {
            lectorScore = "";
            lectorTitle = "";
            studentsScore = "";
        }
    }
}
