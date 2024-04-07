fetch('/tasks', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Ma tâche',
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erreur lors de l\'envoi de données:', error));
