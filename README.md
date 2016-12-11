# absenceReportAngularJSApp

This is a front-end single-page app that I built using AngularJS, which is to display and track a list of employee absences. The app is separated into several views, which allow the user to view the existing absences, or to add additional absences.

List of things still to do:

- Add the ability to add new absence bookings.
- Enable the edit button for all fields.
- Fix the edit feature for the dates, as currently it's not working.
- Add validation so that the end date cannot be before the start date.
- Add a duration that calculates automatically.
- Add unit tests.
- Add end to end tests.
- Add filters to the absence summary list page.
- Add a toast message whenever an absence is cancelled.
- Add toast message for when absence is edited.
- Add responsiveness.
- Add improved CSS.
- Add animation.

List of folders in the base project directory:

bower_components (included in git.ignore)
mock - contains json data
node_modules (included in git.ignore)
pages - contains sub-folders for each of the three app pages
styles - contains style sheets

Other files in the base directory:

.gitattributes
.gitignore
bower.json
index.html
package.json
read.me
script.js
service.js

Notes:

- How to install all required packages for an angular project:
- Borrow package.json and bower.json from the github angular project.
- Open each of these and update the relevant fields with your project's information.
- Then open Git Shell, cd into the directory of your project and then run npm install.
