export const validUser = {
    username: 'testUser',
    password: 'P@ssw0rd'
}

export const validPatch = {
    "document":{
        "firstName":"Peter"

    },
    "patches": [
        { "op": "replace", "path": "/firstName", "value": "Joachim" },
        { "op": "add", "path": "/lastName", "value": "Wester" }

    ]


}

export const invalidPatch = {
    "patches": [
        { "op": "replace", "path": "/firstName", "value": "Joachim" },
        { "op": "add", "path": "/lastName", "value": "Wester" }

    ]


}
