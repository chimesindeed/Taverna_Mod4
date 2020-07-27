## TAVERNA 

### Taverna aims to be a Single Page Application to give a Restaurant Owner the capacity to update his or her menu.  Ruby on Rails is used as a back-end framework to both persist Taverna’s data and make it available in JSON format to a vanilla JavaScript front-end.

### Initially, Taverna gives the User
- RETRIEVE
- CREATE
- DELETE
### CRUD actions with which they can View their current menu Items, Add an Item to their menu or Delete an item from their menu.

### Items also have notes.  If a user double clicks on an item, their notes for the item will be displayed. 

-------------------------------------------------------------------------------------------------------------------------------------
### The back-end endpoint for vanilla JavaScript to connect to is stored in an Adapter Class.

## DOM isolation consts are stored in a ‘DOMElements’ class.

### A Render class stores the bulk of rendering functionality.

### There is an Item class and a Note class for specifying the format of new Items and Notes.

### Instantiating items and notes as Objects instead of variables on arrays allows their attributes to be specified with dot notation and their methods to also be specified with dot notation which allows for cleaner code as well as easier readability.
------------------------------------------------------
### My new favorite word is ```undefined```. Ok, not really. The hardest part of this module for me was phrasing data in a way that the rails back-end will accept. Like everything else, it probably just takes practice and also practice at reading documentation.
--------------------------------------------------------------------------------------------------------------------------------------
### Takaways:
### Challenging, challenging, challenging! Humbling!  Admittedly, Taverna’s a bit clunky at the moment but this module has pushed me to stretch my learning skills more than any other module so far.