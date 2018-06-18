# Frontend Developer Assessment

:wave: Hey there! If you are looking at this, then that means you have been selected to complete an assessment as part of the hiring process for a developer position at [Hire an Esquire](https://hireanesquire.com/).

We require all candidates to complete this assessment for a few reasons:

1. We want to have a better understanding about how you approach and solve problems
1. We can vet candidates more accurately with a common set of criteria to compare
1. Most importantly, we will analyze your deliverables as part of our in-person interview and use them to discuss your software development ideologies

> :question: If you have any questions along the way, you can contact [lenny@hireanesquire.com](mailto:lenny@hireanesquire.com). Please note that all code contained in this repository is provided as-is and we will not be able to provide any technical assistance for that.

You are free to fork this repository to get started.

> :clock4: We estimate that this assessment can take anywhere from 1-4 hours to complete, based on individual skill level and implementation details. If you are unable to find enough time or believe this is unreasonable, please let us know and we will do our best to accomodate you.

## Challenge

We would like you to build a client-side web application to display, sort, and modify a list of candidates for a job opening. A backend implementation, along with instructions for running it, is provided in the [`api/`](https://github.com/HireAnEsquire/frontend-dev-assessment/tree/master/api) directory.

You are free to use any tools or projects at your disposal. This project contains a boilerplate app built with [create-react-app](https://github.com/facebook/create-react-app) that you can use to get started with if you choose to do so. You'll find this in the [`client/`](https://github.com/HireAnEsquire/frontend-dev-assessment/tree/master/client) directory. However, you are free to implement your application using any Javascript library/framework of your choosing.

## Prerequisites

Details and instructions for running the API are provided in the [`api/`](https://github.com/HireAnEsquire/frontend-dev-assessment/tree/master/api) directory.

## Requirements

Your application must meet the following requirements:

1. Display a list of candidiates
    1. All fields except for `id`, `created`, and `updated` should be displayed in some way
1. Include a UI element to filter the list of candidates by `reviewed`
1. Include a UI element to sort the list of candidates by `status` and `date_applied`
1. Include a button to update the `status` of a candidate
    1. This action should be sent to the server via an API request
    1. Pending candidates can be changed to Accepted or Rejected
    1. Once a candidate has been Accepted or Rejected, `status` cannot be set back to Pending.
1. (optional) We recommend using [Redux](https://redux.js.org/) to store your application’s state, but this is not required. If you choose not to, be prepared to explain why.

> :information_source: There are no aesthetic or design requirements. There are also no time limits, but we will not be able to schedule your interview until we receive your submission.

## Deliverables

Please provide a code repository with your source code and any necessary instructions for installing dependencies and running your application.