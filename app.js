// ── Nav scroll effect ──
window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile nav toggle ──
document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
    });
});

// ── FAQ toggle ──
function toggleFaq(btn) {
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
}

// ── Curriculum data ──
const curriculum = [
    // Level 1
    [
        {
            num: 1, title: "How AI Actually Works",
            desc: "Mental models for LLMs, what they can and cannot do, interpolation vs. extrapolation. Live demos of AI succeeding and failing.",
            test: "Identify 4 factual errors in an AI-generated executive summary and assess business impact."
        },
        {
            num: 2, title: "The Hallucination Problem",
            desc: "Why models confidently produce wrong answers. 5 hallucination patterns. Real-world case studies from legal, finance, and healthcare.",
            test: "Red-flag hallucinated claims in an AI-generated competitive analysis and propose a reliable alternative approach."
        },
        {
            num: 3, title: "The Evaluation Framework",
            desc: "The 5-point checklist: source verification, logical consistency, domain plausibility, statistical validity, recency.",
            test: "Apply the full 5-point framework to an AI-generated risk assessment and assign a confidence rating with justification."
        },
        {
            num: 4, title: "Smart Prompting for Business",
            desc: "4 prompt frameworks (BAB, COAST, Chain-of-Thought, Decomposition). When NOT to use AI. Live prompting with evaluation.",
            test: "Write a 1-page AI-assisted brief on chatbot adoption, clearly marking verified vs. unverified claims with a confidence statement."
        }
    ],
    // Level 2
    [
        {
            num: 5, title: "The Override Decision",
            desc: "Trust / Verify / Modify / Reject framework. The 3 factors: stakes, reversibility, expertise. Speed override drills.",
            test: "Evaluate 3 AI outputs for a quarterly business review: assign override decisions, identify ethical concerns, and flag urgent verification needs."
        },
        {
            num: 6, title: "Red Team Thinking",
            desc: "6 attack vectors for adversarial evaluation. Red Team / Blue Team paired exercises. Building the 'inner critic' habit.",
            test: "Write a 300-400 word Red Team critique of an AI-generated pricing strategy using all 6 attack vectors."
        },
        {
            num: 7, title: "Domain-Applied AI Judgment",
            desc: "Industry-specific AI traps (finance, HR, marketing, operations, legal). Building your personal 10-point domain checklist.",
            test: "Evaluate an AI-generated deliverable in your professional domain, identifying 3+ issues requiring specialized knowledge."
        },
        {
            num: 8, title: "Communicating AI-Informed Decisions",
            desc: "The uncertainty spectrum. Owning the recommendation. Boardroom simulation with live Q&A from peers.",
            test: "Write an executive brief from flawed AI analysis, including a confidence appendix and prepared answers for 3 skeptical questions."
        }
    ],
    // Level 3
    [
        {
            num: 9, title: "Designing AI-Augmented Workflows",
            desc: "Mapping processes, classifying steps, inserting checkpoints. The 3 workflow design mistakes to avoid.",
            test: "Redesign a 7-step proposal process with AI assistance, including checkpoints, escalation triggers, and a risk statement."
        },
        {
            num: 10, title: "AI Governance & Policy",
            desc: "The 7 components of a practical AI use policy. Data classification. Incident response. Disclosure requirements.",
            test: "Classify 5 AI incident scenarios by severity, identify policy gaps, write immediate responses and systemic fixes."
        },
        {
            num: 11, title: "Capstone Preparation",
            desc: "Define your real organizational problem. Design the full solution: AI role, human role, validation, override protocol, risks.",
            test: "Submit complete capstone proposal: problem, AI approach, workflow diagram, validation plan, override protocol, risk assessment."
        },
        {
            num: 12, title: "Capstone Presentation & Certification",
            desc: "8-minute presentation + 5-minute Q&A. Defend your approach under questioning. Peer review. Certification ceremony.",
            test: "Deliver capstone presentation scored on: problem framing, AI application, critical evaluation, oversight design, communication."
        }
    ]
];

function showCurriculum(level, tabBtn) {
    document.querySelectorAll('.cur-tab').forEach(t => t.classList.remove('active'));
    tabBtn.classList.add('active');

    const content = document.getElementById('curriculumContent');
    content.innerHTML = '';

    curriculum[level].forEach(s => {
        content.innerHTML += `
            <div class="session-card">
                <div class="session-num">${s.num}</div>
                <div class="session-info">
                    <h4>Session ${s.num}: ${s.title}</h4>
                    <p>${s.desc}</p>
                    <span class="session-test">Test Case: ${s.test}</span>
                    <a href="curriculum.html#session${s.num}" class="session-link">View Full Materials &rarr;</a>
                </div>
            </div>
        `;
    });
}

// Initialize curriculum
showCurriculum(0, document.querySelector('.cur-tab'));

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navHeight = document.getElementById('nav').offsetHeight;
            const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});
