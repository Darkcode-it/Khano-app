// useArticles.js
import data from './Article.json'; // Importing JSON data

function useArticles() {
    // Since there's no additional logic (like filtering or state management) yet,
    // we simply return the data for now. This can be expanded later if needed.
    const articles = data;

    return { articles };
}

export default useArticles;