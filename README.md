# GeoWiz - The World Geography Quiz

<img width="1368" height="736" alt="Screenshot 2025-12-30 at 18 24 56" src="https://github.com/user-attachments/assets/f888a0e3-71b1-4b7c-abc7-c4534d04ec4c" />

#### GeoWiz is an interactive, browser-based quiz designed to test a user's knowledge of global geography, including capitals, continents, and world flags. This project was built as part of my Milestone 2 project for my Software Development Diploma.
## Table of Contents

### Project Overview 

### User Experience (UX)
-Initial Design Concept

-User Stories

-Color Palette & Typography

### Features

-Interactive Pilot Console (Username Entry)

-Dynamic Flag Recognition

-Real-time Score & Streak Tracking

-Audio Feedback System

-Responsive Mobile-First Design

-Future Features 

### Technologies Used

### Testing & Validation

-Manual Testing Log

-W3C Validator Results

-Lighthouse Performance Report

-Bug Fixes & Lessons Learned

### Deployment

### Credits & Acknowledgments


## Project Overview

Welcome to GeoWiz, an interactive geography quiz designed to make learning about the world engaging and fun.

<img width="1503" height="887" alt="Screenshot 2025-12-30 at 18 19 29" src="https://github.com/user-attachments/assets/f9e9ee96-73e1-4ea4-a4f7-bb5e69f612d7" />

#### Why I Built GeoWiz

The inspiration for this project came from my own interest in global travel and world facts. I realized that many educational quizzes feel dry or like a school test. My goal was to build a "Pilot-themed" experience that feels more like a game than a chore. I wanted to create a clean, vibrant UI that gives the user immediate satisfaction through high-energy colors, sound effects, and a streak system that encourages them to keep playing.

#### The Objective

GeoWiz is built for casual learners and geography enthusiasts. It challenges users to identify world capitals, continents, and flags. By incorporating a "Pilot Name" entry system, I aimed to personalize the experience, making the user feel like they are embarking on a global flight rather than just clicking buttons on a screen.

#### Personal Growth

This project was a significant milestone in my coding journey. It allowed me to move beyond static HTML and CSS into the world of¢¢¢ JavaScript logic. Key challenges I overcame included:

##### Dynamic UI: Learning how to hide and show sections based on user interaction without reloading the page.

##### Array Management: Organizing a large library of questions and ensuring they display correctly with their corresponding images.

##### UX Polish: Fine-tuning the "feel" of the game—ensuring buttons are large enough for mobile users and that feedback (correct/incorrect) is clear and instantaneous.

## User Experience (UX)
Project Goals

The goal was to create a fun, educational game that is easy to navigate. I wanted the user to feel a sense of progression through a "streak" counter and visual/audio feedback.

<img width="135" height="42" alt="Screenshot 2025-12-30 at 18 27 40" src="https://github.com/user-attachments/assets/9ddd5ded-2e9c-41c5-9d15-430880821cf1" />
<img width="117" height="41" alt="Screenshot 2025-12-30 at 18 27 52" src="https://github.com/user-attachments/assets/bbda7129-f83f-4fa6-b91c-eb06ccdbafe9" />

User Stories

As a first-time visitor, I want to easily understand the rules so I can play without confusion.

<img width="134" height="45" alt="Screenshot 2025-12-30 at 18 29 13" src="https://github.com/user-attachments/assets/d8335e6a-97e7-41ef-be09-e3a8af7c2a39" />
<img width="284" height="164" alt="Screenshot 2025-12-30 at 18 29 30" src="https://github.com/user-attachments/assets/932d69fa-594d-4da3-b5b6-eaa0941e9b21" />

As a player, I want to know immediately if my answer was right or wrong through colors and sounds.

As a competitive player, I want to see my final score so I can try to beat it next time.

Design Choices

Color Scheme: I chose a dark "Earth" palette (Deep Blues and Greens) to match the geography theme.

Typography: 'Nunito' was chosen for its rounded, friendly look, making the quiz feel like a game rather than a test.

## Features
Username Entry: Personalizes the experience by displaying the player's name throughout the flight.

Dynamic Questions: Uses a JavaScript array to cycle through 20 unique questions.

Flag Recognition: Specific questions trigger an image display to test visual recognition of world flags.

Streak Counter: Tracks consecutive correct answers to keep the player engaged.

Audio Feedback: Distinct sounds for correct and incorrect answers to provide a multi-sensory experience.

Responsive Design: The layout shifts from a single column on mobile to a grid on desktop for better usability.

## Technologies Used
HTML5: For the structured content of the site.

CSS3: For custom styling, animations, and responsiveness.

JavaScript: To handle the game logic, scoring, and DOM manipulation.

GitHub: For version control and hosting the live site via GitHub Pages.

## Testing
I performed manual testing throughout the development process:

Validation: All code was passed through the W3C HTML Validator and the JSHint JavaScript Validator to ensure no major errors.

Browser Compatibility: Tested the game on Google Chrome, Safari, and Firefox.

Device Testing: Verified that the buttons and images scale correctly on iPhone 13 and Android devices.

Edge Case Testing:

Tried to start the game without a name; the system correctly blocked this and alerted me.

Ensured that clicking buttons rapidly during the "delay" period does not break the score logic.

## Deployment
The project was deployed using GitHub Pages.

Log in to GitHub and locate the repository.

Navigate to 'Settings'.

Select 'Pages' from the sidebar.

Under 'Branch', select 'main' and click 'Save'.

The live link can be found at the top of the Pages section.

## Credits
Images: Flag icons were sourced from Pixabay.

Audio: Sound effects were sourced from Pixabay's Royalty-Free library.

Code: Inspiration for the quiz logic came from course materials and documentation on MDN Web Docs.
