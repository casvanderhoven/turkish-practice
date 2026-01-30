// Main App Controller
class App {
    constructor() {
        this.container = document.getElementById('content');
        this.currentTab = 'study';

        // Initialize modes
        this.studyMode = new StudyMode(this.container);
        this.practiceMode = new PracticeMode(this.container);
        this.manageMode = new ManageMode(this.container);

        this.init();
    }

    init() {
        this.attachTabEvents();
        this.showTab('study');
    }

    attachTabEvents() {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                this.showTab(tabName);
            });
        });
    }

    showTab(tabName) {
        this.currentTab = tabName;

        // Update tab buttons
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });

        // Show appropriate content
        switch (tabName) {
            case 'study':
                this.studyMode.init();
                break;
            case 'practice':
                this.practiceMode.init();
                break;
            case 'manage':
                this.manageMode.init();
                break;
        }
    }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new App();
    window.app = app; // Make globally accessible for callbacks
});
