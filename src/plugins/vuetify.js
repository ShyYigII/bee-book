import { createVuetify } from "vuetify";
import "vuetify/styles"; // Make sure this is the correct path to Vuetify styles

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

export default vuetify;
