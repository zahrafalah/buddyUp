# “AnyBuddyUp”

Team:
Briana Oursler: Project Manager, Github Admin, Backend
Kyle Brittan: Backend, Database Admin
Sepideh Falah: Front/Back End
Miriam Armada: Front/Back End

## Overview

AnyBuddyUp is an application to help connect people and make new human connections. In the XXI Century, despite all the technology and ways to communicate, depression and urban Isolation are becoming an epidemic.
Depression and Urban Isolation Facts as of 2018:
Since the 1980s, the percentage of American adults who say they’re lonely has doubled from 20 percent to 40 percent.
1/3 of Americans over 65 live alone.
1/2 of persons over 85 do, as well.
One recent study found that isolation increases the risk of heart disease by 29 percent and stroke by 32 percent.
210.5 Billion dollars in lost earnings due to serious mental illness
Depression is the #1 Cause of Disability in Age 15 - 44
Suicide is the #2 Cause of Death for the same age range
The idea behind AnyBuddyUp is to help connect people with others when the traditional social circles have isolated them.
The app will provide a social platform for individuals to find other individuals to be their ‘pals’ to go do different events. There will be events separated by categories, so that people can go to either more formal events like concerts or more low-key events like a walk in the park. This app is trying to solve the problem of urban isolation by bringing people who feel alienated or have social anxiety together in non-threatening space. The app will ideally feature the ability to swipe through possible buddies.

## Functional Description and Narrative

Launch a live Application/Social Community:
Allows buddies to create a user/login/password
Link with their preferred social media (Facebook / Twitter/Google)
Create a profile and add/edit preferences including:
Bio (Public to other users)
Categories of interest (Music, Outdoors, Working out, etc)
Profile Picture (Potentially create an avatar if desired)

### Create Events
Keep record of Events of Interest.
Record of Events that you attended.
Connect with buddies with similar interest and events
### Internal Chat app
Communicate with community and members in a safe environment.

### Events Feed
API Events
Separated by Category
Date Filters
Location proximity (Nice to have)
Feed from Different live APIs (Eventful, Meetup)
User Created Events
User can create an even using a form and add them to the feed

### Technology
Trello (Project Management)
Meteor (full-stack Javascript framework using DDP, native authentication, JSON, etc)
Node
React
MongoDB
Moment
Eventful API
Google Maps API
Cloudinary API

## Possible Revenue Streams

AnyBuddyUp fills up a space not touched by other similar social media application with specific needs to connect, eventually could have cost for the user to use premium services (tbd)
It is not a dating app (we are not Tinder)
It’s meant for the user to meet new people unlike Facebook where your “friends” are people that you already know
It connects individuals with similar interests in close-by locations to promote meeting new individuals
We are pulling events information from APIs, those event will have an additional stream of possible “customers”, we will include links for user to buy tickets, pricing information and track those click which could reflect on revenue.
With a wide database of users, we will then add sponsored events and adds will result in additional revenue.

## UI/UX Workflow
###Home Page:
Here the user can sign in or sign up or click the main icon to learn more about us and our mission

###Sign-up Modal:
The user has the option to provide authentication via social media or create their own account


### Sources
https://www.nytimes.com/2016/12/22/upshot/how-social-isolation-is-killing-us.html
http://www.nndc.org/facts/?gclid=CjwKCAjwyMfZBRAXEiwA-R3gM4MiNh6nYfq3284W1_b6WtLiLLiKSbkC7uXmjsy29PghzdhYfSnteBoCO_QQAvD_BwE

###Profile Page:
The user enters their bio, can optionally take a survey to refine search results, and can add/remove categories that interest them. They can create their own events, as well! From this page, the user navigates to selecting buddies/events.

###Buddies/Events Page:
The user enters this page, which makes API calls and DB calls to render two routes: one is a list of buddies with small icons showing which events they are going to. Another is a list of events with small icons showing who is going to those events. These will be sorted through the user’s survey results to return people or events most closely matching their interests. The user can then click onto one of these cards to activate the in-app messaging client, through which they can approach potential buddies about organizing their meeting.
￼￼
#### Distributed under the MIT license. See LICENSE for more information.

## https://github.com/Boursler/buddyUp

### Contributors
#### Briana @ https://github.com/Bourler
#### Miriam @ https://github.com/marmada
#### Sepideh @ https://github.com/zahrafalah
#### Kyle @ https://github.com/kabrittan
