/*
const person = {
    name: 'Maxine',
    age: 32,
    address: {
      city: 'London',
      postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
  };

  console.log(person.hobbies[1]);
  */


const cohort = {
    name: 'Apr2023',
    id: 1234,
    students: ['greg','tommy','bob']
}

const stdout = (object_name) => {
    console.log(object_name.id + ' - ' + object_name.name + ' - ' + object_name.students.length + ' in the cohort');
}

stdout(cohort);