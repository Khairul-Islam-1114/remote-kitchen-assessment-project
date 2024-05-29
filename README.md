## Task 1:
A project titled, “Alex’s Kitchen” from team "Remote Kitchen" uses Git for version control. Several developers are contributing, with each working on their own branch. The team follows certain conventions. Suppose you need to submit a hotfix. How would you name your branch? After finalizing your work in your designated branch, detail the steps you would take to create a PR and merge it with the production branch.

----------

## Task 1 Solution:

## a. Branch Naming:
For a "hotfix", the branch name should follows a convention to indicate its purpose clearly. So, by following this "hotfix/<description>" convention for a hotfix branch I will named it something like "hotfix/fix-critical-bug".

----------

## b. Steps to create a PR and Merge with Production:

## 1. Create the Hottfix Branch:

#. I will check existing branches by commanding:

>> git branch -a
 
Suppose the production branch is named "main";

#. I will switch to the "main" branch by commanding:

>> git checkout main

#. I will Pull and Update the "main" branch to the latest version from Remote:

>> git pull origin main

#. I will create and switch to the "hotfix" branch:

>> git checkout -b hotfix/fix-critical-bug

----------

## 2. Implement the Hotfix:

#. I will make the necessary changes to fix the bugs

#. Then stage and commit those changes:

>> git add .
>> git commit -m "Fix critical bug in production"

----------

## 3. Push the Hotfix Branch to the Remote Repository:

>> git push origin hotfix/fix-critical-bug

----------

## 4. Create a Pull Request (PR):

#. I will go to the repository on GitHub.

#. Navigate to the "Pull Request" tab.

#. Click on the "New Pull Request" button.

#. Select "main" as base and "hotfix/fix-critical-bug" as compare branch.

#. Then fill in the PR details with clear title and description of what the hotfix addresses.

#. Then assign reviewers and add relevant labels (e.g.: "hotfix").

----------

## 5. The PR will Get Reviwed:

#. Responsible team member will review the request and address feedback or requested changes if needed.

----------

## 6. Merge the PR:

#. If everything is okay and the the request is approved then I will able to "Merge" it by clicking the "Merge pull request" button.

----------

## 7. Delete the Branch:

#. Now I can delete the hotfix branch from the remote repository and also from local.

>> git branch -d hotfix/fix-critical-bug







_____________________________________________________________________________________________________________________________________________________

## Task-2 Solution:


## Here is the Understanding of Myself on Task-2's Structure:

~ I have an array called "dummyArr", which contains multiple objects. Each object represents a menu collection of food items.

~ Each menu contains specially two properties alongside with various properties of Menu.

~ There is a property called "menuItems", which is an array of objects, each with a unique "id" and a "name" key-value pair.

~ There is a another property called "category", which is also an array of objects, where each category object includes a "name" and "menuItemsIds" (renamed) key-value pair. Where "menuItemsIds" itself an array of integer that represents the Ids of item-name from the "menuItems".

----------------------

## What I have to do is:

~ Identify and list the specific menu items that belongs to each category based on the IDs provided in the "category" objects.

---------------------

## My Conceptual Approach to Solving the Problem:


## 1. I will create a Lookup Dictionary:

#. First I will create a lookup dictionary with all of the menu items. where each menuItems ID will represent as key and the object-value from "menuItems" array will be represent as the value of lookup dictionary. Here is the relevant code thats shows the work-process:

const dummyArr = [
    {
        type: "Vegetarian",
        menuItems: [
            {id: 1, name: "Salad"},
            {id: 2, name: "Veg Burger"},
            {id: 3, name: "Pasta"}
        ],
        category: [{
            name: "Starters",
            menuItemsIds: [1, 2]
        }]
    },
    {
        type: "Non-Vegetarian",
        menuItems: [
            {id: 4, name: "Chicken Wings"},
            {id: 5, name: "Beef Burger"},
            {id: 6, name: "Shrimp Pasta"}
        ],
        category: [{
            name: "Main Course",
            menuItemsIds: [4, 5]
        }]
    }
];

// Define the MenuItem type
type MenuItem = {
    id: number,
    name: string
}

// Initialize an empty object to hold the lookup dictionary of menu items
const menuLists: {[key: number]: MenuItem} = {};

// Iterate over each menu in the dummyArr array
dummyArr.forEach(menu => {

    // Iterate over each item in the menuItems array of the current menu
    menu.menuItems.forEach(item => {

        // Add each item to the menuLists object using the item's id as the key and item itself from menuItems array as value
        menuLists[item.id] = item;
    });
});

// Log the populated menuLists object to the console
console.log(menuLists);

// This is how the lookup dictionary will look like
{
  1: { id: 1, name: 'Salad' },
  2: { id: 2, name: 'Veg Burger' },
  3: { id: 3, name: 'Pasta' },
  4: { id: 4, name: 'Chicken Wings' },
  5: { id: 5, name: 'Beef Burger' },
  6: { id: 6, name: 'Shrimp Pasta' }
}


Now its too much easier to find any menuItems by using it's id from "category" array's "menuItemsIds" value.

---------------------

## 2. Match Menu Items with Categories:

~ Now here how I can find out the specific items that belongs to each category by using Ids of any specific menuItems:

// Initialize an object to hold the categorized menu items
const result: { [key: string]: MenuItem[] } = {};

// Iterate over each menu in the dummyArr array
dummyArr.forEach(menu => {

    // Iterate over each category in the current menu's category array
    menu.category.forEach(category => {

        // Map the menuItemsIds to the corresponding MenuItem objects from menuLists
        const items = category.menuItemsIds.map(id => menuLists[id]);
        
        // Debug log to check the items being mapped for each category
        console.log(items);

        // Add the array of MenuItem objects to the result object with the category name as the key
        result[category.name] = items;
    });
});

// Log the final categorized menu items to the console
console.log(result);



## Explanation:

~ First I create an empty object called "result" to store results for each category.

~ Then I iterate through the each menu of "dummyArr" array, then each menu's "category" array, then we map through each "menuItemsIds" array, where I found the integer numbers that represent the id of "menuItems". Now by using this id I get return the specific menuItems object that belongs to the id in every iteration.

~ Then I assign the return result in a const called "items".

~ Finally I assign key-value pair to the "result" object where [category.name] is representing as key and "items" that we get return from each iteration based on specific id is representing as value.


## And this is how the final result will look like:

{
  Starters: [ { id: 1, name: 'Salad' }, { id: 2, name: 'Veg Burger' } ],

  'Main Course': [ { id: 4, name: 'Chicken Wings' }, { id: 5, name: 'Beef Burger' } ]
}
