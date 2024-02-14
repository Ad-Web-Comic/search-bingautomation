const { exec } = require('child_process');

function automatedSearch(query) {
    const searchCommand = `start https://www.bing.com/search?q=${encodeURIComponent(query)}`;
    exec(searchCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Search for '${query}' has been initiated.`);
    });
}

// List of search queries
const searchQueries = [
    "cats", "dogs", "penguins", "beaches", "mountains", "baby", "noora", "programming",
    "movies", "books", "music", "art", "sports", "food", "travel", "history", "science",
    "technology", "finance", "health", "fitness", "yoga", "meditation", "hiking", "photography",
    "gardening", "cooking", "baking", "painting", "drawing", "sculpture", "architecture",
    "design", "fashion", "business", "marketing", "entrepreneurship", "education", "languages",
    "culture", "politics", "environment", "climate change", "sustainability", "animals", "wildlife",
    "conservation", "adventure", "exploration", "mythology", "folklore", "legends", "fairy tales",
    "superheroes", "villains", "robots", "aliens", "dinosaurs", "ancient civilizations", "mythical creatures",
    "cryptocurrency", "blockchain", "virtual reality", "augmented reality", "artificial intelligence",
    "machine learning", "deep learning", "neural networks", "big data", "cloud computing", "cybersecurity",
    "privacy", "social media", "digital marketing", "ecommerce", "startup", "innovation", "creativity",
    "productivity", "motivation", "inspiration", "self-improvement", "leadership", "teamwork", "communication",
    "negotiation", "conflict resolution", "stress management", "time management", "goal setting", "personal finance",
    "budgeting", "investing", "retirement planning", "wealth management", "financial independence", "passive income",
    "side hustle", "freelancing", "remote work", "work-life balance", "mental health", "emotional intelligence",
    "mindfulness", "gratitude", "positivity", "happiness", "relationships", "friendship", "family", "love",
    "dating", "marriage", "parenting", "childhood", "education system", "teaching", "learning", "student life",
    "college", "university", "graduation", "career", "job search", "interviews", "resume", "cover letter",
    "professional development", "networking", "mentoring", "coaching", "business strategy", "management",
    "operations", "supply chain", "logistics", "manufacturing", "quality control", "customer service",
    "sales", "marketing"
];

// Loop through each search query and perform automated search
searchQueries.forEach(query => {
    automatedSearch(query);
});
