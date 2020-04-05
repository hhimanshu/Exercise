# Blameless Exercise

## Introduction

The goal of this exercise is to create a Communications Lead workflow using React/Redux/Material UI.

## Deliverable Specifics

- Use `src/components/exercise/exercise-page` as the base page for the exercise to build out the Communications Lead workflow outlined below
- Write unit tests for your components and reducers
- Use can view your exercise page by clicking Exercise from the top nav menu

#### Communications Lead workflow

Build out a set of components to handle a communications lead workflow, based on the mock JSON data provided.

Features of the communication lead workflow include:

1. an accordion stack view of previous communications (use `publishHistory` in mock JSON) where most recent item is at the top
   - each element in the stack shows the publish date and summary when collapsed
   - clicking on an element in the stack will expand the accordion for that element and show that communication's information, specifically its:
     - publish date (use date-fns to parse date timestamp),
     - summary,
     - tags (use materialUI Chips component),
     - emails (use materialUI Chips component),
     - phones (use materialUI Chips component),
     - and Slack channels (use materialUI Chips component).
2. above the accordion stack it should show the most recent state of the last communication `(this is the main payload of commsLead.json)` with the following information laid out:
   - last updated date (use date-fns to parse date timestamp),
   - summary,
   - tags (use materialUI Chips component),
   - emails (use materialUI Chips component),
   - phones (use materialUI Chips component),
   - and Slack channels (use materialUI Chips component).
3. Building on top of #2 above, users can click on the most recent state of the communication to edit the communication. Editing the communication should open a modal where the user can edit the fields:
   - an executive summary
   - can select tags to include in the communication (multi select dropdown)
   - can select Slack channels to include in the communication (multi select dropdown)
   - can select emails to include in the communication (multi select dropdown)
   - can select phone numbers to include in the communication (multi select dropdown)
   - modal has 2 buttons at the bottom: - Cancel, which closes the modal - Save, which should show a success notification (use materialUI Snackbar component) and closes the modal and updates the state of the current communication shown above the list.
   - Saving should also push a version of this communication on top of the history stack. 
   - When opening the Edit modal, the fields should always populate their values from the most recent communication.
4. A button to hide/show the publish history accordion

> Take a look at the mock JSON and you can see the expected format of each of the model values.

#### Running Tests

- There is a `Tests` tab at the top of this window to run test specs
- Tests can be found in the `/tests/components/` directory

Good luck and happy coding!
