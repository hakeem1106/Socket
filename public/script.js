const socket = io('http://localhost:5000'),
      chatForm = document.getElementById('chatForm'),
      chatInput = document.getElementById('chatBar'),
      chatBox = document.getElementById('chatWindow'),
      storyWindow = document.getElementById('story');


socket.on('new player', (data)=>{
showStory(data)
    
});

socket.on('chat-message', (data)=>{
showMessage(data)
})

chatForm.addEventListener('submit', e=>{
    e.preventDefault()
    const formData = chatInput.value
    socket.emit('chat-message', formData)
    chatInput.value = ''
})


showMessage=(formData)=>{
    const bubble = document.createElement('div')
    bubble.innerText = formData
    chatBox.append(bubble)
}

showStory=(data)=>{
    const plot = document.createElement('div')
    plot.innerHTML= data
    storyWindow.append(plot)
}
