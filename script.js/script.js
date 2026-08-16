/* =====================================================
   SOMAKENYA
   MAIN JAVASCRIPT
   ===================================================== */


/* =====================================================
   1. PRACTICE QUESTIONS
   ===================================================== */

const questions = [

    {
        question: "What is the numerator in 3/4?",
        answers: ["3", "4", "7", "1"],
        correct: 0
    },

    {
        question: "What is the denominator in 5/8?",
        answers: ["5", "3", "8", "13"],
        correct: 2
    },

    {
        question: "Which fraction represents one half?",
        answers: ["1/3", "2/4", "3/5", "4/5"],
        correct: 1
    },

    {
        question: "How many quarters make one whole?",
        answers: ["2", "3", "4", "5"],
        correct: 2
    },

    {
        question: "Which fraction is greater?",
        answers: ["1/4", "3/4", "1/8", "2/8"],
        correct: 1
    }

];


/* These remember the learner's current quiz */

let currentQuestion = 0;

let score = 0;


/* =====================================================
   2. START LEARNING
   ===================================================== */

function startLearning() {

    const learnSection =
        document.getElementById("learn");

    if (learnSection) {

        learnSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   3. EXPLORE SUBJECTS
   ===================================================== */

function exploreCourses() {

    const learnSection =
        document.getElementById("learn");

    if (learnSection) {

        learnSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   4. CHOOSE LEARNING LEVEL
   ===================================================== */

function openLevel(level) {

    const section =
        document.getElementById("level-selection");

    const title =
        document.getElementById(
            "selected-level-title"
        );

    const description =
        document.getElementById(
            "selected-level-description"
        );

    const classGrid =
        document.getElementById("class-grid");


    if (!section || !classGrid) {
        return;
    }


    section.style.display = "block";


    if (title) {
        title.textContent = level;
    }


    if (description) {

        description.textContent =
            "Choose your class or form to begin learning.";

    }


    classGrid.innerHTML = "";


    let classes = [];


    /* PRIMARY */

    if (level === "Primary") {

        classes = [
            "Grade 1",
            "Grade 2",
            "Grade 3",
            "Grade 4",
            "Grade 5",
            "Grade 6"
        ];

    }


    /* JSS */

    else if (level === "Junior Secondary") {

        classes = [
            "Grade 7",
            "Grade 8",
            "Grade 9"
        ];

    }


    /* SECONDARY */

    else if (level === "Secondary") {

        classes = [
            "Form 1",
            "Form 2",
            "Form 3",
            "Form 4"
        ];

    }


    /* CREATE THE CLASS CARDS */

    classes.forEach(function(className) {

        const card =
            document.createElement("div");

        card.className =
            "class-card";


        card.innerHTML = `

            <div class="class-card-icon">
                🎓
            </div>

            <h3>
                ${className}
            </h3>

            <p>
                Explore lessons, revision and quizzes.
            </p>

            <span>
                Start learning →
            </span>

        `;


        card.addEventListener(
            "click",
            function() {

                openClass(
                    level,
                    className
                );

            }
        );


        classGrid.appendChild(card);

    });


    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   5. CHOOSE CLASS
   ===================================================== */

function openClass(level, className) {

    const subjectSection =
        document.getElementById(
            "subject-selection"
        );

    const title =
        document.getElementById(
            "selected-class-title"
        );

    const label =
        document.getElementById(
            "subject-level-label"
        );

    const subjectGrid =
        document.getElementById(
            "app-subject-grid"
        );


    if (!subjectSection || !subjectGrid) {
        return;
    }


    subjectSection.style.display =
        "block";


    if (title) {
        title.textContent = className;
    }


    if (label) {
        label.textContent =
            level.toUpperCase();
    }


    subjectGrid.innerHTML = "";


    let categories = [];


    /* ================= PRIMARY ================= */

    if (level === "Primary") {

        categories = [

            {
                name: "Core Learning",

                subjects: [
                    ["🔢", "Mathematics"],
                    ["📖", "English"],
                    ["🗣️", "Kiswahili"]
                ]

            },

            {
                name: "Science & Environment",

                subjects: [
                    ["🔬", "Science & Technology"],
                    ["🌱", "Agriculture"],
                    ["🌍", "Environmental Activities"]
                ]

            },

            {
                name: "Creative & Social",

                subjects: [
                    ["🎨", "Creative Activities"],
                    ["🌍", "Social Studies"],
                    ["❤️", "Life Skills"]
                ]

            },

            {
                name: "Religious & Personal Development",

                subjects: [
                    ["🙏", "Religious Education"],
                    ["🍎", "Hygiene & Nutrition"]
                ]

            }

        ];

    }


    /* ================= JSS ================= */

    else if (level === "Junior Secondary") {

        categories = [

            {
                name: "Core Subjects",

                subjects: [
                    ["🔢", "Mathematics"],
                    ["📖", "English"],
                    ["🗣️", "Kiswahili"],
                    ["🔬", "Integrated Science"]
                ]

            },

            {
                name: "Humanities",

                subjects: [
                    ["🌍", "Social Studies"],
                    ["🙏", "Religious Education"],
                    ["❤️", "Life Skills"]
                ]

            },

            {
                name: "Technical & Applied",

                subjects: [
                    ["💻", "Computer Science"],
                    ["🛠️", "Pre-Technical Studies"],
                    ["🌱", "Agriculture & Nutrition"],
                    ["💼", "Business Studies"]
                ]

            },

            {
                name: "Creative",

                subjects: [
                    ["🎨", "Creative Arts"],
                    ["⚽", "Sports"]
                ]

            }

        ];

    }


    /* ================= SECONDARY ================= */

    else if (level === "Secondary") {

        categories = [

            {
                name: "Languages",

                subjects: [
                    ["📖", "English"],
                    ["🗣️", "Kiswahili"],
                    ["🇫🇷", "French"],
                    ["🇩🇪", "German"]
                ]

            },

            {
                name: "Sciences",

                subjects: [
                    ["🔢", "Mathematics"],
                    ["🧬", "Biology"],
                    ["⚗️", "Chemistry"],
                    ["⚡", "Physics"]
                ]

            },

            {
                name: "Humanities",

                subjects: [
                    ["🌍", "Geography"],
                    ["📜", "History & Government"],
                    ["💼", "Business Studies"]
                ]

            },

            {
                name: "Technical & Creative",

                subjects: [
                    ["💻", "Computer Studies"],
                    ["🌱", "Agriculture"],
                    ["🎨", "Art & Design"],
                    ["🎵", "Music"]
                ]

            },

            {
                name: "Religious Education",

                subjects: [
                    ["✝️", "CRE"],
                    ["☪️", "IRE"]
                ]

            }

        ];

    }


    /* CREATE SUBJECTS */

    categories.forEach(function(category) {

        const categoryTitle =
            document.createElement("h3");

        categoryTitle.className =
            "subject-category-title";

        categoryTitle.textContent =
            category.name;

        subjectGrid.appendChild(
            categoryTitle
        );


        category.subjects.forEach(
            function(subject) {

                const icon = subject[0];

                const name = subject[1];


                const card =
                    document.createElement("div");

                card.className =
                    "app-subject-card";


                card.innerHTML = `

                    <div class="subject-icon">
                        ${icon}
                    </div>

                    <h3>
                        ${name}
                    </h3>

                    <p>
                        Lessons, practice and quizzes
                    </p>

                `;


                card.addEventListener(
                    "click",
                    function() {

                        openSubject(
                            level,
                            className,
                            name
                        );

                    }
                );


                subjectGrid.appendChild(card);

            }
        );

    });


    subjectSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   6. CHOOSE SUBJECT
   ===================================================== */

function openSubject(
    level,
    className,
    subject
) {

    const topicSection =
        document.getElementById(
            "topic-selection"
        );

    const title =
        document.getElementById(
            "selected-subject-title"
        );

    const label =
        document.getElementById(
            "topic-level-label"
        );

    const topicGrid =
        document.getElementById(
            "topic-grid"
        );


    if (!topicSection || !topicGrid) {
        return;
    }


    topicSection.style.display =
        "block";


    if (title) {
        title.textContent = subject;
    }


    if (label) {
        label.textContent =
            className.toUpperCase();
    }


    topicGrid.innerHTML = "";


    let topics = [];


    /* MATHEMATICS */

    if (subject === "Mathematics") {

        topics = [

            "Numbers",
            "Addition & Subtraction",
            "Multiplication & Division",
            "Fractions",
            "Decimals",
            "Measurement",
            "Geometry",
            "Data Handling"

        ];

    }


    /* ENGLISH */

    else if (subject === "English") {

        topics = [

            "Grammar",
            "Vocabulary",
            "Reading",
            "Writing",
            "Listening",
            "Speaking",
            "Comprehension",
            "Literature"

        ];

    }


    /* KISWAHILI */

    else if (subject === "Kiswahili") {

        topics = [

            "Sarufi",
            "Msamiati",
            "Kusoma",
            "Kuandika",
            "Kusikiliza",
            "Kuzungumza",
            "Ufahamu",
            "Fasihi"

        ];

    }


    /* SCIENCE */

    else if (

        subject === "Science" ||
        subject === "Science & Technology" ||
        subject === "Integrated Science"

    ) {

        topics = [

            "Living Things",
            "Matter",
            "Energy",
            "Environment",
            "Human Body",
            "Plants",
            "Animals",
            "Health & Safety"

        ];

    }


    /* OTHER SUBJECTS */

    else {

        topics = [

            "Introduction",
            "Key Concepts",
            "Important Terms",
            "Examples",
            "Practice",
            "Revision"

        ];

    }


    /* CREATE TOPIC CARDS */

    topics.forEach(
        function(topic, index) {

            const card =
                document.createElement("div");


            card.className =
                "topic-card";


            card.innerHTML = `

                <div class="topic-number">
                    ${index + 1}
                </div>

                <h3>
                    ${topic}
                </h3>

                <p>
                    Learn the key concepts
                    and skills.
                </p>

                <span>
                    Start topic →
                </span>

            `;


            card.addEventListener(
                "click",
                function() {

                    openTopic(
                        level,
                        className,
                        subject,
                        topic
                    );

                }
            );


            topicGrid.appendChild(card);

        }
    );


    topicSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   7. OPEN LESSON
   ===================================================== */

function openTopic(
    level,
    className,
    subject,
    topic
) {

    const lessonSection =
        document.getElementById(
            "lesson-section"
        );

    const lessonTitle =
        document.getElementById(
            "lesson-title"
        );

    const lessonBreadcrumb =
        document.getElementById(
            "lesson-breadcrumb"
        );


    if (!lessonSection) {
        return;
    }


    lessonSection.style.display =
        "block";


    if (lessonTitle) {

        lessonTitle.textContent =
            topic;

    }


    if (lessonBreadcrumb) {

        lessonBreadcrumb.textContent =
            subject.toUpperCase() +
            " • " +
            topic.toUpperCase();

    }


    lessonSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   8. START PRACTICE
   ===================================================== */

function startPractice() {

    const practiceSection =
        document.getElementById(
            "practice-section"
        );


    if (!practiceSection) {
        return;
    }


    practiceSection.style.display =
        "block";


    currentQuestion = 0;

    score = 0;


    loadQuestion();


    practiceSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   9. LOAD QUESTION
   ===================================================== */

function loadQuestion() {

    const question =
        questions[currentQuestion];


    if (!question) {
        return;
    }


    const questionText =
        document.getElementById(
            "question-text"
        );

    const questionProgress =
        document.getElementById(
            "question-progress"
        );

    const answerGrid =
        document.getElementById(
            "answer-grid"
        );

    const feedback =
        document.getElementById(
            "feedback"
        );

    const nextButton =
        document.getElementById(
            "next-question"
        );


    if (!questionText || !answerGrid) {
        return;
    }


    questionText.textContent =
        question.question;


    if (questionProgress) {

        questionProgress.textContent =
            "Question " +
            (currentQuestion + 1) +
            " of " +
            questions.length;

    }


    answerGrid.innerHTML = "";


    if (feedback) {
        feedback.textContent = "";
    }


    if (nextButton) {
        nextButton.style.display = "none";
    }


    question.answers.forEach(
        function(answer, index) {

            const button =
                document.createElement("button");


            button.className =
                "answer-btn";


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                function() {

                    checkAnswer(
                        index,
                        button
                    );

                }
            );


            answerGrid.appendChild(
                button
            );

        }
    );

}


/* =====================================================
   10. CHECK ANSWER
   ===================================================== */

function checkAnswer(
    selected,
    selectedButton
) {

    const question =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(function(button) {

        button.disabled = true;

    });


    const feedback =
        document.getElementById(
            "feedback"
        );


    if (
        selected ===
        question.correct
    ) {

        selectedButton.classList.add(
            "correct"
        );


        if (feedback) {

            feedback.textContent =
                "✓ Correct! Great job!";

        }


        score++;

    }

    else {

        selectedButton.classList.add(
            "wrong"
        );


        if (feedback) {

            feedback.textContent =
                "Not quite. Keep learning and try the next one!";

        }


        if (buttons[question.correct]) {

            buttons[
                question.correct
            ].classList.add(
                "correct"
            );

        }

    }


    const nextButton =
        document.getElementById(
            "next-question"
        );


    if (nextButton) {

        nextButton.style.display =
            "inline-block";

    }

}


/* =====================================================
   11. NEXT QUESTION
   ===================================================== */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {

        finishQuiz();

        return;

    }


    loadQuestion();

}


/* =====================================================
   12. FINISH QUIZ
   ===================================================== */

function finishQuiz() {

    const questionCard =
        document.querySelector(
            ".question-card"
        );


    if (!questionCard) {
        return;
    }


    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    saveQuizResult();


    questionCard.innerHTML = `

        <div style="text-align:center">

            <div style="font-size:60px">
                🏆
            </div>

            <h2>
                Practice Complete!
            </h2>

            <p style="margin:15px 0">

                You scored

                <strong>
                    ${score}/${questions.length}
                </strong>

                <br>

                ${percentage}%

            </p>

            <button
                class="primary-btn"
                onclick="restartPractice()"
            >
                Try Again
            </button>

        </div>

    `;

}


/* =====================================================
   13. RESTART PRACTICE
   ===================================================== */

function restartPractice() {

    currentQuestion = 0;

    score = 0;


    const questionCard =
        document.querySelector(
            ".question-card"
        );


    if (!questionCard) {
        return;
    }


    questionCard.innerHTML = `

        <h3 id="question-text"></h3>

        <div
            class="answer-grid"
            id="answer-grid"
        ></div>

        <div
            class="feedback"
            id="feedback"
        ></div>

        <button
            class="primary-btn next-question-btn"
            id="next-question"
            onclick="nextQuestion()"
        >
            Next Question →
        </button>

    `;


    loadQuestion();

}


/* =====================================================
   14. SAVE PROGRESS
   ===================================================== */

function saveProgress() {

    const progressData = {

        score: score,

        totalQuestions:
            questions.length,

        percentage:
            Math.round(
                (score / questions.length) * 100
            ),

        lastActivity:
            new Date().toLocaleDateString()

    };


    localStorage.setItem(
        "somaKenyaProgress",
        JSON.stringify(progressData)
    );

}


/* =====================================================
   15. SAVE QUIZ RESULT
   ===================================================== */

function saveQuizResult() {

    saveProgress();

}


/* =====================================================
   16. LOAD SAVED PROGRESS
   ===================================================== */

function loadProgress() {

    const saved =
        localStorage.getItem(
            "somaKenyaProgress"
        );


    if (!saved) {
        return;
    }


    const progress =
        JSON.parse(saved);


    const progressElement =
        document.getElementById(
            "weekly-progress"
        );


    const messageElement =
        document.getElementById(
            "progress-message"
        );


    if (progressElement) {

        progressElement.textContent =
            progress.percentage + "%";

    }


    if (messageElement) {

        if (progress.percentage >= 80) {

            messageElement.textContent =
                "Excellent work! Keep it up! 🏆";

        }

        else if (
            progress.percentage >= 50
        ) {

            messageElement.textContent =
                "You're making good progress! 💪";

        }

        else {

            messageElement.textContent =
                "Keep learning and practicing! 📚";

        }

    }

}


/* =====================================================
   17. LOAD PROGRESS WHEN SOMAKENYA OPENS
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadProgress();

        updateDashboard();

    }
);
/* =====================================================
   DASHBOARD
   ===================================================== */

function updateDashboard() {

    const saved =
        localStorage.getItem(
            "somaKenyaProgress"
        );


    if (!saved) {
        return;
    }


    const progress =
        JSON.parse(saved);


    const progressElement =
        document.getElementById(
            "dashboard-progress"
        );


    const scoreElement =
        document.getElementById(
            "dashboard-score"
        );


    if (progressElement) {

        progressElement.textContent =
            progress.percentage + "%";

    }


    if (scoreElement) {

        scoreElement.textContent =
            progress.percentage + "%";

    }

}


/* =====================================================
   CONTINUE LEARNING
   ===================================================== */

function continueLearning() {

    const lesson =
        document.getElementById(
            "lesson-section"
        );


    if (lesson) {

        lesson.style.display =
            "block";

        lesson.scrollIntoView({
            behavior: "smooth"
        });

    }

}

/* =====================================================
   LESSON COMPLETION SYSTEM
   ===================================================== */


/*
   Get the number of completed lessons
*/

function getCompletedLessons() {

    const saved =
        localStorage.getItem(
            "somaKenyaLessons"
        );


    if (!saved) {

        return [];

    }


    return JSON.parse(saved);

}


/*
   Complete the current lesson
*/

function completeLesson() {

    const lessonTitle =
        document.getElementById(
            "lesson-title"
        );


    if (!lessonTitle) {

        return;

    }


    const lessonName =
        lessonTitle.textContent.trim();


    if (!lessonName) {

        return;

    }


    let completedLessons =
        getCompletedLessons();


    /*
       Prevent duplicate lessons
    */

    if (
        !completedLessons.includes(
            lessonName
        )
    ) {

        completedLessons.push(
            lessonName
        );

    }


    /*
       Save to browser
    */

    localStorage.setItem(

        "somaKenyaLessons",

        JSON.stringify(
            completedLessons
        )

    );


    /*
       Change the button
    */

    const button =
        document.querySelector(
            ".complete-lesson-btn"
        );


    if (button) {

        button.textContent =
            "✓ Lesson Completed";

        button.classList.add(
            "completed"
        );

    }


    /*
       Update dashboard
    */

    updateDashboard();


    /*
       Tell the learner
    */

    alert(
        "Lesson completed! 🎉\n\n" +
        "Your progress has been updated."
    );

}