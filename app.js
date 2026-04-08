// ===== Translations =====
const i18n = {
    en: {
        appTitle: 'AI Interviewer',
        introTitle: 'Welcome Cradis Team 3 Interview',
        introSubtitle: 'Help us improve your delivery experience by sharing your thoughts',
        guidelinesTitle: 'Before we begin',
        durationTitle: 'Duration',
        durationDesc: 'About 5\u20138 minutes (5 questions)',
        noWrongTitle: 'No right or wrong answers',
        noWrongDesc: 'We want your honest opinions and experiences',
        exitTitle: 'Exit anytime',
        exitDesc: 'You may leave the interview at any point',
        securityTitle: 'Your data is secure',
        securityDesc: 'Responses are anonymous and used only for research purposes',
        startBtn: 'Start Interview',
        submitBtn: 'Submit Answer',
        nextBtn: 'Next',
        exitBtn: 'Exit Interview',
        requiredField: 'Please provide an answer before continuing.',
        requiredSelection: 'Please select an option before continuing.',
        thankYouTitle: 'Thank You!',
        thankYouSubtitle: 'Your feedback is valuable and will help us improve the delivery experience.',
        summaryTitle: 'Your Responses',
        storageTitle: 'Storing Data for Multiple Interviews',
        exportBtn: 'Export as JSON',
        newInterviewBtn: 'New Interview',
        progressText: 'Question {current} of {total}',
        placeholderText: 'Type your answer here\u2026',
        exitConfirm: 'Are you sure you want to exit the interview?',
        errorGeneric: 'Something went wrong. Please try again.',
        errorNetwork: 'Network error. Please check your connection and try again.',
        followUpLabel: 'Follow-up',
        questionLabel: 'Question {n}',
        yes: 'Yes',
        no: 'No',
        chooseLangTitle: 'Choose your language',
    },
    ar: {
        appTitle: 'المُقابِل الذكي',
        introTitle: 'أهلاً فيك في مقابلة فريق Cradis 3',
        introSubtitle: 'ساعدنا نحسّن تجربة التوصيل من خلال مشاركتك لأفكارك',
        guidelinesTitle: 'قبل ما نبدأ',
        durationTitle: 'المدة',
        durationDesc: 'تقريباً 5–8 دقايق (5 أسئلة)',
        noWrongTitle: 'ما فيه إجابات صح أو غلط',
        noWrongDesc: 'نبي آراءك وتجاربك بصراحة',
        exitTitle: 'اطلع وقت ما تبي',
        exitDesc: 'تقدر تطلع من المقابلة بأي وقت',
        securityTitle: 'بياناتك آمنة',
        securityDesc: 'الردود مجهولة الهوية وتُستخدم لأغراض البحث فقط',
        startBtn: 'ابدأ المقابلة',
        submitBtn: 'إرسال الإجابة',
        nextBtn: 'التالي',
        exitBtn: 'اطلع من المقابلة',
        requiredField: 'اكتب إجابتك قبل ما تكمل.',
        requiredSelection: 'اختر خيار قبل ما تكمل.',
        thankYouTitle: 'يعطيك العافية!',
        thankYouSubtitle: 'ملاحظاتك تهمنا وبتساعدنا نحسّن تجربة التوصيل.',
        summaryTitle: 'إجاباتك',
        storageTitle: 'تخزين البيانات لمقابلات متعددة',
        exportBtn: 'تصدير كـ JSON',
        newInterviewBtn: 'مقابلة جديدة',
        progressText: 'السؤال {current} من {total}',
        placeholderText: 'اكتب إجابتك هنا…',
        exitConfirm: 'متأكد تبي تطلع من المقابلة؟',
        errorGeneric: 'صار خطأ. حاول مرة ثانية.',
        errorNetwork: 'خطأ بالشبكة. تأكد من اتصالك وحاول مرة ثانية.',
        followUpLabel: 'سؤال متابعة',
        questionLabel: 'السؤال {n}',
        yes: 'إيه',
        no: 'لا',
        chooseLangTitle: 'اختر لغتك',
    }
};

