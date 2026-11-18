/* CBE Nexus global country-data bootstrap.
 * This file must load before all regional and country enrichment scripts.
 * Keep the shared object available so each following script can safely merge
 * its country records instead of silently returning before the fallback runs.
 */
(function(){
  "use strict";
  window.CBE_GLOBAL_COUNTRY_DATA = window.CBE_GLOBAL_COUNTRY_DATA || {};
})();
