casnio website for my web dev portfolio

css videos

flexboxes
https://www.youtube.com/watch?v=wsTv9y931o8&ab_channel=Coding2GO

border animation
https://www.youtube.com/watch?v=ezP4kbOvs_E&t=16s&ab_channel=Coding2GO

scroll animation
https://www.youtube.com/watch?v=0TnO1GzKWPc&ab_channel=SnippetsCode

Ride the buss troubleshooting

Phases of each turn of RTB

1. Guess red or black
2. Higher or lower card
3. between or outside the two previous cards
4. guess the suit
   Current fixes needed
   🔧 Key Fixes You Need
   ❌ Issue 1: randomCard and randomSuit are only generated once, globally.
   This means all generated cards will be the same!

✅ Fix: Move getRandomInt() calls inside generateCard() to get fresh values each time.

❌ Issue 2: hand.suit is not a valid check in firstDeal()
hand is an array. You should check the last card pushed to it.

✅ Fix: Use hand[hand.length - 1].suit.

❌ Issue 3: Event listeners run after controller is executed
Your controller() is called before the user clicks the buttons — so the buttonInput is always 0 at that time.

✅ Fix: Handle game flow with event listeners instead of running controller() directly.
