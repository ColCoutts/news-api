export default function pageArray(array, pagingOptions) {
    const page = pagingOptions.page;
    const perPage = pagingOptions.perPage;

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return array.slice(startIndex, endIndex);
}
