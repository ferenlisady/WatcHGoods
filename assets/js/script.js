console.log(document.getElementById('formData'));
document.getElementById('formData').addEventListener('submit', (event) => {
        
        event.preventDefault();

        const name = document.getElementById('inputFullName').value
        const email = document.getElementById('mail').value
        const message = document.getElementById('msg').value
        const country = document.getElementById('country').value
        const iagree = document.getElementById('iagree-container').checked


        if (name.length === 0)
        {
            alert('Please enter your name')
            return
        }
        if (name.length < 5 || name.length > 30)
        {
            alert('Your username must be between 5 - 30 characters')
            return
        }
        if (!email.endsWith('@gmail.com'))
        {
            alert('Please enter a valid email address')
            return
        }
        if (country === "")
        {
            alert('Please select a country')
            return
        }
        if (message.length === 0)
        {
            alert('Please enter your message')
            return
        }
        if (message.length < 10 ||  message.length > 100 )
        {
            alert('Your message must be between 10 - 100 characters')
            return
        }
        if (!iagree)
        {
            alert('Please agree with the term and condition')
            return
        }
        alert('Thank you for your contacting us!')
        window.location.href = './index.html'
    })