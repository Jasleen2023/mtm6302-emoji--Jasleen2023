document.addEventListener('DOMContentLoaded', () => {
    const emojis = [
        { code: '&#128515;', decimal: '128515' },
        { code: '&#128516;', decimal: '128516' },
        { code: '&#10062;', decimal: '10062' },
        { code: '&#10067;', decimal: '10067' },
        { code: '&#10068;', decimal: '10068' },
        { code: '&#10069;', decimal: '10069' },
        { code: '&#9196;', decimal: '9196' },
        { code: '&#9200;', decimal: '9200' },
        { code: '&#10134;', decimal: '10134' },
        { code: '&#10135;', decimal: '10135' },
        { code: '&#10160;', decimal: '10160' },
        { code: '&#10175;', decimal: '10175' },
        { code: '&#11035;', decimal: '11035' },
        { code: '&#11036;', decimal: '11036' },
        { code: '&#11088;', decimal: '11088' },
        { code: '&#11093;', decimal: '11093' }
     
    ];

    const emojiGallery = document.getElementById('emoji-gallery');

    emojis.forEach(emoji => {
        const emojiItem = document.createElement('div');
        emojiItem.classList.add('emoji-item');
        emojiItem.innerHTML = `
        <span>${emoji.code}</span>
        <code>${emoji.decimal}</code>
    `;
    emojiGallery.appendChild(emojiItem);
});
});