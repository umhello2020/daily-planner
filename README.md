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
Here are some visuals of the deployed site (IMPORTANT NOTE TO ADD: At the time of day that I am posting this I am past work day hours so all of the events will appear red, however when you run through it will appear with the correct colors)--->
![Screenshot_20230117_095616](https://user-images.githubusercontent.com/118483617/213082773-8df5d6d6-67c0-4165-8a8e-ffc81b83bbf4.png)

![Screenshot_20230117_095639](https://user-images.githubusercontent.com/118483617/213082789-4dc6435b-1e0f-410b-ad83-6f86eac10a5d.png)

![Screenshot_20230117_095710](https://user-images.githubusercontent.com/118483617/213082808-11f85ee3-50c5-4b6e-a416-da79ad93d800.png)

![Screenshot_20230117_095752](https://user-images.githubusercontent.com/118483617/213082826-99da6fbc-1b31-4f5a-ac88-faabd8cc3da7.png)

![Screenshot_20230117_095844](https://user-images.githubusercontent.com/118483617/213082842-1ff549b3-f853-44c4-b457-bd66c7472e09.png)


## Installation
N/A

## Usage
This project is meant to be used to store your events for your current work day. When you click on the text area , you can enter your input for your event for that time block. You can then click the blue save button to save your input to the local storage. I created a for loop in my JavaScript to return the local storage to the text area. This means that your event will stay in the text area, even after refresh, until you clear the area and save. I then created a conditional statement to change the color of each text area depending on the time of day. I based the time off of 24 hour time. If the ID for the time block does not match the current time, then the class for the text area would be set to either past or future depending on if the ID was greater than or less than the current time. Lastly, I created another dayjs to get the day of the week and the current day of the year and set a text content to that to display it onto the page.

## Licensing
See repository for LICENSE.
