require.def("contact/model/note",
  ["/static/js/ext/backbone.js"],
  function() {
    var Note = Backbone.Model.extend({
      url: "/note"
    });
    
    return Note;
  });
