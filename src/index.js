function addLeafletStyles() {
    const style = document.createElement('style');
    style.textContent = `
    .leaflet-interactive {
      outline: none !important;
      box-shadow: none !important;
      -moz-outline-style: none !important;
    }
    .leaflet-container {
      outline: none !important;
      box-shadow: none !important;
      -moz-outline-style: none !important;
    }
  `;
    document.head.appendChild(style);
}

function removeTabIndex() {
    const mapElement = document.querySelector('.leaflet-container');
    mapElement.setAttribute('tabindex', '-1');
    const elements = mapElement.querySelectorAll('.leaflet-interactive');
    elements.forEach(element => {
        element.setAttribute('tabindex', '-1');
    });
}

export default {
    install(app) {
        addLeafletStyles();

        app.config.globalProperties.$removeLeafletTabIndex = removeTabIndex;
    }
};