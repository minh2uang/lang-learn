"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const translate = async (palabra, idioma) => {
    const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'gibberish',
            'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
        },
        body: JSON.stringify({
            q: palabra,
            source: 'en',
            target: idioma
        })
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result['data']['translations']['translatedText'];
    }
    catch (error) {
        throw "Can't translate word";
    }
};
const GET = async (request, { params: { idioma, palabra } }) => {
    try {
        const forvoKey = process.env.FORVO_API_KEY;
        const translated_word = await translate(palabra, idioma);
        const url = `https://apifree.forvo.com/key/${forvoKey}/format/json/action/word-pronunciations/word/${translated_word}/language/${idioma}`;
        const response = await fetch(url, {
            method: 'GET'
        });
        if (!response.ok) {
            throw 'Cant get any data from Forvo';
        }
        let { items } = (await response.json());
        items = items.map((item) => ({
            id: item.id,
            word: item.word,
            country: item.country
        }));
        return Response.json(items);
    }
    catch (errMsg) {
        return new Response(errMsg, { status: 500 });
    }
};
exports.GET = GET;
