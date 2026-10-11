const questions = [
    // Section A: AI Literacy
    {
        section: "Section A: AI Literacy",
        q: "A large language model generates text by:",
        options: [
            "Looking up verified facts in a curated knowledge base",
            "Predicting the most statistically likely next tokens based on patterns learned during training",
            "Thinking through the problem step-by-step using logic, the way a human would",
            "Running a search engine query and summarizing the top results"
        ],
        correct: 1,
        explanation: "LLMs are pattern-matching systems that predict probable next tokens. Even when they appear to reason, the underlying mechanism is statistical prediction. Tools like web search can be added on top, but the core model itself generates text through prediction."
    },
    {
        section: "Section A: AI Literacy",
        q: "Many AI tools (ChatGPT, Gemini, Copilot) now have web browsing capabilities. Despite this, which limitation still applies?",
        options: [
            "They cannot access any website at all",
            "They can retrieve current information but may still misinterpret, selectively quote, or hallucinate details even when the correct source is available",
            "Web browsing completely eliminates the hallucination problem",
            "They can only access websites that have paid for AI indexing"
        ],
        correct: 1,
        explanation: "Web access reduces but does not eliminate errors. AI can misread sources, cherry-pick information, combine facts incorrectly, or still generate plausible-sounding claims that the source does not support. Retrieval does not equal comprehension."
    },
    {
        section: "Section A: AI Literacy",
        q: "An AI model generates a confident, detailed answer about a niche topic in your industry. The answer sounds authoritative and includes specific numbers. What should you assume?",
        options: [
            "The numbers are accurate because the model sounds confident",
            "The numbers are always wrong because AI cannot do math",
            "Confidence of tone has no correlation with accuracy \u2014 the model can be equally confident when correct and when fabricating",
            "If the model cites a source, the numbers must be verified in that source"
        ],
        correct: 2,
        explanation: "AI models do not have an internal confidence meter that maps to accuracy. A hallucinated statistic is delivered with the same authoritative tone as a verified fact. This is the single most important thing to understand about working with AI."
    },
    {
        section: "Section A: AI Literacy",
        q: "What is the difference between an AI model's core capabilities and the tools connected to it (web search, code execution, file reading)?",
        options: [
            "There is no difference \u2014 they are all part of the same system",
            "The core model generates language from patterns; tools extend it with real-time data, computation, and file access \u2014 but the model can still misuse tool results",
            "Tools make the model perfect because they provide ground truth",
            "The core model is more reliable than the tools"
        ],
        correct: 1,
        explanation: "Understanding this distinction is critical. The model can call a tool and get accurate data back, but it can still misinterpret that data, combine it incorrectly with other information, or present it in a misleading way. Tools improve the inputs; they do not guarantee the outputs."
    },
    {
        section: "Section A: AI Literacy",
        q: "\"AI bias\" in a business context means:",
        options: [
            "The AI is too slow for business use",
            "AI outputs systematically reflect and sometimes amplify biases present in training data \u2014 affecting hiring, lending, risk scoring, and other decisions",
            "AI costs more than traditional methods",
            "Employees are biased against using AI"
        ],
        correct: 1,
        explanation: "AI systems learn from historical data. If that data contains patterns of discrimination (e.g., historically biased hiring decisions), the AI will reproduce and sometimes amplify those patterns. This is not a rare edge case \u2014 it is a structural feature of pattern-learning systems."
    },
    // Section B: Critical Evaluation
    {
        section: "Section B: Critical Evaluation",
        q: "An AI tool generates a market analysis stating: \"Company X's revenue grew 340% in Q3 2025, according to their latest earnings report.\" The AI has web access. What should you do FIRST?",
        options: [
            "Trust it \u2014 the AI has web access so it pulled this from a real source",
            "Ask the AI to double-check its own number",
            "Open the actual earnings report yourself and verify the specific claim \u2014 AI can misread, misquote, or fabricate even with source access",
            "Remove it because AI-generated statistics are never reliable"
        ],
        correct: 2,
        explanation: "Even with web access, AI can misquote sources, confuse companies, pull numbers from the wrong period, or fabricate specific figures while citing real documents. The only reliable verification is checking the primary source yourself. Asking the AI to re-check its own work often produces the same error with more confidence."
    },
    {
        section: "Section B: Critical Evaluation",
        q: "You ask an AI to list the top 5 risks for entering the Brazilian market. The output reads well and cites recent articles. Which is the BEST reason to still question it?",
        options: [
            "AI cannot understand international markets at all",
            "The risks may be generic to emerging markets rather than specific to Brazil, your industry, your company size, and your entry timing \u2014 and cited articles may not say what the AI claims they say",
            "AI is not qualified to give business advice",
            "The list is always wrong"
        ],
        correct: 1,
        explanation: "Two issues compound here: first, AI tends toward generic 'emerging market' risks rather than context-specific ones; second, citations may be real articles that do not actually support the specific claims made. Both require human domain expertise to catch."
    },
    {
        section: "Section B: Critical Evaluation",
        q: "An AI generates a recommendation with three supporting data points. You verify two \u2014 they check out. The third, a specific market share figure, cannot be found in any source. You should:",
        options: [
            "Accept the recommendation \u2014 two out of three verified is a good batting average",
            "Reject the entire recommendation and start over",
            "Use the two verified points, clearly flag the unverified market share figure as unconfirmed, adjust your confidence in the recommendation, and note the gap when presenting",
            "Ask the AI to provide a source for the third claim"
        ],
        correct: 2,
        explanation: "Proportional response: you do not throw out good data because of one unverified claim, but you also do not pass off an unverified number as fact. The professional move is to use what you can verify, flag what you cannot, and be transparent about the gap. Asking the AI for a source often produces a fabricated citation."
    },
    {
        section: "Section B: Critical Evaluation",
        q: "Your team uses AI to draft client emails and proposals. A colleague says: \"I review them before sending \u2014 I read through them and they always look fine.\" What is the hidden risk?",
        options: [
            "There is no risk if they are reviewing before sending",
            "Passive reading is not active verification \u2014 hallucinated facts, subtly wrong numbers, and mischaracterizations of client situations look 'fine' on a read-through but fail on verification",
            "The AI might use informal language",
            "Clients might notice the writing style is different"
        ],
        correct: 1,
        explanation: "This is the rubber-stamp checkpoint problem. A quick read-through catches tone and grammar issues but almost never catches fabricated statistics, misquoted terms, or subtle factual errors \u2014 because those errors are designed by the model to sound plausible. Active verification means checking specific claims, not just reading for flow."
    },
    {
        section: "Section B: Critical Evaluation",
        q: "You ask an AI the same strategic question three different ways and get three different recommendations. This most likely indicates:",
        options: [
            "The AI is malfunctioning and should not be used for this topic",
            "One of the three answers is the correct one \u2014 you just need to identify which",
            "The question touches an area where the AI has no stable basis for a recommendation \u2014 its output is heavily influenced by phrasing rather than grounded analysis, and none of the three should be trusted without independent evaluation",
            "The most detailed answer is the most reliable one"
        ],
        correct: 2,
        explanation: "When outputs vary significantly based on phrasing alone, it signals that the model is pattern-matching to your prompt style rather than drawing on stable analysis. This is a strong signal to do the analysis yourself or consult a human expert, using the AI outputs only as a starting point for ideas."
    },
    // Section C: Applied Judgment
    {
        section: "Section C: Applied Judgment",
        q: "You are using AI to help screen job applications. The AI consistently ranks candidates from one university higher than equally qualified candidates from other universities. What should you do?",
        options: [
            "Trust the AI \u2014 it probably found a genuine quality signal in the data",
            "Investigate whether the training data over-represents that university, check for proxy discrimination, and add human review to counteract potential bias before any hiring decision",
            "Remove all university information from every application",
            "Switch to a different AI tool"
        ],
        correct: 1,
        explanation: "Bias investigation first, not just removal. Removing the data is a blunt fix that loses useful context. The right response is: understand WHY the bias exists (training data, proxy variables), add human review as a counterbalance, and document the issue. Switching tools may just move the bias."
    },
    {
        section: "Section C: Applied Judgment",
        q: "Your CEO wants to use AI to predict which employees are most likely to resign in the next 6 months. Which concern should you raise FIRST?",
        options: [
            "AI predictions are never accurate enough for HR decisions",
            "The privacy, ethical, and legal implications of using employee behavioral data for attrition prediction \u2014 including whether employees consented, whether it creates a surveillance culture, and whether predictions could lead to self-fulfilling prophecies",
            "It would be cheaper to just survey employees directly",
            "The AI might leak employee data"
        ],
        correct: 1,
        explanation: "Ethics before execution. Even if the AI is technically accurate, using behavioral surveillance (login times, email patterns, meeting attendance) to predict resignations raises consent, privacy, and cultural trust issues that can cause more harm than the attrition they aim to prevent. This must be addressed before discussing accuracy."
    },
    {
        section: "Section C: Applied Judgment",
        q: "An AI financial model shows your project will deliver 45% ROI. Your 15 years of experience in this domain tells you 15-20% is realistic for this type of project. You should:",
        options: [
            "Present the 45% figure \u2014 AI analysis is more objective than personal experience",
            "Present your 15-20% estimate and ignore the AI entirely",
            "Investigate the specific assumptions driving the AI's higher number, identify where they diverge from your experience, present both scenarios with clear reasoning, and let the decision-maker see the range",
            "Average the two estimates and present 30%"
        ],
        correct: 2,
        explanation: "Your domain expertise is not 'gut feeling' \u2014 it is pattern recognition from years of real outcomes. The AI has different data and assumptions. The professional response: find the specific assumption gap (is the AI using a different market, ignoring implementation costs, extrapolating from a boom period?), present both cases, and let the reader judge. This is the integration of AI analysis with human expertise."
    },
    {
        section: "Section C: Applied Judgment",
        q: "You are designing a workflow where AI drafts legal contract clauses for client agreements. At what point MUST a human review occur?",
        options: [
            "Only when the contract value exceeds $100K",
            "Before any AI-drafted clause is included in a binding agreement \u2014 every time, regardless of value or how good the AI's track record has been",
            "Only if the AI itself flags low confidence",
            "Only for new clients \u2014 existing templates are safe to auto-generate"
        ],
        correct: 1,
        explanation: "Legal language creates binding obligations. An AI error in a contract clause can create liability that far exceeds the cost of a 5-minute legal review. AI confidence flags are unreliable \u2014 the model does not know what it does not know. Past accuracy does not guarantee future accuracy. This is a non-negotiable human checkpoint."
    },
    {
        section: "Section C: Applied Judgment",
        q: "A colleague proposes automating your team's weekly performance reports using AI. A senior analyst currently spends 4 hours producing them. What is the most important question to ask before approving?",
        options: [
            "How much money will we save on analyst time?",
            "What decisions are made based on these reports, and what is the business cost if an error in an automated report goes undetected and leads to a wrong decision?",
            "Can the AI produce the report in the same format?",
            "Will the analyst be reassigned?"
        ],
        correct: 1,
        explanation: "Decision architecture thinking: efficiency gains mean nothing if the downstream cost of an undetected error exceeds the time saved. If these reports drive resource allocation, hiring, or strategy, one wrong number could cost far more than 4 hours of analyst time. The right question is always about consequences, not savings."
    },
    // Section D: Communication & Governance
    {
        section: "Section D: Communication & Governance",
        q: "You need to present AI-assisted findings to your board. Which approach is most appropriate?",
        options: [
            "\"The AI analysis shows X\" \u2014 let the board evaluate the AI's credibility",
            "\"Our analysis, supported by AI tools and validated against [specific sources], indicates X. Key assumptions include Y, and we have [high/moderate/low] confidence because Z.\"",
            "Present the findings without mentioning AI was involved \u2014 it might reduce the board's confidence",
            "Send the raw AI output to the board with a cover note"
        ],
        correct: 1,
        explanation: "You own the recommendation \u2014 the AI assisted. Transparent methodology, specific validation, stated assumptions, and quantified confidence. This is how a professional presents analysis regardless of the tools used. Hiding AI involvement is dishonest; abdicating to 'the AI says' is unprofessional."
    },
    {
        section: "Section D: Communication & Governance",
        q: "Your company is drafting an AI use policy. Which of these is the most complete and practical approach?",
        options: [
            "A list of approved AI tools",
            "Approved tools, prohibited use cases, data classification rules (what data can/cannot be entered), human review requirements by decision stakes, disclosure requirements, and an incident reporting process",
            "A general statement encouraging responsible AI use",
            "A temporary ban on all AI until regulations are finalized"
        ],
        correct: 1,
        explanation: "A policy must be specific enough to follow and broad enough to cover emerging situations. Tool lists alone become outdated in months. Vague principles give no guidance. Bans drive AI use underground. The complete framework: approved tools + data rules + review requirements + prohibited uses + disclosure + incidents."
    },
    {
        section: "Section D: Communication & Governance",
        q: "An employee pastes confidential client financial data into a public AI chatbot to help with analysis. What is the FIRST priority?",
        options: [
            "Discipline the employee immediately",
            "Assess the exposure: exactly what data was shared, with which tool, what are that tool's data retention and training policies, does the client need to be notified, and are there regulatory reporting requirements",
            "Ban all AI tool usage company-wide",
            "Ask the AI provider to delete the data"
        ],
        correct: 1,
        explanation: "Containment and assessment before punishment. You need to know: what was exposed, is it still retained by the provider, does a breach notification obligation apply (GDPR, HIPAA, client contract), and what is the client relationship impact. Discipline follows process; panic responses (blanket bans) typically fail and drive usage underground."
    },
    {
        section: "Section D: Communication & Governance",
        q: "When defining \"prohibited use cases\" in an AI policy, the most effective criteria are:",
        options: [
            "Any use case where AI has ever made an error",
            "Use cases where the consequences of an error are severe and hard to reverse, where meaningful human oversight is impractical in the workflow, or where legal/regulatory requirements specifically prohibit automated decisions",
            "All use cases involving customers",
            "Any use case not pre-approved by the IT department"
        ],
        correct: 1,
        explanation: "Risk-based policy: prohibit based on consequence severity, reversibility, oversight feasibility, and regulatory requirements \u2014 not based on AI's error rate in general. This creates a durable framework that does not need rewriting every time AI capabilities improve."
    },
    {
        section: "Section D: Communication & Governance",
        q: "A vendor claims their AI product is \"99.5% accurate\" for invoice processing. Before purchasing, the most important question is:",
        options: [
            "What is the accuracy of the competing vendor's product?",
            "In the 0.5% of cases where it is wrong: what types of errors occur, which invoices are affected (large/small, domestic/international), who catches those errors in your workflow, and what is the financial exposure of each undetected error?",
            "Can they guarantee 100% accuracy in their SLA?",
            "Is 99.5% the industry benchmark for invoice AI?"
        ],
        correct: 1,
        explanation: "Accuracy percentages are meaningless without understanding the error distribution. If the 0.5% errors cluster in high-value international invoices and your workflow has no human checkpoint for those, the business impact could be enormous. Always ask: what are the errors, not just how many."
    }
];

