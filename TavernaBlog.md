## TAVERNA 

### Taverna aims to be a Single Page Application to give a Restaurant Owner the capacity to update his or her menu.  Ruby on Rails is used as a back-end framework to both persist Taverna’s data and make it available in JSON format to a vanilla JavaScript front-end.

### Initially, Taverna gives the User
- RETRIEVE
- CREATE
- DELETE
### CRUD for Menu Items, and Notes for their Menu Items.

-------------------------------------------------------------------------------------------------------------------------------------
### The back-end endpoints for vanilla JavaScript to connect are stored in an Adapter Class.

## DOM elements (isolated in consts) and Render functionality are both implemented in a Render class which the main App class extends.

### There is an Item class and a Note class for specifying the format of new Items and Notes.

### Instantiating items and notes as Objects instead of variables on arrays allows their attributes to be specified with dot notation and their methods to also be specified with dot notation which allows for cleaner code as well as easier readability.
------------------------------------------------------
### My new favorite word is ```undefined```. Ok, not really. The hardest part of this module for me was phrasing data in a way that the rails back-end will accept. Like everything else, it probably just takes practice and also practice at reading documentation.
--------------------------------------------------------------------------------------------------------------------------------------
### Takaways:
### Challenging, challenging, challenging! Humbling!  Admittedly, Taverna’s a bit clunky at the moment but this module has pushed me to stretch my learning skills more than any other module so far.