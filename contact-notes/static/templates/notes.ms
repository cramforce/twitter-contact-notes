Notes:
<ul>
    {{#userNotes}}<li>{{.}}</li>{{/userNotes}}
</ul>
<form action="#/user/{{userId}}" method="post">
    <textarea name="note"></textarea>
    <input type="submit" value="add" />
</form>