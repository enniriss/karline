// Va chercher les input du formulaire de Task
const inputBox = document.getElementById("task");
const listContainer = document.getElementById("list-container");

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);



const formData = new FormData(document.querySelector('form'));
formData.append('checked', 'false');
function addTask(){
    if(inputBox.value === ''){
        alert("Vous devez écrire quelque chose !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        console.log(list);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        const formData = new FormData(document.querySelector('form'));
        formData.append('checked', 'false');
        console.log(formData);

        // Envoyer la nouvelle tâche au serveur
        fetch('/tasks', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){

        //Tentative d'update
        const task = e.target.value;
        const taskId = e.target.id;
        
        if (task.checked == "on") {
            task.checked = "checked";
        } else {
            task.checked = "checked"
        }
        
        console.log("task",task);
        // Mettre à jour la tâche sur le serveur
        fetch('/tasks/'+taskId, {
            method: 'PUT',
            body: task
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
    else if(e.target.tagName === "SPAN"){
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


//Permet d'afficher les tâches
fetch('/tasks', {
    method: 'GET'
})
.then(response => response.json())
.then(data => {
    data.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task.title;
        li.id = task["_id"]
        li.classList = task.checked;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    });
})
.catch(error => console.log(error));


/////////////////////////////////////////////////////////////////////////////////////////////////
//Même chose mais pour l'entité UnderTask
const inputBoxe = document.getElementById("undertasks");
const underListContainer = document.getElementById("underlist-container");

underListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

const Under = new FormData(document.querySelector('form'));
formData.append('checked', 'false');
function addUnderTask(){
    if(inputBoxe.value === ''){
        alert("Vous devez écrire quelque chose !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBoxe.value;
        underListContainer.appendChild(li);
        console.log(list);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        const formData = new FormData(document.querySelector('form'));
        formData.append('checked', 'false');
        // Envoyer la nouvelle sous tâche au serveur
        fetch('/under-tasks', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
    inputBoxe.value = "";
}

underListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        const task = e.target.value;
        const taskId = e.target.id;
        console.log("lklklk",task.checke);

        if (task.checked == "on") {
            task.checked = "";
        } else {
            task.checked = "checked"
        }
        // Mettre à jour la sous tâche sur le serveur
        fetch('/tasks/'+taskId, {
            method: 'PUT',
            body: task
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
    else if(e.target.tagName === "SPAN"){
        const taskId = e.target.parentElement.id;
        console.log(taskId);
        // Supprimer la tâche sur le serveur
        fetch('/under-tasks/'+taskId, {
            method: 'DELETE',
            body: new FormData(document.querySelector('form'))
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
}, false);

// Charger les tâches existantes depuis le serveur

fetch('/under-tasks', {
    method: 'GET'
})
.then(response => response.json())
.then(data => {
    data.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task.title;
        li.id = task["_id"]
        li.classList = task.checked;
        underListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    });
})
.catch(error => console.log(error));