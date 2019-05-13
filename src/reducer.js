let initialState = {
    locale: "en",
    userName: "default User",
    packages: 0
}

let reducer = (state = initialState, action) => {
    let { type, locale, name, packages } = action;
    if (type === "UPDATE_LOCALE") {
        return {
            ...state,
            locale: locale 
        }
    } else if (type === "UPDATE_USER") {
        return {
            ...state,
            userName: name
        }
    } else if (type === "UPDATE_PACKAGES") {
        return {
            ...state,
            packages: packages
        }
    } else {
        return {
            ...state
        }
    }
}

export default reducer;