// ===== Storage suggestion data =====
const storageData = {
    en: [
        {
            name: '1. localStorage (Client-side)',
            desc: 'Store interviews directly in the browser. Simple and works offline. Best for small-scale personal use. Data persists until the user clears browser data.'
        },
        {
            name: '2. JSON File Export/Import',
            desc: 'Export each interview as a JSON file. Users can download files and import them later. Good for sharing data between machines or backing up locally.'
        },
        {
            name: '3. IndexedDB (Client-side Database)',
            desc: 'A structured, in-browser database that handles larger datasets efficiently. Supports indexing and querying. Great for apps that need to store many interviews offline.'
        },
        {
            name: '4. Backend Database (e.g. Firebase, Supabase, MongoDB)',
            desc: 'Store interviews on a server with a cloud database. Enables multi-user access, real-time sync, analytics dashboards, and data aggregation across many participants.'
        }
    ],
    ar: [
        {
            name: '1. التخزين المحلي (localStorage)',
            desc: 'تخزّن المقابلات مباشرة بالمتصفح. بسيط ويشتغل بدون نت. الأفضل للاستخدام الشخصي البسيط.'
        },
        {
            name: '2. تصدير/استيراد ملفات JSON',
            desc: 'تصدّر كل مقابلة كملف JSON. تقدر تنزّل الملفات وتستوردها بعدين. مناسب لمشاركة البيانات بين الأجهزة.'
        },
        {
            name: '3. IndexedDB (قاعدة بيانات المتصفح)',
            desc: 'قاعدة بيانات منظمة داخل المتصفح تتعامل مع بيانات أكبر. ممتازة للتطبيقات اللي تحتاج تخزّن مقابلات كثيرة.'
        },
        {
            name: '4. قاعدة بيانات سحابية (Firebase, Supabase, MongoDB)',
            desc: 'تخزّن المقابلات على سيرفر سحابي. يتيح وصول متعدد ومزامنة ولوحات تحليل.'
        }
    ]
};

// ===== Config =====
const GEMINI_API_KEY = 'AIzaSyBQJHh4l-be5bSGMkRPwhIc7Q_sJTGkcHM';
const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
const MAX_QUESTIONS = 5;
const MAX_FOLLOWUPS_PER_QUESTION = 2;
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbypMqTZSuouAqycV5c_90BwyDx135H7TrgidfF86U-NOv6Khv_mcWdTBPjmus_ooEzT/exec';

// ===== State =====
let state = {
    lang: 'en',
    theme: 'light',
    currentScreen: 'intro',       // intro | interview | results
    questionIndex: 0,             // 0-based main question index
    followUpCount: 0,             // follow-ups asked for current question
    conversationHistory: [],      // full Gemini conversation
    interviewData: [],            // { question, answer, followUps: [{question, answer}] }
    selectedChoice: null,
    isLoading: false,
};

// ===== DOM refs =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {
    html: document.documentElement,
    body: document.body,
    themeToggle: $('#themeToggle'),
    langEnBtn: $('#langEnBtn'),
    langArBtn: $('#langArBtn'),
    progressContainer: $('#progressContainer'),
    progressFill: $('#progressFill'),
    progressText: $('#progressText'),
    introScreen: $('#introScreen'),
    interviewScreen: $('#interviewScreen'),
    resultsScreen: $('#resultsScreen'),
    startBtn: $('#startBtn'),
    questionArea: $('#questionArea'),
    questionText: $('#questionText'),
    typingIndicator: $('#typingIndicator'),
    answerArea: $('#answerArea'),
    inputContainer: $('#inputContainer'),
    submitBtn: $('#submitBtn'),
    exitBtn: $('#exitBtn'),
    answersListContainer: $('#answersListContainer'),
    storageOptions: $('#storageOptions'),
    exportBtn: $('#exportBtn'),
    newInterviewBtn: $('#newInterviewBtn'),
    toastContainer: $('#toastContainer'),
};

// ===== Theme =====
function initTheme() {
    const saved = localStorage.getItem('ai-interview-theme') || 'light';
    setTheme(saved);
}

function setTheme(theme) {
    state.theme = theme;
    dom.html.setAttribute('data-theme', theme);
    localStorage.setItem('ai-interview-theme', theme);
}

function toggleTheme() {
    setTheme(state.theme === 'light' ? 'dark' : 'light');
}

// ===== Language =====
function initLang() {
    const saved = localStorage.getItem('ai-interview-lang') || 'en';
    setLang(saved);
}

