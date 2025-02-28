interface IForvoResponse {
  attributes: any;
  items: Array<{
    id: number;
    word: string;
    country: string;
  }>;
}

const translate = async (palabra: string, idioma: string) => {
  const url = "https://deep-translate1.p.rapidapi.com/language/translate/v2";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "cf3cc6bc54msh6234db0b8af8715p1a4a50jsn4dbf73aba0d5",
      "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
    },
    body: JSON.stringify({
      q: palabra,
      source: "en",
      target: idioma,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result["data"]["translations"]["translatedText"];
  } catch (error) {
    throw "Can't translate word";
  }
};
export const GET = async (
  request: Request,
  {
    params: { idioma, palabra },
  }: { params: { idioma: string; palabra: string } }
) => {
  try {
    const forvoKey = process.env.FORVO_API_KEY;
    const translated_word = await translate(palabra, idioma);
    const url = `https://apifree.forvo.com/key/${forvoKey}/format/json/action/word-pronunciations/word/${translated_word}/language/${idioma}`;
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw "Cant get any data from Forvo";
    }
    let { items } = (await response.json()) as IForvoResponse;
    items = items.map((item) => ({
      id: item.id,
      word: item.word,
      country: item.country,
    }));
    return Response.json(items);
  } catch (errMsg: any) {
    return new Response(errMsg, { status: 500 });
  }
};
