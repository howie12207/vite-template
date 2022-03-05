# Vite Template

## Composition

-   Vite
-   Vue3
-   Vuex
-   Vue-router
-   Axios
-   SCSS

## Plugins

| Name                 | Description                   |
| -------------------- | ----------------------------- |
| [tailwind]           | A utility-first CSS framework |
| [element-plus]       | UI library                    |
| [vue-meta]           | Manage HTML metadata          |
| [fontawesome]        | Icon library                  |
| [eslint]             | Check JS code                 |
| [stylelint]          | Check CSS                     |
| [commitlint] [husky] | Check Commit                  |
| [react-snap]         | Pre-render tool               |

[tailwind]: https://github.com/tailwindlabs/tailwindcss
[element-plus]: https://github.com/element-plus/element-plus
[vue-meta]: https://github.com/nuxt/vue-meta
[fontawesome]: https://github.com/FortAwesome
[eslint]: https://github.com/eslint/eslint
[stylelint]: https://github.com/stylelint/stylelint
[commitlint]: https://github.com/conventional-changelog/commitlint
[husky]: https://github.com/typicode/husky
[react-snap]: https://github.com/stereobooster/react-snap

### How to use fontawesome

1.Add corresponse icon

```
// utils/fontawesome.js

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'; // <-- Add icon here

library.add(faCaretUp); // <-- Add correspond icon here

export default FontAwesomeIcon;
```

2.Check you have import fontawesome and use it

```
// src/main.js
import fontAwesomeIcon from '@/utils/fontawesome.js';

app.component('FAIcon', fontAwesomeIcon)
```

3.Use in your vue file

```
// XXX.vue

<FAIcon icon="caret-up" />  // <-- Component name is "FAIcon", use attribute "icon" with value "remove fa and use kebab Case"
```

### How to use vue-meta

1.Check you have import vue-meta and use it

```
// src/main.js
import { createMetaManager } from 'vue-meta';

app.use(createMetaManager())
```

2.Import in your main page

```
// src/App.vue
<script setup>
import { useMeta } from 'vue-meta';

useMeta({
    htmlAttrs: { lang: 'zh-TW' },
    meta: [
        {
            vmid: 'description',
            name: 'description',
            content: 'Vite Template'
        }
    ]
});
</script>

<template>
     <metainfo>
        <template #title="{ content }">
            {{ content ? `${content} | Vite Template` : 'Vite Template' }}
        </template>
    </metainfo>
</template>
```

3.Use in your pages

```
// src/views/xxx.vue

<script setup>
import { useMeta } from 'vue-meta';

useMeta({
    title: 'Home'  // <-- In this page title will be "Home | Vite Template"
});
</script>

```

### How to creat SSG (pre-render)

1.Check you have install react-snap

```
npm i react-snap
```

2.Add setting in package.json

```
// package.json

"scripts": {
  "postbuild": "react-snap"
},
"reactSnap": {
  "source": "dist",
  "minifyHtml": {
    "collapseWhitespace": false,
    "removeComments": false
  }
}
```

3.Run build

```
npm run build
```

## Other recommend plugins

| Name              | Description         |
| ----------------- | ------------------- |
| [vue3-apexcharts] | Visulizations chart |

[vue3-apexcharts]: https://github.com/apexcharts/vue3-apexcharts
