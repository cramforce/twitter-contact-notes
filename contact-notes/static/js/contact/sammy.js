require.def("contact/sammy",
  ["contact/model/person", "contact/model/note"],
  function(person) {
    return {
      ready: function () {
        var following = new person.Persons();
        following.each(function (person) {
          console.log("Person: " + person);
        })
      }
    };
  })