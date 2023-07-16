const students = [
    {
      firstName: 'Sare',
      lastName: 'Cil',
      studentNo: null,
      lessons: []
    }
  ]
  
  function createUniqueNumber() {
    const date = new Date()
    const dateYears = date.getFullYear();
    const dateMonth = date.getMonth() + 1;
    const dateDay = date.getDate();
    const fullDate = `${dateDay}${dateMonth}${dateYears}`
  
    return fullDate + Math.floor(Math.random() * 10000)
  }
  
  function addStudent(firstName, lastName, lesson = [], studentNo = createUniqueNumber()) {
    students.push(
      {
        firstName: firstName, 
        lastName: lastName, 
        studentNo: studentNo,
        lesson: lesson
      }
    );
    return 'Öğrenci Eklendi'
  }
  
  function listStudent() { 
    if (students.length <= 0) {
      return 'Öğrenci Yok Öğrenci Eklemek için addStudent() çalıştır'
    }
  
    for (const student of students) {
      console.log(`Student No: ${student.studentNo} | İsim: ${student.firstName} | Soyad: ${student.lastName} | Dersleri: ${student.lesson}`);
    }
  
    return 'Öğrenciler Listelendi'
  }


// const students = []

const parents = [
    {
        id: 1,
        firstName: 'Naciye',
        lastName: 'Cil'
    },

    {
        id: 2,
        firstName: 'Cemil',
        lastName: 'Cil'
    }
] 

function findParent(id) {
    for (const parent of parents) {
        if(parent.id === id) {
            const result = students.filter(student => student.parentId === id)
            result.forEach((element) => {
                console.log(parent.firstName, parent.lastName, ':', element.firstName, element.lastName);
            });
            return 'Veliler'
        }
    }
}

function foundStudent(firstName) {
    for (const student of students) {
        if (student.firstName === firstName) {
            console.log(student.firstName, student.lastName, student.studentNo);
        }
    }
}

function createUniqueNumber() {
    const date = new Date()
    const dateYears = date.getFullYear()
    const dateMonth = date.getMonth() + 1
    const dateDay = date.getDate()
    const fullDate = `${dateDay}${dateMonth}${dateYears}`

    return fullDate + Math.floor(Math.random() * 10000)
}

function addStudent(firstName, lastName, lesson = [], parentId) {
    students.push(
      {
        firstName: firstName, 
        lastName: lastName, 
        studentNo: createUniqueNumber(),
        lesson: lesson,
        parentId: parentId ? parentId : parentId + 1
      }
    );
    return 'Öğrenci Eklendi'
}

function listStudent() { 
    if (students.length <= 0) {
        return console.error('Öğrenci Yok Öğrenci Eklemek için addStudent() çalıştır')
    }

    for (const student of students) {
        console.log(`Student No: ${student.studentNo} | İsim: ${student.firstName} | Soyad: ${student.lastName} | Dersleri: ${student.lesson}`);
    }

    return 'Öğrenciler Listelendi'
}