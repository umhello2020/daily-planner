# Work Day Event Planner

## Description
This project was meant to show my knowledge of using Bootstrap and Jquery to quickly form a project based off of the starter code provided to me.
Jquery and Bootstrap are both new concepts to me. It was interesting getting to look at some of the code already provided for me.
I found this a lot easier to work through what I wanted to do with what I was given. I even noticed that I have begun to pick up some of the skills I have been taught. 
I am very glad that I was able to work through this project easily, and it has given me a slight confidence boost to what I may be able to do in the future. 
I hope that this might let other's know that persistance will work out for you, and it will get easier with practice and by doing.

## Link to Deployed Site
HERE IS A LINK TO THE DEPLOYED SITE ----> https://umhello2020.github.io/daily-planner/

## Visuals
Here are some visuals of the deployed site --->

## Installation
N/A

## Usage
This project is meant to be used to store your events for your current work day. When you click on the text area , you can enter your input for your event for that time block. You can then click the blue save button to save your input to the local storage. I created a for loop in my JavaScript to return the local storage to the text area. This means that your event will stay in the text area, even after refresh, until you clear the area and save. I then created a conditional statement to change the color of each text area depending on the time of day. I based the time off of 24 hour time. If the ID for the time block does not match the current time, then the class for the text area would be set to either past or future depending on if the ID was greater than or less than the current time. Lastly, I created another dayjs to get the day of the week and the current day of the year and set a text content to that to display it onto the page.

## Licensing
See repository for LICENSE.
