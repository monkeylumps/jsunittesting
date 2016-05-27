module.exports = function (wallaby) {
    return {
        files: [
            { pattern: 'scripts/app/simplets.ts' },
        ],

        tests: [
            { pattern: 'scripts/tests/simplets.spec.ts' }
        ],

        debug: true
    };
};