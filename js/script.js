document.addEventListener('DOMContentLoaded', () => {
    const calendar = new VanillaCalendar('#calendar', {
        type: 'multiple',
        today: new Date('2024-01-01'),
        months: 12,
        date: {
            min: new Date().getFullYear() + '-01-01',
            max: new Date().getFullYear() + '-12-31'
        },
        settings: {
            visibility: {
                theme: 'light',
            },
            selected: {
                year: new Date().getFullYear(),
                month: false,
            },
            selection: {
                day: 'single',
            },
        },
    });
    calendar.init();
});