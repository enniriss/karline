const inputBox = document.getElementsByClassName("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Vous devez écrire quelque chose !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


function addTask(){
    if(inputBox.value === ''){
        alert("Vous devez écrire quelque chose !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        const taskId = e.target.parentElement.id;
        console.log(taskId);
        // Mettre à jour la tâche sur le serveur
        fetch('/tasks/'+taskId, {
            method: 'PUT',
            body: new FormData(document.querySelector('form'))
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
    else if(e.target.tagName === "SPAN"){
        // e.target.parentElement.remove();
        const taskId = e.target.parentElement.id;
        console.log(taskId);
        // Supprimer la tâche sur le serveur
        fetch('/tasks/'+taskId, {
            method: 'DELETE',
            body: new FormData(document.querySelector('form'))
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
}, false);

// Charger les tâches existantes depuis le serveur

fetch('/tasks', {
    method: 'GET'
})
.then(response => response.json())
.then(data => {
    data.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task.title;
        li.id = task["_id"]
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    });
})
.catch(error => console.log(error));

console.clear();
