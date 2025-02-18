document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => { //solveRoom - Solveroom1
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID,  roomResult1 --  room1Result
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`
                console.log("Most Recent Book:", mostRecentBook);
    });
    });
     //Room 2
    window.onload = function (){ 
    document.getElementById("solveRoom2").addEventListener("click", async () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'promises', 'event loop', 'callback','destructuring','async', 'spread operator']); //added JS concepts
        // 🪲 Bug: What's mssing from JS concepts?
        const reactConcepts = new Set(['components', 'jsx', 'functions', 'async', 'state management', 'props','useEffect','context API','react router']); //added react concepts
        // 🪲 Bug: Incorrect function call
        const commonConcepts = findIntersection(jsConcepts, reactConcepts); //jsConcepts was used twice
        const commonConceptsString = Array.from(commonConcepts).join(', '); // created a string array from commonConcepts
        document.getElementById('room2Result').innerHTML = `The code to unlock the door is: ${Array.from (commonConcepts)}`; // created a string array from commonConcepts and displayed it in html.
        console.log("Common Concepts:", commonConcepts);
    });  
};
});

    // 🪲 Bug: Asynchronous function ?

        document.getElementById("solveRoom3").addEventListener("click", async () => {
            try {
                const response = await fetch('directions.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch directions.json');
                }
                const directions = await response.json();
    
                // Navigate through the labyrinth
                const message = await navigateLabyrinth(directions);
    
                // Display the result
                document.getElementById("room3Result").textContent = message;
            } catch (error) {
                console.error('Error:', error);
                document.getElementById("room3Result").textContent= 'An error occurred while solving the labyrinth.';
            }
        });
    

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent); // replaced < with > , otherwise oldest book is returned
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    const intersection = new Set([...setA].filter (item => setB.has(item)))  // Filter items that are present in both sets, originally only filtered setA]
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        await new Promise(resolve => setTimeout(resolve, 1000)); //added await function to add delay.
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
};