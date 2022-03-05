module.exports = {
    env: {
        node: true,
        'vue/setup-compiler-macros': true
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
        'prefer-const': 'error',
        'prefer-template': 'error',
        quotes: ['error', 'single'],
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'name',
                    'metaInfo',
                    'components',
                    'props',
                    'data',
                    'computed',
                    'watch',
                    'watchQuery',
                    'beforeCreate',
                    'created',
                    'beforeMount',
                    'mounted',
                    'beforeDestroy',
                    'destroy',
                    'methods'
                ]
            }
        ]
    }
};
