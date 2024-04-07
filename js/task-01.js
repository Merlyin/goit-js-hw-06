let lists = document.getElementsByClassName('item');
let result = "Number of categories: " + lists.length + "\n\n";
for(let i = 0; i < lists.length; i += 1) {
    result += "Category: " + lists[i].firstElementChild.textContent + "\n" + "Elements: " + 
    lists[i].getElementsByTagName('li').length + "\n\n";
}
console.log(result);