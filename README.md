## Overview
ToyValley is a web application which has a goal to recycle as many toys as possible by enabling parents to exchange toys their kids are not using anymore between each other. Every person is able to create a profile where one can upload all the toys for the exchange. Other people can view the toys and make exchange requests using the toys from their profile. The application contains quick filters useful to the users such as most popular categories and most popular cities.

This repository contains frontend implementation, which is deployed to [Heroku](https://toy-valley.netlify.app/)

Follow the steps below to get started with this project's development environment.
1. Download and install NodeJS from [https://nodejs.org/en/](https://nodejs.org/en/)
2. Install Angular using following command
```
npm install -g @angular/cli
````
3. Clone this repository using the following command
```
git clone https://github.com/farisbegic/toy-valley-client
````
4. Navigate into this repository
```
cd (path)
````
5. Run the application
````
ng serve -o
````
This should open the application in your browser at `localhost:4200`.

## Features
* The homepage is public route that includes search bar, most popular categories, list of top traders and most popular locations. When the user clicks on most popular categories/locations one will be prompted to the page with all the toys from that category/location.
* Login page is a public route that allows users with accounts to log in.
* Register page is a public route that allows new users to register, contains form validation.
* Categories page is a public route which allows users to view all categories and narrow down the search.
* The profile page is a private route that displays the profile of the currently logged-in user. The user can amend personal information and change their password.
* Toy Details page is a public route which allows users to see the details about the toy and the user that posted it as well as to make exchange requests
* Admin Dashboard is a protected route which allows admins to add new categories and cities

You can find backend implementation [here](https://github.com/farisbegic/toy-valley-server).
