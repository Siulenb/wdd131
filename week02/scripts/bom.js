

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// const li =document.createElement('li');

// const deleteButton = document.createElement('button');

// li.textContent = input.value; /// textContent is preferred over innerHTML because it is more secure.
//                               // However, if you need to include HTML tags, then you would use innerHTML.
//                              // textContent will not render HTML tags. It will display the tags as text.

// deleteButton.textContent = '❌';

// li.append(deleteButton);

// list.append(li);

button.addEventListener('click', function() {
    // Check that input is not empty
    if (input.value.trim() !== '') {
        // Create list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value; 
        deleteButton.textContent = '❌';

        // Append delete button to list item, then list item to list
        li.append(deleteButton);
        list.append(li);

        // Clear the input field and set focus back to it
        input.value = '';
        input.focus();

        // Delete button functionality
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
    } else {
        // If input is empty, refocus on the input field
        input.focus();
    }
});