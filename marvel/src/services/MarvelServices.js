class MarvelService {
    _apiBase = "https://gateway.marvel.com:443/v1/public/";
    _apiKey = "apikey=6ee9a5303f753669364710c0f16d2273";

    getRessource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getRessource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }
    getAllCharacter = (id) => {
        return this.getRessource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;

