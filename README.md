# Specification

## (More for me to keep checking as I work but I guess it also shows how I think I've met each ask when you're reading over this)

### The top navigation section should be sticky, however when the user scrolls down a certain amount of pixels, the header should slide up and then slide down when the user scrolls up

This took me a little while to think about. Ended up settling on adding a scroll up/down class to the body on each scroll event. Initially, I debounced this event listener but it actually made it run super laggy so I removed it, seems fine without. I did think about using a media query similar to how I have handled the resizing for the nav menu but decided against for no particular reason.

### The "Services" menu item shows the hover/active state

Added a :hover selector and a border for this, didn't struggle too much other than I did my usual thing of forgetting that anchor tags need to be wrapped in something or they have very strange widths.

### The header area should be full screen on desktop and collapse to a hamburger menu on tablet and mobile viewports which slides in/out when clicked

Pretty happy with this, had a good idea of how to do it from the offset. Did have a little trouble with the timing between sliding the menu back in and having the hamburger re-appear.
Fairly simple fix though using setTimeout.

### All links and buttons should have a hover/active/visited state where appropriate

### For links (e.g. Let's Talk) add a hover animation of your choosing

Went for a simple fading in/out color change that sticks to the theme of the page.

### The "What are we capable of" shows the hover state on "Brand Strategy"

Again, had the idea for this one as soon as i read it and I think it works well, just use a pseuod-element that is only added while hovering. Only thing I struggled with here was the positioning. Still not sure how to get the element to display at the end of the text. Maybe there's a better way to do this.

### "Some of our recent projects" shows a tabbed slider section. Animation for slider and tabs of your choosing. Image hover state shown on "Make Ideas Happen" project

This one I felt mixed about. Adding the tabs with the hover functionality I found easy but never got round to implementing a slide animation when changing the filter. I was thinking about rendering all possible card combinations off screen and then just change their positions when changing filter. Then I could have used a css transition to get a smooth sliding effect.

### No tablet or mobile visuals are provided, so stack, reduce content where appropriate inline with best practice

This was actually the area that I struggled with most and ended up spending a lot of time on. In my current job, the project I work on doesn't take responsive design into account at all. It's an issue I've raised several times but It's so far along now that the business aren't willing to spend the necessary dev time on it. Because of this, all of my responsive design experience comes from what I've done in my own time over the last year, which is two small sites really. Fairly happy with the result but I can definitely see the benefit in using something like bootstrap now, definitely something I'll consider in the future.

### Example of using an API

So I've kind of tried to emulate the kind of process I'm used to when pulling data from an API with the data for the recent projects section. I don't at all think what I've written is the best practice, it's purely for demonstrative purposes.

### "Case Studies" slider section shows an active Case Study and two further Case Studies to the left and right which are accessed using the arrow buttons

### "What are we all about?" section shows a masonry gallery - finale image layout can be adjusted

### The testimonial slider section shows the active slide, with further sliders accessed using the circle buttons
