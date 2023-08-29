import img from './images'
const reply = [{

        replies: "This image is stunning! 😍",
        artisticName: "ArtLover27",
        likes: Math.floor(Math.random() * 100),
        repliesToMain: [
            "Agreed! 🌟",
            "I wish I could create something like this. 😊",
        ],
        time: getRandomTime(),
        pic:getRandomImage()
    },
    {
        replies: "Incredible work! 👏",
        artisticName: "CreativeSoul",
        likes: Math.floor(Math.random() * 100),
        repliesToMain: [
            "Thank you! 🙌",
            
        ],
        time: getRandomTime(),
        pic:getRandomImage()
    },
        {
            replies: "This image takes my breath away! 🌌",
            artisticName: "StarryGazer",
            likes: Math.floor(Math.random() * 100),
            repliesToMain: [
                "The night sky is captivating. 🌠",
                "I feel like I'm right there under the stars. ✨",
                "An astronomical masterpiece! 🚀",
                "Each color choice is perfect. 🌈",

            ],
            time: getRandomTime(),
            pic:getRandomImage()
        },
        {
            replies: "A picture worth a thousand words! 📷",
            artisticName: "StoryTeller",
            likes: Math.floor(Math.random() * 100),
            repliesToMain: [
                "You've captured a moment frozen in time. ⏳",
                "Each detail has its own story. 📖",
                "I can imagine a whole narrative behind this. 🌟",
            ],
            time: getRandomTime(),
            pic:getRandomImage()
        },
        {
            replies: "Nature's beauty at its finest! 🍂",
            artisticName: "NaturalWanderer",
            likes: Math.floor(Math.random() * 100),
            repliesToMain: [
                "The colors of autumn are so warm and inviting. 🍁",
                "I can almost feel the crisp air. 🌬️",
                "This is a scene from my dreams. 💭",
            ],
            time: getRandomTime(),
            pic:getRandomImage()
        },
        {
            replies: "Incredible details in this shot! 🔍",
            artisticName: "DetailDevotee",
            likes: Math.floor(Math.random() * 100),
            repliesToMain: [
                "The level of precision is impressive. 👏",
                "I could spend hours studying this. 🕰️",
                "Every detail tells a story. 📸",
            ],
            time: getRandomTime(),
            pic:getRandomImage()
        },
        {
            replies: "Captured a moment of serenity! 🌊",
            artisticName: "OceanWatcher",
            likes: Math.floor(Math.random() * 100),
            repliesToMain: [
                "The waves seem so calming. 🌊",
                "I can almost hear the sound of the ocean. 🌊",
                "This is like a virtual beach getaway. 🏖️",
                "Each color choice is perfect. 🌈",

            ],
            time: getRandomTime(),
            pic:getRandomImage()
        },
        {
            replies: "A glimpse into another world! 🌏",
            artisticName: "WorldExplorer",
            likes: Math.floor(Math.random() * 100),
            repliesToMain: [
                "You've captured the essence of wanderlust. ✈️",
                "I feel like I've traveled without leaving home. 🗺️",
                "The diversity of our planet in one frame. 🌍",
            ],
            time: getRandomTime(),
            pic:getRandomImage()
        },
        {
            replies: "Colors that dance together! 🎨",
            artisticName: "ColorHarmonizer",
            likes: Math.floor(Math.random() * 100),
            repliesToMain: [
                "The palette is so soothing. 🎨",
                "This composition is visually satisfying. 👌",
            ],
            time: getRandomTime(),
            pic:getRandomImage()
        },
        {
            replies: "A masterpiece of light and shadow! ☀️🌘",
            artisticName: "LightChaser",
            likes: Math.floor(Math.random() * 100),
            repliesToMain: [
                "The play of light is extraordinary. ☀️🌘",
                "You've captured the essence of day and night. 🌞🌛",
                "The contrast is captivating. ⚫⚪",
            ],
            time: getRandomTime(),
            pic:getRandomImage()
        },
         {
             replies: "Absolutely breathtaking! 🌟",
             artisticName: "NatureEnthusiast",
             likes: Math.floor(Math.random() * 100),
             repliesToMain: [
                 "Nature's beauty captured perfectly! 🍃",
                 "I wish I could visit this place. 🌳",
             ],
             time: getRandomTime(),
             pic:getRandomImage()
         }, {
             replies: "Wow, this is pure art! 🎨",
             artisticName: "PaletteMaster",
             likes: Math.floor(Math.random() * 100),
             repliesToMain: [
                 "Your creativity knows no bounds. 🌈",
                 "The color palette is so harmonious. 🎨",
                 "I'm speechless! 🤯",
             ],
             time: getRandomTime(),
             pic:getRandomImage()
         }, {
             replies: "Love the mood of this photo! 🌆",
             artisticName: "UrbanExplorer",
             likes: Math.floor(Math.random() * 100),
             repliesToMain: [
                 "The urban vibes are strong here. 🏙️",
                
             ],
             time: getRandomTime(),
             pic:getRandomImage()
         }, {
             replies: "This is like a dream come true! ✨",
             artisticName: "DreamWeaver",
             likes: Math.floor(Math.random() * 100),
             repliesToMain: [
                 "Magical and enchanting. 🌟",
                 "I'd frame this and hang it on my wall. 🖼️",
                 "You've captured a moment of wonder. 💫",
             ],
             time: getRandomTime(),
             pic:getRandomImage()
         }, {
             replies: "Such a unique perspective! 👌",
             artisticName: "AngleSeeker",
             likes: Math.floor(Math.random() * 100),
             repliesToMain: [
                 "I'm seeing things from a new angle now. 🔍",
                 "It's like a different world from up there. 🚁",
                 "The composition is genius. 👏",
             ],
             time: getRandomTime(),
             pic:getRandomImage()
         },
    ];

    


function getRandomTime() {
    const hoursAgo = Math.floor(Math.random() * 24);
    return `${hoursAgo}h`;
}
function getRandomImage() {
    const prof = Math.floor(Math.random() * (img.length-1));
    return img[prof];
}
export default reply;
