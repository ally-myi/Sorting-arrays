// initialize the counter and the array
var numbernames=0;
var counter=0;
var names = new Array();
function SortNames() {
   // Get the name from the text field
   thename=document.theform.newname.value;
   // Add the name to the array
   names[numbernames]=thename;
   // Increment the counter
   numbernames++;
   // Sort the array
   names.sort();
   document.theform.sorted.value=names.join("\n");
   // increase the counter
counter = numnames + 1;
// add the name to the array
names[numnames] = index + '. ' + thename;
	
}

