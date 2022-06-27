const {mongoose} = require('../src/lib/mongoose');
const { Phrase } = require('../src/models/phrases')

const phrases = [
  { idiom: "A blessing in disguise", meaning: "a good thing that seemed bad at first" },
  { idiom: "A dime a dozen", meaning: "Something common" },
  { idiom: "Beat around the bush", meaning: "Avoid saying what you mean, usually because it is uncomfortable" },
  { idiom: "Better late than never", meaning: "Better to arrive late than not to come at all" },
  { idiom: "Bite the bullet", meaning: "To get something over with because it is inevitable" },
  { idiom: "Break a leg", meaning: "Good luck" },
  { idiom: "Call it a day", meaning: "Stop working on something" },
  { idiom: "Cut somebody some slack", meaning: "Don't be so critical" },
  { idiom: "Cutting corners", meaning: "Doing something poorly in order to save time or money" },
  { idiom: "Easy does it", meaning: "Slow down" },
  { idiom: "Get out of hand", meaning: "Get out of control" },
  { idiom: "Get something out of your system", meaning: "Do the thing you've been wanting to do so you can move on" },
  { idiom: "Get your act together", meaning: "Work better or leave" },
  { idiom: "Give someone the benefit of the doubt", meaning: "Trust what someone says" },
  { idiom: "Go back to the drawing board", meaning: "Start over" },
  { idiom: "Hang in there", meaning: "Don't give up" },
  { idiom: "Hit the sack", meaning: "Go to sleep" },
  { idiom: "It's not rocket science", meaning: "It's not complicated" },
  { idiom: "Let someone off the hook", meaning: "To not hold someone responsible for something" },
  { idiom: "Make a long story short", meaning: "Tell something briefly" },
  { idiom: "Miss the boat", meaning: "It's too late" },
  { idiom: "No pain, no gain", meaning: "You have to work for what you want" },
  { idiom: "On the ball", meaning: "Doing a good job" },
  { idiom: "Pull someone's leg", meaning: "To joke with someone" },
  { idiom: "Pull yourself together", meaning: "Calm down" },
  { idiom: "So far so good", meaning: "Things are going well so far" },
  { idiom: "Speak of the devil", meaning: "The person we were just talking about showed up!" },
  { idiom: "That's the last straw", meaning: "My patience has run out" },
  { idiom: "The best of both worlds", meaning: "An ideal situation" },
  { idiom: "Time flies when you're having fun", meaning: "You don't notice how long something lasts when it's fun" },
  { idiom: "To get bent out of shape", meaning: "To get upset" },
  { idiom: "To make matters worse", meaning: "Make a problem worse" },
  { idiom: "Under the weather", meaning: "Sick" },
  { idiom: "We'll cross that bridge when we come to it", meaning: "Let's not talk about that problem right now" },
  { idiom: "Wrap your head around something", meaning: "Understand something complicated" },
  { idiom: "You can say that again", meaning: "That's true, I agree" },
  { idiom: "Your guess is as good as mine", meaning: "I have no idea" }
]

Phrase.deleteMany({}).then(() => {
  return Phrase.insertMany(phrases)
}).then((result) => {
  console.log(result)
  return mongoose.connection.close()
}).catch(error => {
  console.warn(error)
})