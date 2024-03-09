var inner = document.getElementById("inner")

function checkthebox() {
    var inner = document.getElementById("inner")
    var array = [
        "A world bathed in perpetual twilight, where two moons cast an ever-shifting, multicolored glow. Lush bioluminescent flora paints the landscape in vibrant hues, while strange, crystalline lifeforms flit through the air. Cities are built on the backs of colossal, lumbering creatures that trav",
        "The vast expanse of the universe, filled with countless galaxies and swirling nebulae, continues to hold countless mysteries that scientists are only beginning to unravel.",
        "As technology advances at an ever-increasing pace, we are constantly presented with new opportunities and challenges that force us to re-evaluate our place in the world.",
        "The human spirit, with its capacity for both immense love and unimaginable cruelty, is a complex and fascinating paradox that has shaped the course of history.",
        "Language, a powerful tool for communication and expression, allows us to share our thoughts and feelings with others, building bridges of understanding across cultures and generations.",
        "The delicate balance of nature, where every creature plays a vital role, is constantly under threat from human activities, prompting us to seek sustainable solutions for the future of our planet.",
        "Art, in all its diverse forms, has the power to move us, inspire us, and challenge us to see the world in new ways, enriching our lives with beauty and meaning.",
        "Music, a universal language that transcends cultural barriers, has the ability to connect us on a deep emotional level, bringing people together in a shared experience.",
        "History, with its tales of triumphs and tragedies, serves as a valuable resource for learning from the past, helping us to avoid repeating mistakes and build a better future.",
        "Science, with its relentless pursuit of knowledge and understanding, has revolutionized our world, providing us with the tools to improve our lives and solve complex problems.",
        "Philosophy, by encouraging us to question the nature of reality and our place in it, allows us to explore fundamental truths and develop our own unique perspectives.",
        "Curiosity, the driving force behind exploration and discovery, is an essential human quality that fuels our desire to learn and grow.",
        "Innovation, the process of creating new ideas and solutions, is key to progress, allowing us to overcome challenges and improve our lives.",
        "Empathy, the ability to understand and share the feelings of others, is a cornerstone of human connection, fostering compassion and cooperation.",
        "Resilience, the capacity to recover from setbacks and adversity, is a vital trait that allows us to overcome challenges and build a brighter future.",
        "Gratitude, the appreciation of what we have, allows us to experience greater joy and satisfaction in life.",
        "Hope, the belief that things can improve, is a powerful motivator that helps us persevere through difficult times.",
        "Love, a complex emotion that encompasses a range of feelings, is a fundamental human need that connects us to others and gives our lives meaning.",
        "Peace, a state of tranquility and freedom from conflict, is a cherished goal that all humanity strives for.",
        "Happiness, a feeling of contentment and well-being, is a pursuit that takes many different forms, and varies from person to person.",
        "The future, though uncertain, holds the potential for great things, but it is up to us to shape it through our actions and choices.",
        "Under the watchful gaze of a million twinkling stars, the astronomer meticulously documented the celestial dance in her notebook.",
        "The aroma of freshly baked bread, wafting from the corner bakery, enticed passersby with its irresistible charm.",
        "With a determined glint in her eyes, the young athlete pushed her limits, striving to achieve her personal best.",
        "The rhythmic clatter of typewriters filled the air, composing the symphony of a bustling newsroom during a breaking story.",
        "The ancient library, a repository of forgotten knowledge, whispered tales of bygone eras through its dusty shelves.",
        "The bustling marketplace, a kaleidoscope of colors and cultures, offered an immersive experience for the curious traveler.",
        "The lone wolf, silhouetted against the setting sun, howled a mournful song, echoing through the vast wilderness.",
        "The intricate patterns woven into the tapestry depicted a timeless legend, passed down through generations.",
        "The concert hall erupted in thunderous applause, a testament to the captivating performance of the orchestra.",
        "The aroma of freshly brewed coffee filled the air, a comforting invitation to a new day.",
        "The bustling city streets, a constant hum of activity, pulsed with the vibrant energy of its diverse inhabitants.",
        "The seasoned detective, piecing together the clues, meticulously untangled the threads of the complex mystery.",
        "The ocean waves, crashing relentlessly against the shore, sang a hypnotic lullaby that soothed the weary traveler.",
        "The majestic mountain range, shrouded in a veil of mist, beckoned adventurous souls to explore its hidden wonders.",
        "The crackling fireplace, casting a warm glow on the room, provided a haven of comfort on a chilly winter night.",
        "The passionate debate, fueled by diverse perspectives, ignited a spark of understanding within the audience.",
        "The intricate clockwork mechanism, a marvel of engineering, meticulously measured the passage of time.",
        "The bustling classroom, alive with the hum of learning, nurtured young minds and ignited a passion for discovery.",
        "The captivating novel, transporting the reader to a fantastical world, sparked a thirst for adventure and new experiences.",
        "The vibrant coral reef, teeming with life in all its colorful forms, revealed the breathtaking beauty of the underwater world.",
        "The rapid pace of technological change raises profound questions about the future of work and the human condition.",
        "The concept of artificial intelligence sparks both fascination and fear, prompting us to consider the ethical implications of advanced technology.",
        "The delicate balance between freedom and security remains a constant challenge, demanding a nuanced approach to governance.",
        "The pursuit of happiness, a universal human desire, manifests differently for each individual, leading to a diverse spectrum of values and goals.",
        "The concept of consciousness, the essence of subjective experience, remains a scientific mystery, shrouded in philosophical debate.",
        "The power of social media, capable of both connection and manipulation, necessitates critical thinking and responsible engagement.",
        "The exploration of space, a testament to human curiosity, pushes the boundaries of knowledge and inspires us to dream big.",
        "The fight for social justice, a continuous struggle for equality, requires unwavering commitment and collective action.",
        "The power of storytelling, a universal human thread, transcends cultures and generations, fostering empathy and understanding.",
        "The impact of climate change, a pressing global challenge, demands immediate action and international cooperation.",
        "The human capacity for adaptation, a vital survival tool, allows us to navigate change and overcome adversity.",
        "The value of education, empowering individuals and shaping societies, is an investment in a brighter future.",
        "The power of forgiveness, a path to healing and reconciliation, allows us to move forward from past hurts.",
        "The concept of reality, subjective and ever-evolving, is shaped by our experiences and perceptions.",
        "The importance of critical thinking, the ability to question and analyze information, is essential in an age of misinformation.",
        "The power of nature, both awe-inspiring and destructive, compels us to respect its delicate balance.",
        "The concept of infinity, vast and incomprehensible, sparks wonder and ignites the human imagination.",
        "The enduring power of love, a force that transcends logic and reason, connects us to others and gives life meaning.",
        "The search for meaning, a fundamental human quest, motivates us to find purpose and significance in our lives.",
        "The value of community, a sense of belonging and support, strengthens individuals and enriches society as a whole."

    ]
    var RandomArray = Math.floor(Math.random() * array.length)
    var GetTHeRandomArray= array[RandomArray]
    // console.log(GetTHeRandomArray)
    inner.innerHTML = GetTHeRandomArray
    var submit = document.getElementById("Submit")
    var text = document.getElementById("text")
    submit.addEventListener("click",()=>{
    localStorage.setItem("textValue",text.value)
    var ls = localStorage.getItem("textValue")
    console.log(ls.toString())
    for(i=0;i<62;i++){
        if(text.value == array[i]){
             alert("bravo")
        }
    }
})
}
setTimeout(()=>{
    a4ert("time down")
},30000)
function Presson_Key_Bourd() {
    var q = document.getElementById("q")
    var w = document.getElementById("w")
    var E = document.getElementById("e")
    var r = document.getElementById("r")
    var t = document.getElementById("t")
    var y = document.getElementById("y")
    var u = document.getElementById("u")
    var i = document.getElementById("i")
    var o = document.getElementById("o")
    var p = document.getElementById("p")
    var a = document.getElementById("a")
    var s = document.getElementById("s")
    var d = document.getElementById("d")
    var f = document.getElementById("f")
    var g = document.getElementById("g")
    var h = document.getElementById("h")
    var j = document.getElementById("j")
    var k = document.getElementById("k")
    var l = document.getElementById("l")
    var z = document.getElementById("z")
    var x = document.getElementById("x")
    var c = document.getElementById("c")
    var v = document.getElementById("v")
    var b = document.getElementById("b")
    var n = document.getElementById("n")
    var m = document.getElementById("m")
    var spacebar = document.getElementById("spacebar")
    addEventListener("keydown", (e) => {
        console.log(e.code)

        if (e.code == "Space") {
            spacebar.style.backgroundColor = "red"
            console.log(this)
            setTimeout(() => {
                spacebar.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyQ") {
            q.style.backgroundColor = "red"
            setTimeout(() => {
                q.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyW") {
            w.style.backgroundColor = "red"
            setTimeout(() => {
                w.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyE") {
            E.style.backgroundColor = "red"
            setTimeout(() => {
                E.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyR") {
            r.style.backgroundColor = "red"
            setTimeout(() => {
                r.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyT") {
            t.style.backgroundColor = "red"
            setTimeout(() => {
                t.style.backgroundColor = "#262626"
            }, 3000)
        }
        // 
        if (e.code == "KeyY") {
            y.style.backgroundColor = "red"
            console.log(this)
            setTimeout(() => {
                y.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyU") {
            u.style.backgroundColor = "red"
            setTimeout(() => {
                u.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyI") {
            i.style.backgroundColor = "red"
            setTimeout(() => {
                i.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyO") {
            o.style.backgroundColor = "red"
            setTimeout(() => {
                o.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyR") {
            r.style.backgroundColor = "red"
            setTimeout(() => {
                r.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyO") {
            o.style.backgroundColor = "red"
            setTimeout(() => {
                o.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyP") {
            p.style.backgroundColor = "red"
            setTimeout(() => {
                p.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyA") {
            a.style.backgroundColor = "red"
            setTimeout(() => {
                a.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyS") {
            s.style.backgroundColor = "red"
            setTimeout(() => {
                s.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyD") {
            d.style.backgroundColor = "red"
            setTimeout(() => {
                d.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyF") {
            f.style.backgroundColor = "red"
            setTimeout(() => {
                f.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyG") {
            g.style.backgroundColor = "red"
            setTimeout(() => {
                g.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyH") {
            h.style.backgroundColor = "red"
            setTimeout(() => {
                h.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyJ") {
            j.style.backgroundColor = "red"
            setTimeout(() => {
                j.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyK") {
            k.style.backgroundColor = "red"
            setTimeout(() => {
                k.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyL") {
            l.style.backgroundColor = "red"
            setTimeout(() => {
                l.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyZ") {
            z.style.backgroundColor = "red"
            setTimeout(() => {
                z.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyX") {
            x.style.backgroundColor = "red"
            setTimeout(() => {
                x.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyC") {
            c.style.backgroundColor = "red"
            setTimeout(() => {
                c.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyV") {
            v.style.backgroundColor = "red"
            setTimeout(() => {
                v.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyB") {
            b.style.backgroundColor = "red"
            setTimeout(() => {
                b.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyN") {
            n.style.backgroundColor = "red"
            setTimeout(() => {
                n.style.backgroundColor = "#262626"
            }, 3000)
        }
        if (e.code == "KeyM") {
            m.style.backgroundColor = "red"
            setTimeout(() => {
                m.style.backgroundColor = "#262626"
            }, 3000)
        }
    })
}
Presson_Key_Bourd()
checkthebox()