function setLang(lang) {
    state.lang = lang;
    dom.html.setAttribute('lang', lang);
    dom.html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('ai-interview-lang', lang);

    // Update language chooser buttons
    if (dom.langEnBtn && dom.langArBtn) {
        dom.langEnBtn.classList.toggle('selected', lang === 'en');
        dom.langArBtn.classList.toggle('selected', lang === 'ar');
    }

    applyTranslations();
}

function t(key, replacements = {}) {
    let str = i18n[state.lang][key] || i18n.en[key] || key;
    for (const [k, v] of Object.entries(replacements)) {
        str = str.replace(`{${k}}`, v);
    }
    return str;
}

function applyTranslations() {
    $$('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
}

// ===== Navigation =====
function showScreen(name) {
    state.currentScreen = name;
    [dom.introScreen, dom.interviewScreen, dom.resultsScreen].forEach(s => s.classList.remove('active'));

    if (name === 'intro') {
        dom.introScreen.classList.add('active');
        dom.progressContainer.classList.remove('visible');
    } else if (name === 'interview') {
        dom.interviewScreen.classList.add('active');
        dom.progressContainer.classList.add('visible');
    } else if (name === 'results') {
        dom.resultsScreen.classList.add('active');
        dom.progressContainer.classList.remove('visible');
    }
}

// ===== Progress =====
function updateProgress() {
    const current = state.questionIndex + 1;
    const pct = (state.questionIndex / MAX_QUESTIONS) * 100;
    dom.progressFill.style.width = pct + '%';
    dom.progressText.textContent = t('progressText', { current, total: MAX_QUESTIONS });
}

// ===== Toast =====
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    dom.toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

// ===== Typing indicator =====
function showTyping() {
    dom.typingIndicator.classList.add('visible');
    dom.questionArea.style.display = 'none';
    dom.answerArea.classList.add('hidden');
}

function hideTyping() {
    dom.typingIndicator.classList.remove('visible');
    dom.questionArea.style.display = 'flex';
    dom.answerArea.classList.remove('hidden');
}

// ===== Build input for question =====
function renderInput(inputType, options) {
    dom.inputContainer.innerHTML = '';
    state.selectedChoice = null;

    if (inputType === 'text') {
        const textarea = document.createElement('textarea');
        textarea.placeholder = t('placeholderText');
        textarea.id = 'answerInput';
        textarea.addEventListener('input', clearValidationError);
        dom.inputContainer.appendChild(textarea);
        setTimeout(() => textarea.focus(), 100);
    } else if (inputType === 'yesno') {
        const container = document.createElement('div');
        container.className = 'yesno-container';
        [t('yes'), t('no')].forEach(label => {
            const btn = document.createElement('button');
            btn.className = 'yesno-btn';
            btn.textContent = label;
            btn.addEventListener('click', () => {
                clearValidationError();
                container.querySelectorAll('.yesno-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                state.selectedChoice = label;
            });
            container.appendChild(btn);
        });
        dom.inputContainer.appendChild(container);
    } else if (inputType === 'choice' && options && options.length) {
        const container = document.createElement('div');
        container.className = 'choices-container';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerHTML = `<span class="choice-indicator"></span><span>${opt}</span>`;
            btn.addEventListener('click', () => {
                clearValidationError();
                container.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                state.selectedChoice = opt;
            });
            container.appendChild(btn);
        });
        dom.inputContainer.appendChild(container);
    } else if (inputType === 'scale') {
        const container = document.createElement('div');
        container.className = 'scale-container';
        const labels = document.createElement('div');
        labels.className = 'scale-labels';
        labels.innerHTML = `<span>1</span><span>10</span>`;
        container.appendChild(labels);
        const buttons = document.createElement('div');
        buttons.className = 'scale-buttons';
        for (let i = 1; i <= 10; i++) {
            const btn = document.createElement('button');
            btn.className = 'scale-btn';
            btn.textContent = i;
            btn.addEventListener('click', () => {
                clearValidationError();
                buttons.querySelectorAll('.scale-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                state.selectedChoice = String(i);
            });
            buttons.appendChild(btn);
        }
        container.appendChild(buttons);
        dom.inputContainer.appendChild(container);
    } else {
        // Default to text
        const textarea = document.createElement('textarea');
        textarea.placeholder = t('placeholderText');
        textarea.id = 'answerInput';
        textarea.addEventListener('input', clearValidationError);
        dom.inputContainer.appendChild(textarea);
        setTimeout(() => textarea.focus(), 100);
    }
}

// ===== Get user answer =====
function getUserAnswer() {
    const textarea = $('#answerInput');
    if (textarea) return textarea.value.trim();
    return state.selectedChoice || '';
}

// ===== Gemini API =====
function buildSystemPrompt() {
    const lang = state.lang === 'ar' ? 'Saudi Arabic dialect (اللهجة السعودية)' : 'English';
    return `You are a professional UX researcher conducting a qualitative user interview about delivery apps.

CRITICAL LANGUAGE RULE:
- You MUST write the question text in ${lang}. Every single question and follow-up MUST be in ${lang}.
${state.lang === 'ar' ? '- Use Saudi Arabian dialect (اللهجة السعودية), NOT formal/classical Arabic (فصحى). For example: "قولي عن آخر مرة طلبت أكل من تطبيق توصيل؟" instead of "هل يمكنك أن تحكي لي عن آخر مرة طلبت طعامًا عبر تطبيق توصيل؟". Use words like: وش، ليه، كيف، تقدر، ايش، يعني, etc.' : ''}

QUESTION RULES:
- Ask exactly ${MAX_QUESTIONS} main questions total.
- CRITICAL: Ask ONLY ONE question at a time. NEVER combine two questions in one message. NEVER use "and" or "also" to join two questions. Each JSON response must contain exactly ONE single question.
- Start with broad, open-ended questions and get more specific as the interview progresses.
- Keep all questions neutral — NEVER lead the user toward a particular answer.
- Be specific enough to guide the user, but leave room for them to share details in their own words.
- NEVER use subjective or floating words like "expensive", "cheap", "big", "small", "good", "bad" — let the user define these in their own terms.
- NEVER ask survey-style questions (e.g., "On a scale of 1-10...").
- If the user's answer is vague or incomplete, you may ask a follow-up to get more depth. But ONLY ask a follow-up if truly needed — do not overwhelm the user.
- NEVER ask more than ${MAX_FOLLOWUPS_PER_QUESTION} follow-ups per main question.
- After all ${MAX_QUESTIONS} main questions are answered, end the interview.

You MUST respond with valid JSON only (no markdown, no backticks). Use this exact format:
{
  "question": "Your single question text here in ${lang}",
  "inputType": "text",
  "options": [],
  "isFollowUp": false,
  "isComplete": false,
  "questionNumber": 1
}

- inputType can be: "text" (open-ended), "yesno", "choice" (provide options array), or "scale"
- For qualitative interviews, prefer "text" input type for most questions.
- isFollowUp: true if this is a follow-up question to dig deeper into the previous answer
- isComplete: true ONLY when ALL ${MAX_QUESTIONS} questions have been answered and the interview is done. When isComplete is true, set question to a brief thank-you message in ${lang}.
- questionNumber: the current main question number (1-${MAX_QUESTIONS}), stays the same during follow-ups
- REMEMBER: The "question" field must contain ONLY ONE question, written entirely in ${lang}.`;
}

async function callGemini(userMessage) {
    // Add user message to history
    if (userMessage) {
        state.conversationHistory.push({ role: 'user', parts: [{ text: userMessage }] });
    }

    const body = {
        system_instruction: {
            parts: [{ text: buildSystemPrompt() }]
        },
        contents: state.conversationHistory,
        generationConfig: {
            temperature: 0.7,
            topP: 0.9,
            maxOutputTokens: 1024,
            responseMimeType: "application/json",
        }
    };

    try {
        const res = await fetch(GEMINI_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            console.error('Gemini API error:', res.status, errData);
            if (res.status === 429) {
                throw new Error('ratelimit');
            }
            throw new Error(`API error: ${res.status}`);
        }

        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) throw new Error('Empty response from API');

        // Add assistant response to history
        state.conversationHistory.push({ role: 'model', parts: [{ text }] });

        // Parse JSON response
        const parsed = JSON.parse(text);
        return parsed;
    } catch (err) {
        console.error('Gemini call failed:', err);
        if (err.message.includes('fetch') || err.message.includes('network') || err.message.includes('Failed')) {
            throw new Error('network');
        }
        throw err;
    }
}

