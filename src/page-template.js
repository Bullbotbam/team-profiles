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

      if (role === 'Manager') {
          const managerInfo = generateManager(employee);

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
    <section>
        <div class="teamProfile">
            <div class="row justify-content-center" id="team-cards">
                <!--Team Cards-->
                ${teamInfo}
            </div>
        </div>
    </section>
    <footer class="container text-center py-3">
    <h6 class="text-dark">&copy;2021 by dBull_ATX</h6>
  </footer>    
</body>

</html>
`;
}

// export to index
module.exports = generateHtml; 