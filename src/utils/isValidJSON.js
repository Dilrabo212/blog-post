export const isValidJSON = (json) => {
    try {
        JSON.parse(json)
    }
    catch (e) {
        return false
    }
    return true
}