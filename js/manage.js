// Manage Mode - Add, edit, import, and delete custom phrases
class ManageMode {
    constructor(container) {
        this.container = container;
        this.editingId = null;
    }

    init() {
        this.editingId = null;
        this.render();
    }

    render() {
        const customPhrases = Storage.getCustomPhrases();

        this.container.innerHTML = `
            <div class="manage-section">
                <h3>Add New Phrase</h3>
                <form id="add-form">
                    <div class="form-group">
                        <label for="turkish">Turkish *</label>
                        <input type="text" id="turkish" placeholder="e.g., Merhaba" required>
                    </div>
                    <div class="form-group">
                        <label for="english">English *</label>
                        <input type="text" id="english" placeholder="e.g., Hello" required>
                    </div>
                    <div class="form-group">
                        <label for="pronunciation">Pronunciation</label>
                        <input type="text" id="pronunciation" placeholder="e.g., mer-HA-ba">
                    </div>
                    <div class="form-group">
                        <label for="context">Context/Notes</label>
                        <input type="text" id="context" placeholder="e.g., General greeting">
                    </div>
                    <div class="form-group">
                        <label for="category">Category</label>
                        <select id="category">
                            <option value="custom">My Phrases</option>
                            <option value="greetings">Greetings</option>
                            <option value="compliments">Compliments</option>
                            <option value="polite">Polite Expressions</option>
                            <option value="family">Family</option>
                            <option value="responses">Useful Responses</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Add Phrase</button>
                </form>
            </div>

            <div class="manage-section">
                <h3>Import from JSON</h3>
                <label class="file-upload" id="file-upload">
                    <input type="file" id="file-input" accept=".json,application/json">
                    <div class="file-upload-text">
                        Tap to upload JSON file<br>
                        <small style="color: var(--gray-600);">Format: [{"turkish": "...", "english": "..."}]</small>
                    </div>
                </label>
            </div>

            <div class="manage-section">
                <h3>My Phrases (${customPhrases.length})</h3>
                ${customPhrases.length === 0 ? `
                    <div class="empty-state" style="padding: 20px;">
                        <p>No custom phrases yet.</p>
                        <p>Add some above!</p>
                    </div>
                ` : `
                    <ul class="phrase-list">
                        ${customPhrases.map(phrase => `
                            <li class="phrase-item" data-id="${phrase.id}">
                                <div class="phrase-item-content">
                                    <div class="phrase-item-turkish">${phrase.turkish}</div>
                                    <div class="phrase-item-english">${phrase.english}</div>
                                </div>
                                <div class="phrase-item-actions">
                                    <button class="btn-icon btn-edit" data-id="${phrase.id}" title="Edit">✏️</button>
                                    <button class="btn-icon btn-delete" data-id="${phrase.id}" title="Delete">🗑️</button>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                `}
            </div>

            ${customPhrases.length > 0 ? `
                <div class="manage-section">
                    <button class="btn btn-secondary btn-block" id="export-btn">
                        Export My Phrases (JSON)
                    </button>
                </div>
            ` : ''}
        `;

        this.attachEvents();
    }

    attachEvents() {
        const form = document.getElementById('add-form');
        const fileInput = document.getElementById('file-input');
        const exportBtn = document.getElementById('export-btn');

        form?.addEventListener('submit', (e) => this.handleSubmit(e));
        fileInput?.addEventListener('change', (e) => this.handleFileUpload(e));
        exportBtn?.addEventListener('click', () => this.handleExport());

        // Edit buttons
        document.querySelectorAll('.btn-edit').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                this.showEditModal(id);
            });
        });

        // Delete buttons
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                this.handleDelete(id);
            });
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const turkish = document.getElementById('turkish').value.trim();
        const english = document.getElementById('english').value.trim();
        const pronunciation = document.getElementById('pronunciation').value.trim();
        const context = document.getElementById('context').value.trim();
        const category = document.getElementById('category').value;

        if (!turkish || !english) {
            this.showToast('Please fill in Turkish and English fields');
            return;
        }

        Storage.addPhrase({
            turkish,
            english,
            pronunciation,
            context,
            category
        });

        this.showToast('Phrase added!');
        this.render();
    }

    handleFileUpload(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const count = Storage.importPhrases(event.target.result);
                this.showToast(`Imported ${count} phrase${count !== 1 ? 's' : ''}!`);
                this.render();
            } catch (err) {
                this.showToast('Error: Invalid JSON format');
            }
        };
        reader.readAsText(file);
    }

    handleExport() {
        const data = Storage.exportPhrases();
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'turkish-phrases.json';
        a.click();
        URL.revokeObjectURL(url);
        this.showToast('Exported!');
    }

    handleDelete(id) {
        if (confirm('Delete this phrase?')) {
            Storage.deletePhrase(id);
            this.showToast('Phrase deleted');
            this.render();
        }
    }

    showEditModal(id) {
        const phrases = Storage.getCustomPhrases();
        const phrase = phrases.find(p => p.id === id);
        if (!phrase) return;

        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.id = 'edit-modal';
        overlay.innerHTML = `
            <div class="modal">
                <h3>Edit Phrase</h3>
                <form id="edit-form">
                    <div class="form-group">
                        <label>Turkish *</label>
                        <input type="text" id="edit-turkish" value="${phrase.turkish}" required>
                    </div>
                    <div class="form-group">
                        <label>English *</label>
                        <input type="text" id="edit-english" value="${phrase.english}" required>
                    </div>
                    <div class="form-group">
                        <label>Pronunciation</label>
                        <input type="text" id="edit-pronunciation" value="${phrase.pronunciation || ''}">
                    </div>
                    <div class="form-group">
                        <label>Context</label>
                        <input type="text" id="edit-context" value="${phrase.context || ''}">
                    </div>
                    <div class="modal-actions">
                        <button type="button" class="btn btn-secondary" id="cancel-edit">Cancel</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });

        document.getElementById('cancel-edit')?.addEventListener('click', () => {
            overlay.remove();
        });

        document.getElementById('edit-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            Storage.updatePhrase(id, {
                turkish: document.getElementById('edit-turkish').value.trim(),
                english: document.getElementById('edit-english').value.trim(),
                pronunciation: document.getElementById('edit-pronunciation').value.trim(),
                context: document.getElementById('edit-context').value.trim()
            });
            overlay.remove();
            this.showToast('Phrase updated!');
            this.render();
        });
    }

    showToast(message) {
        // Remove existing toast
        document.querySelector('.toast')?.remove();

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.remove(), 2500);
    }
}
