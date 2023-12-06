const { createAccount, login, viewAllHistory, editProfile } = require("./handler");


const routes = [
    {
        method: 'POST',
        path: '/auth/login',
        handler: login,
    },
    {
        method: 'POST',
        path: '/auth/register',
        handler: createAccount,
    },
    {
        method: 'GET',
        path: '/auth/logout',
        handler: (request, h) => {
            return '';
        },
    },
    {
        method: 'POST',
        path: '/start',
        handler: (request, h) => {
            return '';
        },
    },
    {
        method: 'GET',
        path: '/history',
        handler: viewAllHistory,
    },
    {
        method: 'GET',
        path: '/profile',
        handler: (request, h) => {
            return '';
        },
    },
    {
        method: 'PUT',
        path: '/edit-profile',
        handler: editProfile,
    },
]

module.exports = routes;