// ===== Interview flow =====
async function startInterview() {
    // Reset state
    state.questionIndex = 0;
    state.followUpCount = 0;
    state.conversationHistory = [];
    state.interviewData = [];
    state.selectedChoice = null;
    state.isLoading = false;

    showScreen('interview');
    updateProgress();
    const startPrompt = state.lang === 'ar'
        ? 'ابدأ المقابلة واسألني السؤال الأول باللهجة السعودية.'
        : 'Please start the interview by asking the first question in English.';
    await askNextQuestion(startPrompt);
}

async function askNextQuestion(prompt) {
    state.isLoading = true;
    showTyping();
    dom.submitBtn.disabled = true;

    try {
        const response = await callGemini(prompt);

        if (response.isComplete) {
            finishInterview(response.question);
            return;
        }

        // Update question index from AI response
        if (response.questionNumber && !response.isFollowUp) {
            state.questionIndex = response.questionNumber - 1;
            state.followUpCount = 0;
            // Add new entry to interviewData
            state.interviewData.push({
                question: response.question,
                answer: '',
                followUps: []
            });
        } else if (response.isFollowUp) {
            state.followUpCount++;
        }

        updateProgress();
        hideTyping();

        // Show follow-up badge if it's a follow-up
        if (response.isFollowUp) {
            dom.questionText.innerHTML = `<span class="followup-badge">${t('followUpLabel')}</span> ${escapeHtml(response.question)}`;
        } else {
            dom.questionText.textContent = response.question;
        }

        renderInput(response.inputType || 'text', response.options || []);

        // Button label: "Submit" on last question, "Next" otherwise
        const isLastQuestion = response.questionNumber >= MAX_QUESTIONS && !response.isFollowUp;
        dom.submitBtn.textContent = isLastQuestion ? t('submitBtn') : t('nextBtn');

        dom.submitBtn.style.display = '';
        dom.submitBtn.disabled = false;
        state.isLoading = false;

    } catch (err) {
        hideTyping();
        state.isLoading = false;
        dom.submitBtn.disabled = false;

        if (err.message === 'network') {
            showToast(t('errorNetwork'), 'error');
        } else if (err.message === 'ratelimit') {
            showToast(state.lang === 'ar' ? 'كثرت الطلبات، جاري المحاولة مرة ثانية...' : 'Too many requests, retrying...', 'error');
            // Auto-retry after 3 seconds
            setTimeout(() => askNextQuestion(prompt), 3000);
            return;
        } else {
            showToast(t('errorGeneric'), 'error');
        }
        // Show retry button
        dom.questionArea.style.display = 'flex';
        dom.questionText.textContent = state.lang === 'ar'
            ? 'صار خطأ. اضغط الزر تحت عشان تحاول مرة ثانية.'
            : 'An error occurred. Click the button below to try again.';
        dom.inputContainer.innerHTML = '';
        const retryBtn = document.createElement('button');
        retryBtn.className = 'btn-primary';
        retryBtn.textContent = state.lang === 'ar' ? 'حاول مرة ثانية' : 'Try Again';
        retryBtn.addEventListener('click', () => {
            // Remove the last user message that failed so we can resend
            if (state.conversationHistory.length > 0 && state.conversationHistory[state.conversationHistory.length - 1].role === 'user') {
                const lastMsg = state.conversationHistory.pop();
                askNextQuestion(lastMsg.parts[0].text);
            } else {
                askNextQuestion(prompt);
            }
        });
        dom.inputContainer.appendChild(retryBtn);
        dom.answerArea.classList.remove('hidden');
        dom.submitBtn.style.display = 'none';
    }
}

