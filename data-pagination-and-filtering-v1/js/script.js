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

list - array of student data
page - page number
*/

function showPage (list, page) {
   const startIndex = (parseInt(page) * 9) - 9; //the index for the first student on the page
   const endIndex = parseInt(page) * 9; //the index for the last student on the page
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML =''; // removes any students that previously displayed

  for (let i=0; i<list.length; i++) {
      if (endIndex >= i >= startIndex) {
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
showPage (data, 1);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons

list - student data
*/

function addPagination (list) {
   const numButton = Math.ceil(list.length / 9) ; //store the value of the number of pagination buttons needed. 
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = ''; // remove any pagination buttons previously displayed
   console.log(numButton);
   for (let i=1; i < numButton + 1 ; i++) {
        /*  const button = document.createElement('button');
         button.textContent = `${i}`;
         linkList.appendChild(button); // attatch button to link list */


         const pageNumber = `
         <li>
          <button type="button">${i}</button>
         </li>
         `;
         linkList.insertAdjacentHTML("beforeend", pageNumber);

      }
      

}

addPagination (data);

// Call functions
