document.addEventListener("DOMContentLoaded", function() {
    var surpriseBtn = document.getElementById('surpriseBtn');
    var bgChangeBtn = document.getElementById('bgChangeBtn');
    var confettiBtn = document.getElementById('confettiBtn');
    var surpriseMessage = document.getElementById('surpriseMessage');
    var quotes = document.querySelectorAll('.quote');
    var factBtn = document.getElementById('factBtn');
    var funFact = document.getElementById('funFact');
    var modalBtn = document.getElementById('modalBtn');
    var modal = document.getElementById('myModal');
    var closeModal = document.getElementsByClassName('close')[0];

    // List of surprise messages
    var surprises = [
        "You are amazing! 🎉",
        "Keep smiling! 😊",
        "You're doing great! 🌟",
        "You deserve a break! ☕",
    ];

    // Random fun facts
    var funFacts = [
        "Honey never spoils. Archaeologists have found 3000-year-old honey that's still edible!",
        "A day on Venus is longer than a year on Venus.",
        "Bananas are berries, but strawberries aren't!",
        "Octopuses have three hearts!",
        "Wombat poop is cube-shaped."
    ];

    // Button click to display a random surprise
    surpriseBtn.addEventListener('click', function() {
        var randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
        surpriseMessage.textContent = randomSurprise;
        surpriseMessage.style.display = 'block';
    });

    // Button to change background color
    bgChangeBtn.addEventListener('click', function() {
        var colors = ['#ff9a9e', '#fad0c4', '#fcb69f', '#cfd9df', '#a1c4fd', '#d4fc79'];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.background = randomColor;
    });

    // Hover effect to change quotes dynamically
    quotes.forEach(function(quote) {
        quote.addEventListener('mouseenter', function() {
            var newQuotes = [
                "Success is the sum of small efforts.",
                "Dream big, work hard!",
                "Take action. Every step counts.",
                "Believe in yourself!"
            ];
            var randomQuote = newQuotes[Math.floor(Math.random() * newQuotes.length)];
            quote.textContent = randomQuote;
        });
    });

    // Button to display a random fun fact
    factBtn.addEventListener('click', function() {
        var randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        funFact.textContent = randomFact;
        funFact.style.display = 'block';
    });

    // Confetti Effect
    confettiBtn.addEventListener('click', function() {
        // We’ll use a simple library called "canvas-confetti" for confetti effect
        // You can link this library in your HTML to enable confetti animation:
        // <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js"></script>
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });

    // Modal functionality
    modalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Close the modal when user clicks the 'x'
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal if user clicks outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});