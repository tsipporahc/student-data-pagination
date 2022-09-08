/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students

@param {string} list - array of student data
@param {number} page - page number
*/

function showPage (list, page) {
   const startIndex = (page * 9) - 9; // index for the first student on the page
   const endIndex = page * 9; // index for the last student on the page
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML =''; // removes any students that previously displayed

  for (let i=0; i < list.length; i++) {
      if (i >= startIndex && endIndex > i) {
         const studentItem = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email"> ${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>
         `;
         studentList.insertAdjacentHTML("beforeend", studentItem);
         
      }
   } 
   
   return studentList;

}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons

@param {string} list - array of student data
*/

function addPagination (list) {
   const pages = Math.ceil(list.length / 9) ; // number of pagination buttons needed. 
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = ''; // remove any pagination buttons previously displayed

   for (let i=1; i < pages + 1 ; i++) {
         const button = `
         <li>
          <button type="button">${i}</button>
         </li>
         `;
         linkList.insertAdjacentHTML("beforeend", button);

         document.querySelector('button').className = 'active'; // add active class tot he first button
         

         linkList.addEventListener( 'click', (e) => {
            if (e.target.tagName == 'BUTTON') { //if the tagName of the event target is a BUTTON element.
               document.querySelector('.active').className = ''; // removes active  class from the previous active button
               e.target.className = 'active'; // the current button class name becomes active
               showPage(list, parseInt(e.target.textContent));

            }

         });
      }
      
   return linkList; 

}



// Call functions

showPage (data, 1);
addPagination (data);