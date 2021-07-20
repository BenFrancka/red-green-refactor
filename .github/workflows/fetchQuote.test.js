import fetchQuote from "./fetchQuote";

describe('fetchQuote', () => {
    it('returns a single quote with name, text, and image values from the Futurama API', async () => {
        const quote = await fetchQuote();

        expect(quote).toEqual({
            'character': 'Bender',
            'quote': 'Bite my shiny metal ass.',
            'image': 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        })
    });
});