var keyMirror = require('react/lib/keyMirror');

module.exports = {

    ActionTypes: keyMirror({
        APP_INITIALIZE: null,
        APP_RESET: null,
        SWITCH_PAGE: null, //change page eg. HOME -> DETAIL
        CHANGE_PAGE: null,

        GET_USERS: null,
        GET_USERS_SUCCESS: null,
        GET_USERS_ERROR: null
    }),

    Pages: keyMirror({
        HOME: null,
        DASHBOARD: null,
        NOT_FOUND: null
    }),

    LayoutConfig: {
        // Keep in sync with `server`
        ROOT_ELEMENT_ID: 'react-app'
    }
};