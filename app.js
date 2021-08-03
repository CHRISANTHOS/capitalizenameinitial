
const name = prompt('enter name');
const capitalize = (name) =>{
    let newName = name.split(' ');
    let firstName = newName[0];
    let lastName = newName.length === 2? newName[1]: '' ;
    let firstNameInitial = firstName[0].toUpperCase();
    let lastNameInitial = lastName.length? lastName[0].toUpperCase() : '';
    const value = `${firstNameInitial}${firstName.slice(1)} ${lastNameInitial}${lastName.slice(1)}`
    return value;
}
console.log(capitalize(name));