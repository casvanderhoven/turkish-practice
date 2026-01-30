// Study Mode - Browse and learn phrases
class StudyMode {
    constructor(container) {
        this.container = container;
        this.phrases = [];
        this.currentIndex = 0;
        this.isRevealed = false;
        this.currentCategory = 'all';
    }

    init(category = 'all') {
        this.currentCategory = category;
        this.loadPhrases();
        this.currentIndex = 0;
        this.isRevealed = false;
        this.render();
    }

    loadPhrases() {
        this.phrases = Storage.getPhrasesByCategory(this.currentCategory);
    }

    render() {
        if (this.phrases.length === 0) {
            this.container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📚</div>
                    <p>No phrases in this category yet.</p>
                    <p>Add some in the Manage tab!</p>
                </div>
            `;
            return;
        }

        const phrase = this.phrases[this.currentIndex];

        this.container.innerHTML = `
            <div class="controls">
                <div class="control-group">
                    <label>Category:</label>
                    <select id="category-select">
                        <option value="all" ${this.currentCategory === 'all' ? 'selected' : ''}>All Phrases</option>
                        ${Object.keys(Storage.getAllPhrases()).map(cat => `
                            <option value="${cat}" ${this.currentCategory === cat ? 'selected' : ''}>
                                ${CATEGORIES[cat] || cat}
                            </option>
                        `).join('')}
                    </select>
                </div>
            </div>

            <div class="card-container" id="study-card">
                <div class="study-card">
                    <span class="language-label">Turkish</span>
                    <h2 class="phrase">${phrase.turkish}</h2>
                    <p class="pronunciation">${phrase.pronunciation || ''}</p>

                    <div class="translation ${this.isRevealed ? '' : 'hidden'}" id="translation">
                        <span class="language-label">English</span>
                        <h2 class="phrase">${phrase.english}</h2>
                        ${phrase.context ? `<p class="context">${phrase.context}</p>` : ''}
                    </div>

                    ${!this.isRevealed ? '<p class="tap-hint">Tap to reveal translation</p>' : ''}

                    <span class="category-badge">${CATEGORIES[phrase.category] || phrase.category || 'Phrase'}</span>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="nav-btn" id="prev-btn" ${this.currentIndex === 0 ? 'disabled' : ''}>←</button>
                <span class="card-counter">${this.currentIndex + 1} of ${this.phrases.length}</span>
                <button class="nav-btn" id="next-btn" ${this.currentIndex === this.phrases.length - 1 ? 'disabled' : ''}>→</button>
            </div>
        `;

        this.attachEvents();
    }

    attachEvents() {
        const card = document.getElementById('study-card');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const categorySelect = document.getElementById('category-select');

        card?.addEventListener('click', () => this.toggleReveal());
        prevBtn?.addEventListener('click', () => this.prev());
        nextBtn?.addEventListener('click', () => this.next());
        categorySelect?.addEventListener('change', (e) => {
            this.init(e.target.value);
        });

        // Swipe support
        let startX = 0;
        card?.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        card?.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = endX - startX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) this.prev();
                else this.next();
            }
        });
    }

    toggleReveal() {
        this.isRevealed = !this.isRevealed;
        const translation = document.getElementById('translation');
        const hint = document.querySelector('.tap-hint');

        if (translation) {
            translation.classList.toggle('hidden', !this.isRevealed);
        }
        if (hint) {
            hint.style.display = this.isRevealed ? 'none' : 'block';
        }
    }

    next() {
        if (this.currentIndex < this.phrases.length - 1) {
            this.currentIndex++;
            this.isRevealed = false;
            this.render();
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.isRevealed = false;
            this.render();
        }
    }
}
