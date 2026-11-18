/* CBE Nexus global country-data bootstrap.
 * Browser: share one registry with the country dashboard and enrichment scripts.
 * Node: export an empty registry so server-side SEO imports never reference window.
 */
(function(root){
  "use strict";
  const registry = root
    ? (root.CBE_GLOBAL_COUNTRY_DATA = root.CBE_GLOBAL_COUNTRY_DATA || {})
    : {};
  if (typeof module !== "undefined" && module.exports) {
    module.exports = registry;
  }
})(typeof window !== "undefined" ? window : null);
