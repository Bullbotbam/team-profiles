<<<<<<< HEAD
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

// create an array
// then filter/map each ... array.push.filter.map

// return array.join("")
=======
// create Manager card
const generateManager = function (manager) {
  
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${manager.name}</h3>
              <h4>Manager</h4><i class="material-icons">manage_accounts</i>
          </div>
          <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="office">Office Number: ${manager.officeNumber}</p>
          </div>
      </div>
  </div>
  `;
}

// create Engineer card
const generateEngineer = function (engineer) {
  
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${engineer.name}</h3>
              <h4>Engineer</h4><i class="material-icons">engineering</i>
          </div>
          <div class="card-body">
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
      </div>
  </div>
  `
}

// create Intern card 
const generateIntern = function (intern) {
 
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${intern.name}</h3>
              <h4>Intern</h4><i class="material-icons">history_edu</i>
          </div>
          <div class="card-body">
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>
          </div>
  </div>
</div>
  `
};

// push array to page 
generateHtml = (filecontent) => {
  console.log(filecontent,"search for filecontent")
  // this is where the cards are stored 
  cards = []; 

  for (let i = 0; i < filecontent.length; i++) {
      const employee = filecontent[i];
      const role = employee.getRole(); 
>>>>>>> bug-search

      if (role === 'Manager') {
          const managerInfo = generateManager(employee);

<<<<<<< HEAD
  // create the information to be sent to the page
  const generateHtml = (employee) => {
    // destructure page data by section
    const { name, id, email, officeNumber, role, github, school } = employee;

    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
=======
          cards.push(managerInfo);
      }

      if (role === 'Engineer') {
          const engineerInfo = generateEngineer(employee);

          cards.push(engineerInfo);
      }
      if (role === 'Intern') {
          const internInfo = generateIntern(employee);

          cards.push(internInfo);
      }
      
  }

  // putting the strings together 
  const teamInfo = cards.join('')
console.log(teamInfo, "teamInfo")
  // then return a generated page
  const createTeam = createPage(teamInfo); 
  return createTeam;

}

// generate html page 
const createPage = function (teamInfo) {   
return`
<!DOCTYPE html>
<html lang="en">
<head>
>>>>>>> bug-search
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
        </nav>
    </header>
<<<<<<< HEAD
    <div class="card" style="width: 18rem;">
    <div class="card-header">
        <h5 class="card-title">${employee.managerName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${employee.role}</h6>
    
    </div>
    <div class="card-body">
      
      <p class="card-text">ID: ${employee.id}</p>
      <p class="card-text">Email:${employee.email}</p>
      <p class="card-text"></p>
    
    </div>
  </div>
=======
    <section>
        <div class="teamProfile">
            <div class="row justify-content-center" id="team-cards">
                <!--Team Cards-->
                ${teamInfo}
            </div>
        </div>
    </section>
>>>>>>> bug-search
    <footer class="container text-center py-3">
    <h6 class="text-dark">&copy;2021 by dBull_ATX</h6>
  </footer>    
</body>

</html>
`;
}

<<<<<<< HEAD


module.exports = generateHtml;
=======
// export to index
module.exports = generateHtml; 
>>>>>>> bug-search
