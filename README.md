# C-66: MONKEY CHUNKY

Goals:

● Learn about ternary operators.
● Use ternary operators to conditionally render different styles to the user.
● Fix case issue in the application.

# --- Lets see how we do this in our Monkey-Chunky app ----

ISSUES:
  - There were too few words and the app was throwing an error when a word was typed which was not in the database.
  - All the words in the database are in lowercase, as a result it does not identify the same word but with different case.
  - If the word is not present in the databse, no indicator is provided to the user.


1. Open : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator 

2. Open : https://scotch.io/tutorials/understand-the-javascript-ternary-operator-like-abc


Ternary operator is a simple operator in programming using which you can write if-else statements in a single line. Programmers use ternary operators to write conditional statements in their code keeping their program small. Ternary operators are used very frequently by developers to write quick conditional statements.

3. https://www.w3schools.com/js/js_string_methods.asp


#--- PROBLEM STATEMENT: 1. When the ‘Go’ button is pressed, we should check if the word entered in the text is in the database or not. ----
=== the ternary operator to create an alert box when the typed word does not exist in the database.

#--- PROBLEM STATEMENT: 2. What do we do if the word is present in the database?  ----
=== We store the chunks and the phones in the state using ‘this.state’.

#--- PROBLEM STATEMENT: 3. Else if the word is not present in the database?  ----
=== Else we display an alert Box. React Native also has an Alert component which can be used to display alert.
 -----------
 1. Import Alert component from React Native library. 
 2. try to enter a word which does not exist in our database and just console what we get if we try
to access it from our database. 
 3. Write the log message.
 4. Use this as our condition for our ternary operator. code where ‘db[this.state.text]’ is used as a
condition.
 5. If the word exists, the state for chunks and ‘phonicSounds’ are set. Else, an alert box is displayed.

 #--- PROBLEM STATEMENT: 4. Right now our textbox search is case sensitive. If we write ‘The’ instead of ‘the’, we will get an alert that the word does not exist. Can you make our text search case insensitive? ----
=== the ternary operator to create an alert box when the typed word does not exist in the database.

#--- PROBLEM STATEMENT: 5. Can you use ternary operators to change the background of the phonic button when it is just pressed? This will help the user remember which button they pressed last.  ----
=== Our database contains all the letters in lowercase. So we can convert the text from our ‘TextInput’ to lowercase before searching for the word in our database.
 -----------
 1.  Strings already have an in-built
function called ‘.toLowerCase()’.
It converts any string to lowercase.
You can use it to convert the text to
lowercase. 
 2. Write code where the text is converted to lowercase first before search inside the database
is performed for the word.
 3. Test the app.
 4. Remove the spaces before
and after the typed word by the user
so that if the user has accidentally
pressed spaces before or after the
word, we can still find the word in the
database. String has a function called ‘trim()’
which does exactly that.
6. ‘toLowerCase()’ returns a string so
you can combine ‘.trim()’ in the same
statement to strip the word of any
spaces.
7. Test the app.

#--- PROBLEM STATEMENT: 3. Else if the word is not present in the database?  ----
=== We can create a new prop called ‘buttonIndex’ for ‘phonicSoundButton’ which passes the index of the current button. Inside the ‘PhonicSoundButton’ component, we can have a state
called ‘pressedButtonIndex’. This will contain the index number of the word chunk button in the array
which is currently pressed. If the ‘pressedButtonIndex’ is the same as the word chunk index, we
will give it one kind of style, else we will give it a different style.
 -----------
 1. Create a new
prop called ‘buttonIndex’
which is passed from
‘App.js’ to
‘PhonicSoundButton.js’.
 2. Create a new
State called
‘pressedButtonIndex’ inside
the ‘PhonicSoundButton.js’.
 3. Assign the
state of the
‘pressedButtonIndex’ when
the button is pressed.
 4. Use a ternary
operator to compare if the
‘pressedButtonIndex’ state is the same as the
‘buttonIndex’ passed by the
prop. 
 5. If yes, one style is used for
Text and TouchableOpacity
of the phonic button, else a
different style (different text
and background color) is
used.