let currentQ = 0;
let answers = new Array(questions.length).fill(-1);

function startAssessment() {
    document.getElementById('assessmentStart').classList.add('hidden');
    document.getElementById('assessmentQuiz').classList.remove('hidden');
    currentQ = 0;
    answers = new Array(questions.length).fill(-1);
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQ];
    document.getElementById('quizSection').textContent = q.section;
    document.getElementById('quizQuestion').textContent = `Q${currentQ + 1}. ${q.q}`;
    document.getElementById('progressText').textContent = `Question ${currentQ + 1} of ${questions.length}`;
    document.getElementById('progressFill').style.width = `${((currentQ + 1) / questions.length) * 100}%`;

    const optionsEl = document.getElementById('quizOptions');
    optionsEl.innerHTML = '';
    const letters = ['a', 'b', 'c', 'd'];
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option' + (answers[currentQ] === i ? ' selected' : '');
        btn.textContent = `${letters[i]}) ${opt}`;
        btn.onclick = () => selectOption(i);
        optionsEl.appendChild(btn);
    });

    document.getElementById('prevBtn').disabled = currentQ === 0;
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.textContent = currentQ === questions.length - 1 ? 'See Results' : 'Next';
    nextBtn.disabled = answers[currentQ] === -1;
}

function selectOption(i) {
    answers[currentQ] = i;
    document.querySelectorAll('.quiz-option').forEach((btn, idx) => {
        btn.classList.toggle('selected', idx === i);
    });
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (currentQ < questions.length - 1) {
        currentQ++;
        renderQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQ > 0) {
        currentQ--;
        renderQuestion();
    }
}

