require.def("contact/sammy",
  ["contact/model/person", "contact/model/note"],
  function(person) {
    return {
      ready: function () {
/*
        var following = new person.Persons();
        following.each(function (person) {
          console.log("Person: " + person);
        })
*/
		var testStorage = {
			users : [
				{id: 1, name: 'aaaaaa'},
				{id: 2, name: 'bbbbbb'},
				{id: 3, name: 'cccccc'},
				{id: 4, name: 'dddddd'}
			],
			notes : {
				1: ['aaa', 'bbb', 'ccc']
			}
		};
		
        var app = $.sammy('#main', function() {
			this.use(Sammy.Mustache, 'ms');
			
			var getUsers = function(context) {
				if (! testStorage.users) {
					return;
				}
				context.users = testStorage.users;
				context.render('templates/users.ms').appendTo('#users');
				testStorage.users = false;
			};
			
			this.around(function(callback) {
				getUsers(this);	
				callback();
			});
			
			this.get('#/', function() {
				this.partial('templates/main.ms');
    		});

			this.get('#/user/:id', function() {
				this.trigger('update-notes');
    		});

			this.post('#/user/:id', function() {
				testStorage.notes[this.params['id']].push(this.params['note']);
				this.trigger('update-notes');
			});
			
			this.bind('update-notes', function() {
				this.userId = this.params['id'];
				if (! testStorage.notes[this.userId]) {
					testStorage.notes[this.userId] = [];
				}
				this.userNotes = testStorage.notes[this.userId];
				this.partial('templates/notes.ms');
			});
			
		});
		
		$(function() {
    		app.run('#/');
  		});
      }
    };
  })