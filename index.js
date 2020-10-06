var debugMode = true;

//this is so you can toggle the ID's showing up near the list items
if(debugMode) {
    templateText = '<li class="listElement">{{ listIndex.text }} <b>ID: {{ listIndex.id }}</b></li>';
} else {
    templateText = '<li class="listElement">{{ listIndex.text }}</li>';
}

var listItem = Vue.component('listitem', {

    //this is the component used for each individual item on the list
    //the prop 'listIndex' is the position in which the item is displayed
    
    name: 'listitem',
    props: ['listIndex'],
    template: templateText

    
});

//this is our app, where the logic of the list app takes place. It is also known as the vue instance.
var app = new Vue({
    //this option mounts the vue instance to the app div within index.html
    el: '#app',

    data: {
        list: [
            { id: 0, text: 'Test Item 1!'},
            { id: 1, text: 'Test Item 2!'}
        ],

        inputText: "",
    },

    methods: {
        addItem: function() {
            /*
                this method addItem creates a new object entry in the list. It assigns the new
                entry an id and text value. Then, it sets input text back to an empty string to
                clear the text feild.
            */
            this.list.push({ id: this.list.length, text: this.inputText});
            this.inputText = "";
        },

        removeItem: function(itemID) {
            /*
                This method removes the specified entry from the list.
            */
            this.list.splice(itemID,1);


            /*
                This for loop ensures the items in the list are ordered correctly, even if
                an entry is taken out of the center of the list. It finds all entries above
                the previously removed one and bumps them down by 1.
            */
            for (i = itemID; i < this.list.length; i++){
                this.list[i].id--;
            }
        }
    },

    components: {
        listitem: listItem
    }
     
});