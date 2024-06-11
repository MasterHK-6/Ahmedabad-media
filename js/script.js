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

document.getElementById('input-search').addEventListener('focusin', (e) => {
    let prefixSpan = document.getElementById('input-search-container');
    prefixSpan.classList.add('shadow');
    // let input = document.getElementById('input-search');
    // input.classList.add('prefix-icon-border');
})

document.getElementById('input-search').addEventListener('focusout', (e) => {
    let prefixSpan = document.getElementById('input-search-container');
    prefixSpan.classList.remove('shadow');
})