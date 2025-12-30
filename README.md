# GeoWiz - The World Geography Quiz

<img width="1368" height="736" alt="Screenshot 2025-12-30 at 18 24 56" src="https://github.com/user-attachments/assets/f888a0e3-71b1-4b7c-abc7-c4534d04ec4c" />

GeoWiz is an interactive, browser-based quiz designed to test a user's knowledge of global geography, including capitals, continents, and world flags. This project was built as part of my Milestone 2 project for my Software Development Diploma.
## Table of Contents

- [Project Overview](#Project-Overview) 
- [User Experience](#User-Experience)
- [Design](#Design)
- [Features](#Features)
- [Functionality](#Functionlity) 
- [Technology Used](#Technology) 
- [Testing and Validation](#Testing) 
- [Deployment](#Deployment) 
- [Credits & Acknowledgments](#Credits) 

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

### Project Goals

My main objective for GeoWiz was to bridge the gap between education and entertainment, creating a tool that feels more like a game than a test.

#### User Experience Goals

##### Gamified Learning: I wanted to make geography engaging. By adding "Pilot" names and streaks, I aimed to give players a sense of progress and accomplishment.

<img width="847" height="150" alt="Screenshot 2025-12-30 at 19 10 06" src="https://github.com/user-attachments/assets/5474c6b3-1915-4d16-b965-da80a569cb6d" />
<img width="135" height="42" alt="Screenshot 2025-12-30 at 18 27 40" src="https://github.com/user-attachments/assets/9ddd5ded-2e9c-41c5-9d15-430880821cf1" />

##### Intuitive Design: I focused on building a UI that needs no instructions. A user should be able to start their "flight" within seconds of landing on the page.

<img width="1503" height="887" alt="Screenshot 2025-12-30 at 18 19 29" src="https://github.com/user-attachments/assets/41bf6f6e-9aaa-4838-b525-c3897a0b9d74" />

##### Instant Feedback: It was important that the game felt responsive. I used clear color cues (green for correct, red for wrong) to provide immediate learning moments.

<img width="1728" height="964" alt="Screenshot 2025-12-30 at 19 18 34" src="https://github.com/user-attachments/assets/4c27773f-1f0f-4722-bc8e-a3fccda08026" />
<img width="1728" height="966" alt="Screenshot 2025-12-30 at 19 19 24" src="https://github.com/user-attachments/assets/b1f25e04-703f-4915-b7bf-6e51eb420b09" />

#### Technical & Learning Goals

##### Dynamic Content: A key goal was mastering JavaScript DOM manipulation to swap screens and update questions without the page ever having to refresh.

##### Clean Data Logic: I wanted to practice organizing question arrays so that images, choices, and answers stay perfectly synced throughout the 20-question loop.

##### Responsive Polish: I challenged myself to ensure the "Pilot Console" look remained centered and vibrant on everything from a small smartphone to a large desktop monitor.

<img width="1368" height="736" alt="Screenshot 2025-12-30 at 18 24 56" src="https://github.com/user-attachments/assets/f888a0e3-71b1-4b7c-abc7-c4534d04ec4c" />

### User Stories

As a first-time visitor, I want to easily understand the rules so I can play without confusion.

<img width="134" height="45" alt="Screenshot 2025-12-30 at 18 29 13" src="https://github.com/user-attachments/assets/d8335e6a-97e7-41ef-be09-e3a8af7c2a39" />
<img width="284" height="164" alt="Screenshot 2025-12-30 at 18 29 30" src="https://github.com/user-attachments/assets/932d69fa-594d-4da3-b5b6-eaa0941e9b21" />

As a player, I want to know immediately if my answer was right or wrong through colors and sounds.

<img width="1728" height="964" alt="Screenshot 2025-12-30 at 19 18 34" src="https://github.com/user-attachments/assets/4c27773f-1f0f-4722-bc8e-a3fccda08026" />
<img width="1728" height="966" alt="Screenshot 2025-12-30 at 19 19 24" src="https://github.com/user-attachments/assets/b1f25e04-703f-4915-b7bf-6e51eb420b09" />

As a competitive player, I want to see my final score so I can try to beat it next time.

<img width="1728" height="961" alt="Screenshot 2025-12-30 at 19 25 53" src="https://github.com/user-attachments/assets/c098cfaf-cea6-482f-8c5d-ec4fce981e31" />

## Design

### Colour Scheme
I selected the color palette for GeoWiz to evoke a sense of adventure and precision, fitting for a flight-themed geography game. I used a tool called [coolors](Coolors.co) to generate a palette that balanced professional "Aviation Blues" with high-energy "Action Greens." The deep blue gradient used for the background represents the sky and sea—the playground of a pilot—while providing enough contrast to make the white text and vibrant buttons pop. By using a consistent set of hex codes, I ensured that the interface feels unified and accessible, reducing eye strain for the player while maintaining a modern "App" aesthetic.

#### Role,Color Name,Hex Code,Purpose
Background (Top),Deep Navy,#1e3c72,Main brand identity and contrast.

Background (Bottom),Ocean Blue,#2a5298,Adds depth to the UI.

Primary Action,Emerald Green,#4eca72,"Used for ""Start Flight"" and correct answers."

Secondary Action,Slate Blue,#6c757d,"Used for ""How to Play"" and secondary buttons."

Warning/Error,Ruby Red,#dc3545,Immediate feedback for incorrect answers.

Text/Overlays,Off-White,#ffffff,High-readability text and glass-morphism panels.

<img width="1507" height="568" alt="Screenshot 2025-12-30 at 22 03 34" src="https://github.com/user-attachments/assets/df60af94-ee3d-4029-a696-30ad941c42d8" />
<img width="152" height="56" alt="Screenshot 2025-12-30 at 22 35 51" src="https://github.com/user-attachments/assets/e2b79cd8-d7b3-432f-b02e-955080f0606a" />

### Fonts
I used the 'Nunito' font family from [Google Fonts](https://fonts.google.com/) for this project. I chose it because its rounded, modern style gives GeoWiz a friendly "game-app" feel rather than a rigid academic one. More importantly, it offers excellent legibility across different devices. By using a heavy weight (800) for headers and a medium weight for buttons, I created a clear visual hierarchy that helps players read questions and make quick decisions, which is vital for a timed or fast-paced quiz experience.

<img width="193" height="51" alt="Screenshot 2025-12-30 at 22 35 05" src="https://github.com/user-attachments/assets/050b1f72-2887-4fc8-8fe1-48bc90be18df" />

### Headings
I used a clear heading hierarchy to make GeoWiz easy to navigate. By using extra-bold titles for the "Pilot Console" and smaller subheadings for stats, I created a visual path for the player to follow. I stuck to proper HTML tags (<h1> through <h3>) to keep the layout organized and ensure the game is accessible for screen readers. This keeps the interface looking professional while making sure the questions and scores always stand out.

### Logo
I designed the GeoWiz logo using [Looka](#https://looka.com/branding-kit/?gad_source=1&gad_campaignid=11680001896&gbraid=0AAAAADNyhlj0eO0gGXVqqL_K8FYgHXAAD&gclid=EAIaIQobChMIsuyGwIjmkQMVWI9QBh2GTjqrEAAYASAAEgJz2PD_BwE), an AI-powered branding platform. I chose this specific logo because it perfectly encapsulates the project's identity: a blend of global exploration and "wizard-like" expertise. The clean, modern lines ensure that the brand is recognizable even at small scales, such as a browser favicon or a mobile shortcut. By selecting a logo that mirrors the vibrant green and deep blue of the main UI, I created a cohesive visual link between the "GeoWiz" name and the actual gameplay, helping to establish a professional and polished "game studio" feel from the very first screen.

<img width="145" height="66" alt="Screenshot 2025-12-30 at 22 35 35" src="https://github.com/user-attachments/assets/6bc69e01-3886-442a-a4c2-89add6254052" />

### Imagery
The imagery in GeoWiz was carefully selected to provide an immersive and educational experience. I used high-quality PNG flag icons to ensure that the primary visual focus—the flags—remains crisp and professional on all screen sizes. To reinforce the "Pilot" theme, I included subtle icon elements like the fire emoji for streaks, which gives the user a sense of "momentum" and fun. I also utilized a "glass-morphism" effect on the main containers, which uses transparency to allow the vibrant background colors to peek through. This creates a layered, modern look that makes the game feel like a high-end mobile application rather than a basic website.

## Features

#### Interactive Pilot Console (Username Entry)
Username Entry: Personalizes the experience by displaying the player's name throughout the flight.

<img width="849" height="396" alt="Screenshot 2025-12-30 at 19 30 59" src="https://github.com/user-attachments/assets/f2ce2d43-de9d-4317-8635-266c3e76a93a" />
<img width="220" height="73" alt="Screenshot 2025-12-30 at 19 31 21" src="https://github.com/user-attachments/assets/6321b5f4-5813-4f25-a71f-7b26a660ce9d" />

#### Dynamic Flag Recognition
Flag Recognition: Specific questions trigger an image display to test visual recognition of world flags.
<img width="1728" height="964" alt="Screenshot 2025-12-30 at 19 33 19" src="https://github.com/user-attachments/assets/9f020e04-765c-42e0-b0e5-eaf596c58e77" />
<img width="1728" height="964" alt="Screenshot 2025-12-30 at 19 33 43" src="https://github.com/user-attachments/assets/7a3f117a-844f-4e6d-9089-0f4b59e5e081" />

#### Real-time Score & Streak Tracking
Streak Counter: Tracks consecutive correct answers to keep the player engaged.

<img width="174" height="45" alt="Screenshot 2025-12-30 at 19 32 28" src="https://github.com/user-attachments/assets/ddcd15ef-f7ca-43ac-992e-adfb22f828c8" />
<img width="151" height="55" alt="Screenshot 2025-12-30 at 19 32 37" src="https://github.com/user-attachments/assets/3299a4ee-2719-455f-8aac-3d8d0977e1c4" />

#### Audio Feedback System
Audio Feedback: Distinct sounds for correct and incorrect answers to provide a multi-sensory experience.

<img width="131" height="46" alt="Screenshot 2025-12-30 at 19 34 30" src="https://github.com/user-attachments/assets/57968c63-f6d8-49e8-b8fa-cd63747fed9d" />
<img width="123" height="42" alt="Screenshot 2025-12-30 at 19 34 40" src="https://github.com/user-attachments/assets/42ab6dab-bf4e-4ace-9047-73e26de20de7" />

#### Future Features 
"In a future version of GeoWiz, I plan to add a global leaderboard using a database so players can compare their flight scores with others around the world."


## Technologies Used

HTML5: For the structured content of the site.

CSS3: For custom styling, animations, and responsiveness.

JavaScript: To handle the game logic, scoring, and DOM manipulation.

GitHub: For version control and hosting the live site via GitHub Pages.


## Testing
I performed manual testing throughout the development process: "During testing, I discovered a bug where the flag images were stretching on small screens. I fixed this by applying max-width: 100% and height: auto in the CSS to ensure the flags always maintain their correct proportions."

Validation: All code was passed through the W3C HTML Validator and the JSHint JavaScript Validator to ensure no major errors.

Browser Compatibility: Tested the game on Google Chrome and Safari.

Device Testing: Verified that the buttons and images scale correctly on all devices like the imac,macbook,ipad and iphone all came back with images and buttons working perfectly. 

Edge Case Testing: Tried to start the game without a name; the system correctly blocked this and alerted me.

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

fonts:
Colour Scheme:
