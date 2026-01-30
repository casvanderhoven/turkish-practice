// LocalStorage wrapper for custom phrases and progress
const Storage = {
    CUSTOM_PHRASES_KEY: 'turkish_custom_phrases',
    PROGRESS_KEY: 'turkish_progress',

    // Get all custom phrases
    getCustomPhrases() {
        try {
            const data = localStorage.getItem(this.CUSTOM_PHRASES_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error reading custom phrases:', e);
            return [];
        }
    },

    // Save custom phrases
    saveCustomPhrases(phrases) {
        try {
            localStorage.setItem(this.CUSTOM_PHRASES_KEY, JSON.stringify(phrases));
            return true;
        } catch (e) {
            console.error('Error saving custom phrases:', e);
            return false;
        }
    },

    // Add a new custom phrase
    addPhrase(phrase) {
        const phrases = this.getCustomPhrases();
        const newPhrase = {
            ...phrase,
            id: 'custom_' + Date.now(),
            category: phrase.category || 'custom'
        };
        phrases.push(newPhrase);
        this.saveCustomPhrases(phrases);
        return newPhrase;
    },

    // Update an existing phrase
    updatePhrase(id, updates) {
        const phrases = this.getCustomPhrases();
        const index = phrases.findIndex(p => p.id === id);
        if (index !== -1) {
            phrases[index] = { ...phrases[index], ...updates };
            this.saveCustomPhrases(phrases);
            return phrases[index];
        }
        return null;
    },

    // Delete a phrase
    deletePhrase(id) {
        const phrases = this.getCustomPhrases();
        const filtered = phrases.filter(p => p.id !== id);
        this.saveCustomPhrases(filtered);
        return filtered.length < phrases.length;
    },

    // Import phrases from JSON
    importPhrases(jsonData) {
        try {
            const imported = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
            if (!Array.isArray(imported)) {
                throw new Error('Data must be an array');
            }

            const phrases = this.getCustomPhrases();
            let addedCount = 0;

            imported.forEach(item => {
                if (item.turkish && item.english) {
                    phrases.push({
                        id: 'custom_' + Date.now() + '_' + addedCount,
                        turkish: item.turkish,
                        english: item.english,
                        pronunciation: item.pronunciation || '',
                        context: item.context || '',
                        category: item.category || 'custom'
                    });
                    addedCount++;
                }
            });

            this.saveCustomPhrases(phrases);
            return addedCount;
        } catch (e) {
            console.error('Error importing phrases:', e);
            throw e;
        }
    },

    // Get all phrases (built-in + custom)
    getAllPhrases() {
        const customPhrases = this.getCustomPhrases();
        const allPhrases = {};

        // Add built-in phrases
        Object.keys(BUILT_IN_PHRASES).forEach(category => {
            allPhrases[category] = [...BUILT_IN_PHRASES[category]];
        });

        // Add custom phrases to their categories
        if (customPhrases.length > 0) {
            allPhrases.custom = [];
            customPhrases.forEach(phrase => {
                if (phrase.category === 'custom' || !allPhrases[phrase.category]) {
                    allPhrases.custom.push(phrase);
                } else {
                    allPhrases[phrase.category].push(phrase);
                }
            });
            // Remove custom category if empty
            if (allPhrases.custom.length === 0) {
                delete allPhrases.custom;
            }
        }

        return allPhrases;
    },

    // Get flat array of all phrases
    getAllPhrasesFlat() {
        const allPhrases = this.getAllPhrases();
        return Object.values(allPhrases).flat();
    },

    // Get phrases for a specific category
    getPhrasesByCategory(category) {
        if (category === 'all') {
            return this.getAllPhrasesFlat();
        }
        const allPhrases = this.getAllPhrases();
        return allPhrases[category] || [];
    },

    // Progress tracking
    getProgress() {
        try {
            const data = localStorage.getItem(this.PROGRESS_KEY);
            return data ? JSON.parse(data) : {};
        } catch (e) {
            return {};
        }
    },

    saveProgress(phraseId, wasCorrect) {
        const progress = this.getProgress();
        if (!progress[phraseId]) {
            progress[phraseId] = { correct: 0, incorrect: 0, lastSeen: null };
        }
        progress[phraseId][wasCorrect ? 'correct' : 'incorrect']++;
        progress[phraseId].lastSeen = Date.now();
        try {
            localStorage.setItem(this.PROGRESS_KEY, JSON.stringify(progress));
        } catch (e) {
            console.error('Error saving progress:', e);
        }
    },

    // Export all custom phrases as JSON
    exportPhrases() {
        return JSON.stringify(this.getCustomPhrases(), null, 2);
    }
};