function showResults() {
    document.getElementById('assessmentQuiz').classList.add('hidden');
    document.getElementById('assessmentResult').classList.remove('hidden');

    let total = 0;
    const sectionScores = { 'A': 0, 'B': 0, 'C': 0, 'D': 0 };
    const sectionNames = {
        'A': 'AI Literacy',
        'B': 'Critical Evaluation',
        'C': 'Applied Judgment',
        'D': 'Communication & Governance'
    };

    const reviewItems = [];

    questions.forEach((q, i) => {
        const correct = answers[i] === q.correct;
        const key = q.section.includes('Section A') ? 'A' :
                     q.section.includes('Section B') ? 'B' :
                     q.section.includes('Section C') ? 'C' : 'D';
        if (correct) {
            total++;
            sectionScores[key]++;
        } else {
            reviewItems.push({
                num: i + 1,
                question: q.q,
                yourAnswer: q.options[answers[i]] || 'No answer',
                correctAnswer: q.options[q.correct],
                explanation: q.explanation,
                section: q.section
            });
        }
    });

    document.getElementById('resultScore').textContent = `${total}/20`;

    let level, desc, levelClass;
    if (total <= 7) {
        level = 'Level 1: Foundation';
        levelClass = 'level-1-result';
        desc = 'You are starting your AI critical thinking journey. Level 1 will build your understanding of how AI works, how to spot when it is wrong, and give you a repeatable framework for evaluating any AI output.';
    } else if (total <= 14) {
        level = 'Level 2: Practitioner';
        levelClass = 'level-2-result';
        desc = 'You have solid AI literacy. Level 2 will sharpen your judgment: override decisions under pressure, adversarial thinking, domain-specific evaluation, and stakeholder communication.';
    } else {
        level = 'Level 3: Advanced';
        levelClass = 'level-3-result';
        desc = 'You have strong AI evaluation skills. Level 3 focuses on leadership: designing AI-augmented workflows, writing governance policies, and completing a capstone project with real organizational impact.';
    }

    document.getElementById('resultLevel').textContent = `Your recommended starting level: ${level}`;
    document.getElementById('resultDesc').textContent = desc;

    // Section breakdown
    const breakdownEl = document.getElementById('resultBreakdown');
    breakdownEl.innerHTML = '';
    Object.keys(sectionScores).forEach(key => {
        const score = sectionScores[key];
        const pct = (score / 5) * 100;
        const color = score >= 4 ? '#10b981' : score >= 3 ? '#4f46e5' : score >= 2 ? '#f59e0b' : '#ef4444';
        breakdownEl.innerHTML += `
            <div class="breakdown-item">
                <h4>${sectionNames[key]}</h4>
                <div class="breakdown-bar"><div class="breakdown-fill" style="width: ${pct}%; background: ${color}"></div></div>
                <div class="breakdown-score">${score}/5 correct</div>
            </div>
        `;
    });

    // Detailed review of wrong answers
    if (reviewItems.length > 0) {
        const reviewEl = document.getElementById('resultReview');
        if (reviewEl) {
            reviewEl.classList.remove('hidden');
            let html = '';
            reviewItems.forEach(item => {
                html += `
                    <div class="review-item">
                        <div class="review-header">
                            <span class="review-badge">Q${item.num}</span>
                            <span class="review-section">${item.section}</span>
                        </div>
                        <p class="review-question">${item.question}</p>
                        <div class="review-answer wrong">
                            <span class="review-label">Your answer:</span>
                            <span>${item.yourAnswer}</span>
                        </div>
                        <div class="review-answer correct">
                            <span class="review-label">Correct answer:</span>
                            <span>${item.correctAnswer}</span>
                        </div>
                        <div class="review-explanation">
                            <strong>Why:</strong> ${item.explanation}
                        </div>
                    </div>
                `;
            });
            reviewEl.querySelector('.review-list').innerHTML = html;
        }
    }
}

function resetAssessment() {
    document.getElementById('assessmentResult').classList.add('hidden');
    const reviewEl = document.getElementById('resultReview');
    if (reviewEl) reviewEl.classList.add('hidden');
    document.getElementById('assessmentStart').classList.remove('hidden');
    answers = new Array(questions.length).fill(-1);
    currentQ = 0;
}