function clearValidationError() {
    const existing = dom.inputContainer.querySelector('.validation-error');
    if (existing) existing.remove();
    const textarea = $('#answerInput');
    if (textarea) textarea.classList.remove('input-error');
    dom.inputContainer.querySelectorAll('.choices-container, .yesno-container, .scale-container').forEach(el => {
        el.classList.remove('input-error');
    });
}

function showValidationError(message) {
    clearValidationError();
    // Add red border
    const textarea = $('#answerInput');
    if (textarea) {
        textarea.classList.add('input-error');
    } else {
        dom.inputContainer.querySelectorAll('.choices-container, .yesno-container, .scale-container').forEach(el => {
            el.classList.add('input-error');
        });
    }
    // Add error message
    const errorEl = document.createElement('div');
    errorEl.className = 'validation-error';
    errorEl.textContent = message;
    dom.inputContainer.appendChild(errorEl);
}

async function submitAnswer() {
    if (state.isLoading) return;

    const answer = getUserAnswer();
    if (!answer) {
        const textarea = $('#answerInput');
        if (textarea) {
            showValidationError(t('requiredField'));
        } else {
            showValidationError(t('requiredSelection'));
        }
        return;
    }
    clearValidationError();

    // Store the answer
    const currentData = state.interviewData[state.interviewData.length - 1];
    if (currentData) {
        if (state.followUpCount > 0 && currentData.answer) {
            // This is a follow-up answer
            currentData.followUps.push({
                question: dom.questionText.textContent,
                answer: answer
            });
        } else {
            currentData.answer = answer;
        }
    }

    // Send answer to Gemini
    await askNextQuestion(answer);
}

