# Frontend Developer Assessment

My completion of the frontend developer assessment for Hire an Esquire.

## Description

This client side application displays, sorts, and modifies a list of candidates for a job opening. A backend implementation provided to me, along with instructions for running it, is in the [`api/`](https://github.com/josedarioxyz/hae-assessment/tree/master/api) directory.

The client side application contains the following dependencies:

* `axios` — Lightweight dependency aiding in making standardized asynchronous GET and PATCH requests.
* `redux` — Manages and stores the client side application's state.
* `redux-logger` — Aids in logging state changes and possible errors to the console (only available outside of production).
* `redux-thunk` — Allows the writing of curried action creators that return a function instead of an action for conditional/delayed action dispatching.

More information about client dependencies can be found in the package.json file within the [`client/`](https://github.com/josedarioxyz/hae-assessment/tree/master/client) directory.

## Getting Started

Details and instructions for running the client are provided in the [`client/`](https://github.com/josedarioxyz/hae-assessment/tree/master/client) directory. Details and instructions for running the API are provided in the [`api/`](https://github.com/josedarioxyz/hae-assessment/tree/master/api) directory.

## Completed Requirements

The application meets all the following requirements:

1. Displays a list of candidates.
    1. All fields except for `id`, `created`, and `updated` are displayed.
1. Includes a UI element to filter the list of candidates by `reviewed`.
1. Includes a UI element to sort the list of candidates by `status` and `date_applied`.
1. Includes a button to update the `status` of a candidate.
    1. This action is sent to the server via an API request.
    1. Pending candidates can be changed to accepted or rejected.
    1. Once a candidate has been accepted or rejected, `status` cannot be set back to pending.
1. The application manages and stores state using Redux.

The project does not contain aesthetic/design considerations for simplicity, although I would be more than happy to add any if desired.

## Author

Changes from the [original repository](https://github.com/HireAnEsquire/frontend-dev-assessment) contained within this repository are entirely made by [Jose Dario Sanchez](https://github.com/josedarioxyz).
