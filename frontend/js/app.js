import handleHamburger from './menu.js';
import { readUrl } from './utils.js';
import { sanityUrl } from './env.js';
import { handleParagraphs } from './utils.js';

handleHamburger(); // invoke the hamburger menu handling

// we assign to a variable the url string reading
const urlString = readUrl();

// querystring for sanity
const queryAllProjects = `
*[_type == "project"]{
    projectTitle,
    _id,
    slug,
    "bilde": image.asset->url,
    gallery[]
  }
`;

const querySingleProject = `
  *[slug.current == "${urlString}"]{
    title,
    "cover": image.asset->url,
    process,
    projectTitle,
    shortProjectDescription,

    problemTitle,
    problemIntroduction,
    problemDescriptions,
    numberOfColumns,

    solutionTitle,
    solutionIntroduction,
    solutionDescription,

  }
`;
// end of queries to sanity

// get single project page
async function getProject() {
  const response = await fetch(`${sanityUrl}${encodeURI(querySingleProject)}`);
  const { result } = await response.json();
  renderSingleProject(result);
}

function renderSingleProject(result) {

  //* HERO:

      const sanityProjectTitle = document.querySelector('.sanityProjectTitle');
      sanityProjectTitle.textContent = result[0].projectTitle

      const sanityShortProjectDescription = document.querySelector('.sanityShortProjectDescription');
      sanityShortProjectDescription.textContent = result[0].shortProjectDescription


   //* PROBLEM:

      const sanityProblemTitle = document.querySelector('.sanityProblemTitle');
      sanityProblemTitle.textContent = result[0].problemTitle

      handleParagraphs(result[0].problemIntroduction, 'sanityProblemIntroduction');
      handleParagraphs(result[0].problemDescriptions, 'sanityProblemDescription');
      const sanityProblemDescription = document.querySelector('#sanityProblemDescription')
      sanityProblemDescription.classList.add(result[0].numberOfColumns)
      //
  //* SOLUTION:

      const sanitySolutionTitle = document.querySelector('.sanitySolutionTitle');
      sanitySolutionTitle.textContent = result[0].solutionTitle

      handleParagraphs(result[0].solutionIntroduction, 'sanitySolutionIntroduction');
      handleParagraphs(result[0].solutionDescription, 'sanitySolutionDescription');
}

if(urlString !== undefined) {
  getProject();
}
// end of single project page function

// get all projects list for frontpage
async function getAllProjects() {
  const response = await fetch(`${sanityUrl}${encodeURI(queryAllProjects)}`);
  const { result } = await response.json();

  renderProjectsList(result); // invoke function in line 61 sending in data from sanity
}

function renderProjectsList(result) {
    const projectsEl = document.querySelector('.skoleoppgaver');
    
    result.forEach(project => {
    const cardEl = document.createElement('a');
    cardEl.classList.add('card');
    cardEl.setAttribute('href', `/projects/?${project.slug.current}`);
    const coverEl = document.createElement('img');
    coverEl.setAttribute('src', project.bilde);
    /* const titleEl = document.createElement('h4');
    titleEl.textContent = project.projectTitle; */
    cardEl.append(coverEl);
    /* cardEl.append(titleEl); */
    projectsEl.append(cardEl);
    coverEl.classList.add(`${project.slug.current}`)
    coverEl.classList.add('circle')
  })
}

// conditional invoke of all project for frontpage
if(urlString === undefined) {
  getAllProjects();
}
// end of projects in frontpage
