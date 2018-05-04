const firebase = require('firebase');
const config = require('../../config/firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId
});

function set() {
    var db = firebase.firestore();
    const settings = {
        timestampsInSnapshots: true,
    }
    db.settings(settings);
    return db;
}

module.exports = {
    firebase,
    set
}
