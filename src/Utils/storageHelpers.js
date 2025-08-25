


/**
 * 
 * @param {String} key - key name for session value
 * @param {String} value - value for the session
 */
export const setSession = (key, value) => {
    sessionStorage.setItem(key, value)
}

/**
 * 
 * @param {String} key - key name of the item to be retrieved
 * @returns - session value of the given key
 */
export const getSession = (key) => {

    return sessionStorage.getItem(key)
}


export const removeSession = (keys) => {
    if (typeof keys === 'string') {
        sessionStorage.removeItem(keys)
    } else {
        keys.map(key=> sessionStorage.removeItem(key))
    }
}