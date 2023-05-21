const keyboard = {
    2: ['а', 'б', 'в', 'г'],
    3: ['д', 'е', 'ё', 'ж', 'з'],
    4: ['и', 'й', 'к', 'л'],
    5: ['м', 'н', 'о', 'п'],
    6: ['р', 'с', 'т', 'у'],
    7: ['ф', 'х', 'ц', 'ч'],
    8: ['ш', 'щ', 'ъ', 'ы'],
    9: ['ь', 'э', 'ю', 'я'],
};

const decipher = (text) => {
    let answer = '';

    const splitedText = text.split('-');

    for (let item of splitedText) answer += keyboard[item[0]][item.length - 1];

    return answer;
};

console.log(decipher('22-33-66-5555-33-6-66-5555-33-444-666-4-222-55-9999-444'));
