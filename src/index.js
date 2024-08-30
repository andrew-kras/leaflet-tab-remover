// Adds custom styles to disable focus outlines and shadows on Leaflet elements.
// This function is executed when the plugin is installed to ensure these styles are always applied.
function addLeafletStyles() {
    const style = document.createElement('style');
    style.textContent = `
    .leaflet-interactive {
      outline: none !important; /* Disable outline for interactive elements */
      box-shadow: none !important; /* Disable box-shadow for interactive elements */
      -moz-outline-style: none !important; /* Disable outline for Firefox */
    }
    .leaflet-container {
      outline: none !important; /* Disable outline for the map container */
      box-shadow: none !important; /* Disable box-shadow for the map container */
      -moz-outline-style: none !important; /* Disable outline for Firefox */
    }
  `;
    document.head.appendChild(style); // Append the style to the document head
}

// Removes the tabindex attribute from Leaflet map elements to prevent them from being focusable via keyboard.
// This function is executed after the Leaflet map is initialized to ensure all relevant elements are processed.
function removeTabIndex() {
    const mapElement = document.querySelector('.leaflet-container');
    if (mapElement) {
        mapElement.setAttribute('tabindex', '-1'); // Disable tabindex for the map container itself

        // Create a MutationObserver to watch for changes in the map container's child elements.
        // This is necessary because Leaflet dynamically adds interactive elements to the map.
        const observer = new MutationObserver(() => {
            const elements = mapElement.querySelectorAll('.leaflet-interactive');
            if (elements.length > 0) {
                elements.forEach(element => {
                    element.setAttribute('tabindex', '-1'); // Disable tabindex for all interactive elements
                });
                observer.disconnect(); // Stop observing once tabindex is set for all elements
            }
        });

        // Start observing the map container for any child node changes and subtree modifications.
        observer.observe(mapElement, { childList: true, subtree: true });
    }
}

// Vue plugin installation function
// This function is called automatically by Vue when the plugin is added to the app.
export default {
    install(app) {
        addLeafletStyles(); // Apply custom styles to Leaflet elements

        // Add the removeTabIndex function to the global properties of the Vue app.
        // This makes it accessible as `this.$removeLeafletTabIndex` in any Vue component.
        app.config.globalProperties.$removeLeafletTabIndex = removeTabIndex;
    }
};
