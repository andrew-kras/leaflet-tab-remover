# leaflet-tab-remover

## English

### Installation

```bash
npm install leaflet-tab-remover
```

### Overview

**Leaflet Tab Remover** is a Vue 3 plugin designed to enhance accessibility by removing the tab index from Leaflet map elements. This plugin is particularly useful when you want to integrate keyboard navigation (tab-based navigation) in your application, but don't want the Leaflet map elements to be part of the tab order.

### Features

- Removes `tabindex` from Leaflet map elements (`.leaflet-interactive` and `.leaflet-container`).
- Automatically applies styles to disable focus outlines for better user experience.
- Simple and easy integration with any Vue 3 project.

### Usage

To use the plugin, first register it in your Vue application:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import leafletTabRemover from 'leaflet-tab-remover';

const app = createApp(App);
app.use(leafletTabRemover);
app.mount('#app');
```

```vue
<template>
  <div>
    <div id="map" class="leaflet-container"></div>
    <!-- Your Leaflet map component -->
  </div>
</template>

<script>
export default {
  mounted() {
    // Initialize your Leaflet map here

    // Remove tabindex from Leaflet map elements
    this.$removeLeafletTabIndex();
  }
}
</script>
```

### Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Русский

### Установка

```bash
npm install leaflet-tab-remover
```

### Обзор

**Leaflet Tab Remover** - это плагин для Vue 3, разработанный для улучшения доступности, убирая табуляцию (tab index) у элементов карты Leaflet. Этот плагин особенно полезен, если вы хотите интегрировать навигацию с помощью клавиатуры (табуляцию) в своем приложении, но не хотите, чтобы элементы карты Leaflet были частью порядка табуляции.

### Возможности

- Удаляет `tabindex` у элементов карты Leaflet (`.leaflet-interactive` и `.leaflet-container`).
- Автоматически применяет стили для отключения контуров фокуса для лучшего пользовательского опыта.
- Простая и легкая интеграция с любым проектом на Vue 3.

### Использование

Чтобы использовать плагин, сначала зарегистрируйте его в вашем Vue приложении:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import leafletTabRemover from 'leaflet-tab-remover';

const app = createApp(App);
app.use(leafletTabRemover);
app.mount('#app');
```

```vue
<template>
  <div>
    <div id="map" class="leaflet-container"></div>
    <!-- Ваш компонент карты Leaflet -->
  </div>
</template>

<script>
export default {
  mounted() {
    // Инициализируйте карту Leaflet здесь

    // Убираем tabindex у элементов карты Leaflet
    this.$removeLeafletTabIndex();
  }
}
</script>
```

### Вклад в развитие
Если вы хотите внести свой вклад, сделайте форк репозитория и используйте ветку feature. Пулл-реквесты приветствуются!


## License | Лицензия
MIT License

Copyright (c) 2024 Andrew Kras

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.