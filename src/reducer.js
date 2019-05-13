let initialState = {
    locale: "en"
}

let reducer = (state = initialState, action) => {
    let { type, locale } = action;
    if (type === "UPDATE_LOCALE") {
        return {
            ...state,
            locale: locale 
        }
    } else {
        return {
            ...state
        }
    }
}

export default reducer;