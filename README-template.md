# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/Powerful-2/results-summary-component)
- Live Site URL: [Add live site URL here](https://powerful-2.github.io/results-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- 
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

HTML: I love the way I struture my divs
<section class="result-section">
      <div class="result-content">
        <h1 class="result-title">Your Result</h1>

        <div class="score-container">
          <span class="score-number">76</span>
          <span class="score-total">of 100</span>
        </div>

        <div class="feedback-container">
          <h2 class="result-grade">Great</h2>
          <p class="result-description">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>
    </section>
```
```css
.proud-of-this: /* Desktop side-by-side - add this at the end */
@media (min-width: 768px) 
    .container {
        max-width: 736px;
        height: auto;
        margin: 100px auto;
        background-color: var(--white);
        border-radius: 32px;
        box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: row;
        gap: 0;
    }
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Useful resources

- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Display/Block_and_inline_layout
This is an amazing article which helped me finally understand layout. I'd recommend it to anyone still learning this concept.

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Powerful-2)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
