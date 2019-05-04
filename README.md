|<img src="https://github.com/identicons/jasminealee.png" width=100 alt="GitHub identicon for author jasminealee">|
|:-----:|
| [**jasminealee**](https://github.com/jasminealee ) |


## Animal Site Makeover

###### Two Week Independent Project Initialized on April 16th, 2019.

#### By Jasmine Lee
----------

## Description
A web application built in React that allows a user to view quick facts about animals and information about the author. It also allows a user to input a species, a note about the species, and submit the form.

## Component Tree
![Component-Tree](/images/component-tree.png)

Changes from previous Component Tree:
<ol>
  <li>Changed the component names (aside from App, Header ConfirmationQuestions, and Error404) to my current component names.</li>
  <li>Label App and NewAnimalControl as states.</li>
</ol>

## Difference Between Angular and React
Angular is a two-way data binding framework that updates the Real DOM, while React is a one-way property binding JavaScript library that updates the Virtual DOM.

## Specifications
<details>
<summary>User Stories and Specifications</summary>

  <table>
    <tr>
      <th> Scenario 01 </th><th></th>
    </tr>
    <tr>
      <td> Behavior </td>
      <td>User views the list of inputted animals.</td>
    </tr>
    <tr>
      <td> Input </td>
      <td>User Clicks "Home".</td>
    </tr>
    <tr>
      <td> Output </td>
      <td>User sees a list of all species and notes that are inputted and the time they were created, in blocks. There is no database used, so all inputted information only appears until the page is refreshed.</td>
    </tr>
  </table>

  <table>  
    <tr>
      <th> Scenario 02 </th><th></th>
    </tr>
    <tr>
      <td> Behavior </td>
      <td>User views the biography about the author.</td>
    </tr>
    <tr>
      <td> Input </td>
      <td>User Clicks "About".</td>
    </tr>
    <tr>
      <td> Output </td>
      <td>User sees a picture and information about the author.</td>
    </tr>
  </table>  

  <table>  
    <tr>
      <th> Scenario 03 </th><th></th>
    </tr>
    <tr>
      <td> Behavior </td>
      <td> User inputs information about a new animal. </td>
    </tr>
    <tr>
      <td> Input </td>
      <td> User clicks "Create Animal" and then is prompted with the question "Would you like to proceed?" Then they click "Yes". The user will then input a species and a note about the species before clicking "Submit". </td>
    </tr>
    <tr>
      <td> Output </td>
      <td> The user must click "Home" to view the updated Animals list. There is no database used, so all inputted information only appears until the page is refreshed. </td>
  </table>

  <table>  
    <tr>
      <th> Scenario 04 </th><th></th>
    </tr>
    <tr>
      <td> Behavior </td>
      <td> User selects a species on the Admin page. </td>
    </tr>
    <tr>
      <td> Input </td>
      <td> User clicks "Admin". All animals that have been inputted will appear on the page. The user then clicks on the species of an animal. </td>
    </tr>
    <tr>
      <td> Output </td>
      <td> The species that was clicked, the corresponding note, and the time the block was created appear in another block above all of the listed animals in bold font. The user can also click on a different species. In that case, that information replaces the information in the block  that was previously bolded. There is no database used, so all inputted information only appears until the page is refreshed. </td>
  </table>    
</details>

## Notes
| Issue | Solution |
|:-------:|:-----:|
|Couldn't get program to run, issues were with the installments (kept receiving "properties undefined (all of my imports)", but had issues pinpointing installments that were causing the issues. | Re-Installed all installments. |
|AboutUs.jsx had issues running any picture except for jpg images. | Using a .jpg image.|
|My Github profile image didn't appear correctly in README.md. | Found a different link to connect my Github profile image to README.md. |
|Came across isses fixing the header so that it appears underneath every species, note, and time block. | Issue has not been solved. |

## Setup and Use
Prerequisites: [Node.js](https://nodejs.org/en/) and [Node.js Package Manager (npm)](https://www.npmjs.com/)

* Open GitHub and go to https://github.com/jasminealee/WordCounter.Solution and click `clone or download`; copy the url provided.
* Go to Terminal and clone the folder by inputting `$ git clone https://github.com/jasminealee/react-animal-site-makeover` then enter.
* Navigate to project directory in Terminal by typing `$ cd animal-site-makeover` then enter.
* Input the command `$ npm install` then enter.
* Input the command `$ npm run start` then enter.
* Navigate to the local host that terminal provides to see the application.

##Languages/Libraries Used
* Terminal
* Atom
* CSS
* Webpack
* React
* JSX
* JavaScript
* Hot Module Replacement

## Known Bugs
* Did not use a database, so all inputted information only appears until the page is refreshed.

## Contact
If you have any questions or concerns please contact me at: [jasmine.al1722@gmail.com](mailto:jasmine.al1722@gmail.com)

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2019 Jasmine Lee. All Rights Reserved.

Copyright (c) 2019 [Jasmine Lee](https://github.com/jasminealee)
