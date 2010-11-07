require({
    baseUrl: "/static/js/"
  },
  ["contact/sammy", "js/ext/sammy/sammy.js", "js/ext/sammy/plugins/sammy.mustache.js"],
  function(sammy) {
    sammy.ready();
  }
);