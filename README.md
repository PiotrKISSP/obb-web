<h1 align="center">OBB-Sys</h1>
<p align="center">Vet web application</p>
<p align="center">
  <img src="https://github.com/wojciechkubiak/obb-web/blob/master/OBB.png?raw=true"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20by-wojciechkubiak-blue"/>
  <img src="https://img.shields.io/website?url=https%3A%2F%2Fobb-sys.netlify.app"/>
  <img src="https://img.shields.io/netlify/e5f19957-8751-4ccb-9c58-bf2d16782034"/>
  <img src="https://img.shields.io/badge/react-16.12.0-informational"/>
</p>


## Technologies used
* ReactJS (React Hooks, React Router)
* HTML
* Styled Components

## What this app is about
This application allows vet to store and modify animal research data. It's main purpose is to replace spreadsheets and store data in the cloud. Additionally, the application has an authentication system ensuring data protection, the ability to generate PDF and possibility to check data on the interactive charts.

## Live

<p>The client side of my engineering application was split into multiple containers.</p>
<br />

* <b>Login screen</b> - here you can log in using created before data (there is possibility to register user, but it was turned off by me). After submit, there is spinning animation and user gets logged in or information about wrong credentials shows up. To prevent the need for continuous login, the token is stored in the browser's local memory

<br />

<p align="center">
 <img src="https://github.com/wojciechkubiak/obb-web/blob/master/login.png?raw=true"/>
</p>

<br />

* <b>Pens</b> - contains data about medicines, food, current pens state and units stored at the Research Centre. 

<br />

<p align="center">
  <img src="https://github.com/wojciechkubiak/obb-web/blob/master/pens.png?raw=true"/>
</p>
<br />

In this container you can easily manipulate units data (add them, delete them, mark as sold/dead, sometimes nullify).
Additionally every single unit has its own measures.

<br />

* <b>Unit measures</b> - here the vet can check if there are any health issues and if he should try new type of medicines/use smaller portions.
To make everything as fast as possible, cards have different colors based on data, which show, if there is something wrong.
As always, there is possibility to add, edit, delete data and to generate PDF with measures, that were added since the introduction of that unit.

<br />

<p align="center">
 <img src="https://github.com/wojciechkubiak/obb-web/blob/master/unitmeasure.png?raw=true"/>
</p>

<br />

* <b>Global measures</b> - here the vet can find informations about current state of Centre (CO2, H2S, wetness and more). Every measure has its own chart, which can signal to the veterinarian that some equipment does not work as it should.

<br />

<p align="center">
 <img src="https://github.com/wojciechkubiak/obb-web/blob/master/global.png?raw=true"/>
</p>

<br />

* <b>Water</b> - most important part is Water container, which indicates how much water has been consumed by units. In case of deviations from the norm, there is high chance whole pen is sick and that he should be isolated. 

<br />

*At this moment I'm waiting for automatization of that process, which is huge part of logic behind this application. It's made by another person, working with microcontrollers.*

<br />

<p align="center">
 <img src="https://github.com/wojciechkubiak/obb-web/blob/master/water.png?raw=true"/>
</p>

<br />

* <b>Sold/Dead</b> - here you can find units that were sold or are dead. From this container, there is no option to edit data, only to read and eventually revert changes. Both containers contain a search engine.

<br />

<p align="center">
 <img src="https://github.com/wojciechkubiak/obb-web/blob/master/sold.png?raw=true"/>
</p>


## How can I install this app
At this moment application is hosted on the [obb-sys](https://obb-sys.netlify.app) website, but in case you want to use it locally, all you have to do is to install current LTS version of [NodeJS](https://nodejs.org/en/) and pass into your terminal (inside app directory) two commends:

### `npm install`

Installs all dependencies needed to run Obb-Sys app. <br />In case of outdated dependencies, try to run `npm audit fix`. <br />I'm trying to fix such things as fast as possible, but sometimes it just takes a while. 
<br />Most of times app is going to work even after error messages calling to use `audit` option <br />(not the ones that say you couldn't install dependencies - in case of such errors, check your internet connection). 

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## More about ReactJS

In case of my tips being unclear, check official React site [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




## Uwagi

* Po zmianie adresów URL http i https z 
"obb-api" na adres do innego api w heroku (np. "obb-projekt")
nie działa możliwość dodawania nowych rekordów do bazy danych
(jednostek).

* Nie działa możliwość usuwania pomiarów kojca (pen measure).
