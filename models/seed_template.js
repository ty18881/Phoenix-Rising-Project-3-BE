// name: {type: String, required: true},
// text: {type: String, required: true},
// tags: [{type: String}],
// numberBlanks: {type: Number, required: true}



module.exports = [
    {
        name: "Summer Vacation",
        text: "Today is day $$Noun$$ of summer vacation.  It has been a $$Adverb$$ $$Adjective$$ summer.  All we have done is $$Verb$$ $$Noun$$ and made $$Noun$$ castles.",
        tags: ["vacation"],
        numberBlanks: 6
    },
    {
        name: "Yesterday",
        text: "Yesterday $$Noun$$ in $$Pronoun$$ and I went to $$Noun$$.  On our trip, we saw butts, $$Noun$$ and $$Noun$$.  We went on a ride about $$Verb$$ times. I would say it was $$Adverb$$ $$Adjective$$ day.",
        tags: ["trip"],
        numberBlanks: 8
    },
    {
        name: "Nightmares",
        text: "Last night I had the weirdest dream.  I was on the $$Noun$$ and I saw $$Pronoun$$ $$Verb$$.  It was super annoying.",
        tags:  [],
        numberBlanks:  3
    },
    {
        name: "Random",
        text: "$$Verb$$ is always $$Adjective$$ because we typically $$Verb$$ outside",
        tags: ["random"],
        numberBlanks: 3
    },
    {
        name: "Another Random",
        text: "$$Noun$$, do you wish $$Noun$$ would be $$Adjective$$",
        tags: ["random"],
        numberBlanks: 3
    },
    {
        name: "Another Random - 2nd Seeding",
        text: "$$Noun$$, do you wish $$Noun$$ would be $$Adjective$$",
        tags: ["random"],
        numberBlanks: 3
    }
    
    
]
