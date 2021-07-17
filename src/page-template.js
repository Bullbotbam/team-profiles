

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
      <p class="name">${manager.name}</p>
    </div>
    </div>
    </div>
    <div class="card-bidy">
      <p class="idNumber">${manager.id}</p>
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
      <p class="name">${engineer.name}</p>
    </div>
    </div>
    </div>
    <div class="card-bidy">
      <p class="idNumber">${engineer.id}</p>
      <p class="email">  <a href="mailto:${engineer.email}"></a></p>
      <p class="officeNumber">${engineer.github}</p>
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
      <p class="name">${intern.name}</p>
    </div>
    </div>
    </div>
    <div class="card-bidy">
      <p class="idNumber">${intern.id}</p>
      <p class="email">  <a href="mailto:${intern.email}"></a></p>
      <p class="officeNumber">${intern.school}</p>
    </div>
  `;
};


// let employeeCard = teamArr.join("")


// create the information to be sent to the page
const generateHtml = (employee) => {
  // destructure page data by section
  const { name, id, email, officeNumber, github, school } = employee;

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
    <div class="container justify-space-between align-center py-3">
      <h1 class="page-title text-secondary py-2 px-3">Team Profile</h1>
     
    </div>
  </header>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${employee.role}</h6>
    <p class="card-text">ID: ${employee.id}</p>
    <p class="card-text">Email:${employee.email}</p>
    <p class="card-text"></p>
  
  </div>
</div>
  <footer class="container text-center py-3">
    <h6 class="text-dark">&copy;2021 by dBull_ATX</h6>
  </footer>
</body>
</html>
`;console.log(managerName)
};


module.exports = generateHtml;