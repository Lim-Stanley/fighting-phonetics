# Fighting Phonetics

This repository provides Fighting Phonetics, a user-friendly phonetics-learning application designed to provide students with a simple and convenient way to master [IPA sounds](https://www.ipachart.com/), saving learners from the inefficiencies and inconveniences of creating and following a manual way to do so.

Along with the intuitive design of Fighting Phonetics, the application is equipped with a recommendation algorithm which optimizes the learning of users through the use of [spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition), allowing users to learn efficiently without having to put in any additional effort.

## Table of Contents
1. [Organization](#organization)
2. [Installation](#installation)
3. [Opening and Using](#opening-and-using)
4. [Features](#features)
5. [Future Plans](#future-plans)

## Organization
- [`src/pages`](src/pages) This contains the different pages in the application, such as the homepage and the English consonant page.
- [`src/components`](src/components) This contains reused components, such as the menu(top) bar component.
- [`src/images`](src/images) This contains all the images used in the application
- [`src/sounds`](src/sounds) This contains all the sounds used in the application
- [`src/App.js`](src/App.js) This contains the routing for all of the links in the application

## Installation
This application is available at [https://lim-stanley.github.io/fighting-phonetics/](https://lim-stanley.github.io/fighting-phonetics/). However, if you wish to install the program for local use, do the following:
1. Install Git
2. Create a folder on your computer where you can download this repository
3. Clone this repository to your computer: `git clone https://github.com/Lim-Stanley/fighting-phonetics`
4. Download [Node.js](https://nodejs.org/en/)

## Opening and Usage
#### Online
To use the application online, simply visit [https://lim-stanley.github.io/fighting-phonetics/](https://lim-stanley.github.io/fighting-phonetics/)
#### Local
To open the application locally, in the project directory, run:
### `npm start`

##### Usage
To start learning, simply click on one of the pages shown on the home screen.

To select sounds that you wish to study, click on the respective row or column to highlight those symbols.

Play the currently tested sound by clicking the play button, and select your guess for the sound by clicking the respective symbol inside the table.

After correctly answering a question, give feedback so that the recommendation algorithm can cater to your currently level and optimize your learning!

## Features
##### Spaced repetition-based recommendation algorithm
[Spaced Repetition](https://en.wikipedia.org/wiki/Spaced_repetition) is a learning technique that is commonly applied in contexts where the learner must digest and retain large quantities of information. The technique involves having unfamiliar concepts appear more frequently in practice, and familiar concepts appear less frequently. It is frequently used in linguistics, with people having to learn extensive vocabularies for second-languages utilizing spaced repetition to make their learning more efficient.

The recommendation algorithm implements spaced repetition with user-feedback as input. If the user is unable to identify a sound or identifies a sound correctly but is still uncomfortable with it, the recommendation algorithm with recommend that sound more often. Meanwhile, if a user is very comfortably and consistently correctly identifying a symbol, the recommendation algorithm will test the user on that symbol less often.

##### Digestible chunk-learning
With over 80 IPA vowels and consonants to learn and more than 65% of them being sounds not found in English, the task of becoming familiar and comfortable with the IPA chart may seem very daunting at first.

This program provides a convenient way to learn through chunking - breaking down a large task into smaller, absorbable subtasks. As opposed to studying the entire chart at once, we give the user the option to select specific subsets of symbols to study. This promotes deliberate, small-scale learning, which removes the intimidating nature of starting from nothing and having to tackle a plethora of sounds.

##### Convenience
The intial inspiration in creating this application was an experience I had with a friend who was attempting to learn the IPA symbols. Because of the auditory nature of learning IPA, deliberately studying phonetics was hard to approach for them, as they were only experienced with learning textual-based information. So, I ended up testing them by producing sounds and having them guess the sound, and while doing so, was wondering why there wasn't a program to do what I was currently doing manually for them.

Fighting Phonetics takes away all of the inconvenience of having to devise a way to study phonetics, and allows a student who wants to learn IPA to immediately begin learning after a single click of the mouse. 

## Future Plans
All plans can be found in [`plans.txt`](plans.txt). A notable plan for the future includes content expansion to include a broader range of phonetics. This includes implementing a page to learn tones, diacritis, as well a page for learners to do full english word translation, as opposed to just individual sounds.

Along with this, a spectrogram reading page and a gestural score reading page is also in the future plans.

Finally, an exciting future plan that isn't content expansion is the addition of tooltips. When someone gets a sound incorrect, the tooltip is made to remind them of english words that may use the sound, to aid in understanding of the sound in context and memorization. 
