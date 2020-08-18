## Dark-Mode-in-HTML-using-javascript & Store-data-in-localstorage-using-js-and-Ionic-Framework-4.0
#### Note : - index.html(Dark Mode using Js in html) & the Folder Contain Store data in localstorage using js and Ionic Framework 4.0
<img src="https://i.imgur.com/p5LvrwA.png" alt="Girl in a jacket" width="500" height="1001">

### The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.
- The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

### -  The localStorage property is read-only
In web Storage There are Main Five Method 
* key()
* getitem()
* setitem()
* removeitem()
* clear()

## Definition
##### All the method belongs to the Storage Object, which can be either a localStorage object or a sessionStorrage object.


### 1.key()
==> The key() method returns name of the key with the specified index.
##### Example
Get the name of the first local storage item:
var x = localStorage.key(1);

### 2.getitem()
==> The getItem() method returns value of the specified Storage Object item.
	Syntax: localStorage.getItem(keyname)

#### Example
Get the value of the specified local storage item:
var x = localStorage.getItem("mytime");

### 3.setitem()
==>The setItem() method sets the value of the specified Storage Object item.
	Syntax: localStorage.setItem(keyname, value)

#### Example
Set the value of the specified local storage item:
localStorage.setItem("mytime", Date.now());

### 4.removeitem()
==>The removeItem() method removes the specified Storage Object item.
	Syntax:localStorage.removeItem("mytime");

#### Example
Remove the the specified local storage item:
localStorage.removeItem("mytime");

### 5.clear()
==> The clear() method removes all the Storage Object item for this domain.
	Syntax: localStorage.clear()

#### Example
Remove all local storage items:
localStorage.clear();
