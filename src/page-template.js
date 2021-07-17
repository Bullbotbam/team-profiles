

// create the manager card
const generateManger = (manager) => {
  if (!manager) {
    return "";
  }

  return `
    <div class="col-4 my-3">
    <div class="card">
    <div class="card-header bg-primary">
      <h3 class="manger">Manager</h3>
      <p class="name">${name}</p>
    </div>
    </div>
    </div>
    <div class="card-bidy">
      <p class="idNumber">${id}</p>
      <p class="email">  <a href="mailto:${manager.email}"></a></p>
      <p class="officeNumber">${manager.officeNumber}</p>
    </div>
  `;
};
// create the engineer card
const generateEngineer = (engineer) => {
  if (!engineer) {
    return "";
  }

  return `
    <div class="col-4 my-3">
    <div class="card">
    <div class="card-header bg-primary">
      <h3 class="engineer">Engineer</h3>
      <p class="name">${name}</p>
    </div>
    </div>
    </div>
    <div class="card-bidy">
      <p class="idNumber">${id}</p>
      <p class="email">  <a href="mailto:${email}"></a></p>
      <p class="officeNumber">${github}</p>
    </div>
  `;
};
// create the intern card
const generateIntern = (intern) => {
  if (!intern) {
    return "";
  }

  return `
    <div class="col-4 my-3">
    <div class="card">
    <div class="card-header bg-primary">
      <h3 class="intern">Intern</h3>
      <p class="name">${name}</p>
    </div>
    </div>
    </div>
    <div class="card-bidy">
      <p class="idNumber">${id}</p>
      <p class="email">  <a href="mailto:${email}"></a></p>
      <p class="officeNumber">${school}</p>
    </div>
  `;
};


// let employeeCard = teamArr.join("")


// create the information to be sent to the page
const generateHtml = (employeeCard) => {
  // destructure page data by section
  // const { employees, manager, engineer, intern } = employee;

  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Portfolio Demo</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header>
    <div class="container flex-row justify-space-between align-center py-3">
      <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Profile</h1>
     
    </div>
  </header>
  <div class="col-4 w-25">
    <div class="card ">
    <div class="card-header">1. 
    ${employeeCard}
    </div>
   </div>
    </div>
  <footer class="container text-center py-3">
    <h6 class="text-dark">&copy;2021 by dBull_ATX</h6>
  </footer>
</body>
</html>
`;
};


module.exports = generateHtml;