function finishInterview(thankYouMsg) {
    // Update progress to 100%
    dom.progressFill.style.width = '100%';

    showScreen('results');
    renderResults();
    renderStorageOptions();

    // Send data to Google Sheet
    sendToGoogleSheet();
}

async function sendToGoogleSheet() {
    const data = {
        interviewId: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        timestamp: new Date().toISOString(),
        language: state.lang,
        responses: state.interviewData.map((item, idx) => ({
            questionNumber: idx + 1,
            question: item.question,
            answer: item.answer,
            followUps: item.followUps
        }))
    };

    try {
        await fetch(GOOGLE_SHEET_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        showToast(state.lang === 'ar' ? 'تم حفظ الإجابات بنجاح!' : 'Responses saved to Google Sheet!');
    } catch (err) {
        console.error('Google Sheet error:', err);
        showToast(state.lang === 'ar' ? 'ما قدرنا نحفظ البيانات. جرب تصدّرها كـ JSON.' : 'Could not save to Google Sheet. Try exporting as JSON.', 'error');
    }
}

// ===== Results =====
function renderResults() {
    dom.answersListContainer.innerHTML = '';

    state.interviewData.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'answer-item';

        let html = `
            <div class="q-label">${t('questionLabel', { n: idx + 1 })}</div>
            <div class="q-text">${escapeHtml(item.question)}</div>
            <div class="a-text">${escapeHtml(item.answer)}</div>
        `;

        if (item.followUps && item.followUps.length > 0) {
            item.followUps.forEach(fu => {
                html += `
                    <div class="followup-pair">
                        <div class="q-label">${t('followUpLabel')}</div>
                        <div class="q-text">${escapeHtml(fu.question)}</div>
                        <div class="a-text">${escapeHtml(fu.answer)}</div>
                    </div>
                `;
            });
        }

        div.innerHTML = html;
        dom.answersListContainer.appendChild(div);
    });
}

function renderStorageOptions() {
    dom.storageOptions.innerHTML = '';
    const options = storageData[state.lang] || storageData.en;
    options.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'storage-option';
        div.innerHTML = `
            <div class="option-name">${opt.name}</div>
            <div class="option-desc">${opt.desc}</div>
        `;
        dom.storageOptions.appendChild(div);
    });
}

function exportJSON() {
    const data = {
        interviewId: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        timestamp: new Date().toISOString(),
        language: state.lang,
        topic: 'Delivery App',
        responses: state.interviewData.map((item, idx) => ({
            questionNumber: idx + 1,
            question: item.question,
            answer: item.answer,
            followUps: item.followUps
        }))
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `interview-${data.interviewId.slice(0, 8)}-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(state.lang === 'ar' ? '\u062A\u0645 \u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0646\u062C\u0627\u062D' : 'Interview data exported successfully!');
}

function newInterview() {
    showScreen('intro');
}

// ===== Utility =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== Event listeners =====
dom.themeToggle.addEventListener('click', toggleTheme);
dom.langEnBtn.addEventListener('click', () => setLang('en'));
dom.langArBtn.addEventListener('click', () => setLang('ar'));
dom.startBtn.addEventListener('click', startInterview);
dom.submitBtn.addEventListener('click', submitAnswer);
dom.exportBtn.addEventListener('click', exportJSON);
dom.newInterviewBtn.addEventListener('click', newInterview);

dom.exitBtn.addEventListener('click', () => {
    if (confirm(t('exitConfirm'))) {
        finishInterview();
    }
});

// Enter key submits answer (for textarea)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey && state.currentScreen === 'interview') {
        const textarea = $('#answerInput');
        if (textarea && document.activeElement === textarea) {
            e.preventDefault();
            submitAnswer();
        }
    }
});

// ===== Init =====
initTheme();
initLang();
