// Practice Mode - Flashcard testing with spaced repetition
class PracticeMode {
    constructor(container) {
        this.container = container;
        this.originalPhrases = [];
        this.deck = [];
        this.currentIndex = 0;
        this.direction = 'en-to-tr'; // or 'tr-to-en'
        this.currentCategory = 'all';
        this.isFlipped = false;
        this.stats = { correct: 0, incorrect: 0 };
        this.sessionComplete = false;
    }

    init(category = 'all', direction = 'en-to-tr') {
        this.currentCategory = category;
        this.direction = direction;
        this.loadPhrases();
        this.resetSession();
        this.render();
    }

    loadPhrases() {
        this.originalPhrases = Storage.getPhrasesByCategory(this.currentCategory);
    }

    resetSession() {
        this.deck = this.shuffle([...this.originalPhrases]);
        this.currentIndex = 0;
        this.isFlipped = false;
        this.stats = { correct: 0, incorrect: 0 };
        this.sessionComplete = false;
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    render() {
        if (this.originalPhrases.length === 0) {
            this.container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🎯</div>
                    <p>No phrases to practice yet.</p>
                    <p>Add some in the Manage tab!</p>
                </div>
            `;
            return;
        }

        if (this.sessionComplete) {
            this.renderResults();
            return;
        }

        const phrase = this.deck[this.currentIndex];
        const showFirst = this.direction === 'en-to-tr' ? 'english' : 'turkish';
        const showSecond = this.direction === 'en-to-tr' ? 'turkish' : 'english';
        const progress = (this.stats.correct + this.stats.incorrect) / this.deck.length * 100;

        this.container.innerHTML = `
            <div class="controls">
                <div class="control-group">
                    <label>Category:</label>
                    <select id="practice-category">
                        <option value="all" ${this.currentCategory === 'all' ? 'selected' : ''}>All Phrases</option>
                        ${Object.keys(Storage.getAllPhrases()).map(cat => `
                            <option value="${cat}" ${this.currentCategory === cat ? 'selected' : ''}>
                                ${CATEGORIES[cat] || cat}
                            </option>
                        `).join('')}
                    </select>
                </div>
                <div class="control-group">
                    <label>Direction:</label>
                    <select id="practice-direction">
                        <option value="en-to-tr" ${this.direction === 'en-to-tr' ? 'selected' : ''}>EN → TR</option>
                        <option value="tr-to-en" ${this.direction === 'tr-to-en' ? 'selected' : ''}>TR → EN</option>
                    </select>
                </div>
            </div>

            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>

            <div class="stats">
                <span class="stat correct">✓ ${this.stats.correct}</span>
                <span class="stat incorrect">✗ ${this.stats.incorrect}</span>
                <span class="stat">${this.deck.length - this.currentIndex} left</span>
            </div>

            <div class="flashcard ${this.isFlipped ? 'flipped' : ''}" id="flashcard">
                <div class="flashcard-inner">
                    <div class="flashcard-front">
                        <span class="language-label">${showFirst === 'english' ? 'English' : 'Turkish'}</span>
                        <h2 class="phrase">${phrase[showFirst]}</h2>
                        ${showFirst === 'turkish' && phrase.pronunciation ?
                            `<p class="pronunciation">${phrase.pronunciation}</p>` : ''}
                        <p class="tap-hint">Tap to reveal answer</p>
                    </div>
                    <div class="flashcard-back">
                        <span class="language-label">${showSecond === 'turkish' ? 'Turkish' : 'English'}</span>
                        <h2 class="phrase">${phrase[showSecond]}</h2>
                        ${showSecond === 'turkish' && phrase.pronunciation ?
                            `<p class="pronunciation">${phrase.pronunciation}</p>` : ''}
                    </div>
                </div>
            </div>

            <div class="answer-buttons ${this.isFlipped ? '' : 'hidden'}">
                <button class="answer-btn btn-incorrect" id="btn-incorrect">✗ Again</button>
                <button class="answer-btn btn-correct" id="btn-correct">✓ Got it</button>
            </div>
        `;

        this.attachEvents();
    }

    renderResults() {
        const total = this.stats.correct + this.stats.incorrect;
        const percentage = total > 0 ? Math.round((this.stats.correct / total) * 100) : 0;

        let message = '';
        if (percentage === 100) message = 'Perfect! Amazing job!';
        else if (percentage >= 80) message = 'Great work!';
        else if (percentage >= 60) message = 'Good progress!';
        else message = 'Keep practicing!';

        this.container.innerHTML = `
            <div class="results">
                <h2>Session Complete!</h2>
                <div class="percentage">${percentage}%</div>
                <p style="color: var(--gray-600); margin-bottom: 24px;">${message}</p>
                <div class="stats">
                    <span class="stat correct">✓ ${this.stats.correct} correct</span>
                    <span class="stat incorrect">✗ ${this.stats.incorrect} to review</span>
                </div>
                <button class="btn btn-primary btn-block" id="btn-restart" style="margin-bottom: 12px;">
                    Practice Again
                </button>
                <button class="btn btn-secondary btn-block" id="btn-study">
                    Back to Study
                </button>
            </div>
        `;

        document.getElementById('btn-restart')?.addEventListener('click', () => {
            this.resetSession();
            this.render();
        });

        document.getElementById('btn-study')?.addEventListener('click', () => {
            if (window.app) {
                window.app.showTab('study');
            }
        });
    }

    attachEvents() {
        const flashcard = document.getElementById('flashcard');
        const btnCorrect = document.getElementById('btn-correct');
        const btnIncorrect = document.getElementById('btn-incorrect');
        const categorySelect = document.getElementById('practice-category');
        const directionSelect = document.getElementById('practice-direction');

        flashcard?.addEventListener('click', () => this.flip());
        btnCorrect?.addEventListener('click', () => this.markCorrect());
        btnIncorrect?.addEventListener('click', () => this.markIncorrect());

        categorySelect?.addEventListener('change', (e) => {
            this.init(e.target.value, this.direction);
        });

        directionSelect?.addEventListener('change', (e) => {
            this.init(this.currentCategory, e.target.value);
        });
    }

    flip() {
        if (!this.isFlipped) {
            this.isFlipped = true;
            const flashcard = document.getElementById('flashcard');
            const buttons = document.querySelector('.answer-buttons');
            flashcard?.classList.add('flipped');
            buttons?.classList.remove('hidden');
        }
    }

    markCorrect() {
        const phrase = this.deck[this.currentIndex];
        this.stats.correct++;
        Storage.saveProgress(phrase.id, true);
        this.next();
    }

    markIncorrect() {
        const phrase = this.deck[this.currentIndex];
        this.stats.incorrect++;
        Storage.saveProgress(phrase.id, false);
        // Add card back to end for spaced repetition
        this.deck.push(phrase);
        this.next();
    }

    next() {
        this.currentIndex++;
        this.isFlipped = false;

        if (this.currentIndex >= this.deck.length) {
            this.sessionComplete = true;
        }

        this.render();
    }
}
