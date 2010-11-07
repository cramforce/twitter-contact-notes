require.def("contact/model/person",
  ["/static/js/ext/backbone.js"],
  function() {
    var Person = Backbone.Model.extend({
      url: "/person"
    });
    
    var Persons = Backbone.Collection.extend({
      model: Person,
      url: "/persons"
    });
    
    return {
      Person: Person,
      Persons: Persons
    }
  });
