console.log("hawyee 6")

//home

var thankyou = document.getElementById("thankyou");

let form = document.getElementById("my-form")
form.addEventListener("submit", () => {
	event.preventDefault();
	
    thankyou.textContent="Thank you!";

    //console.log(auth.currentUser.uid)

    let name = document.getElementById("input-name").value;
    let motivation = document.getElementById("input-motivation").value;

    console.log("name " + name);
    console.log("motivation " + motivation);

    let q1 = {
        name,
        motivation,
    };

    firestore.collection("answers").doc(auth.currentUser.uid).collection("questions").doc("home")
        .set({
            name, // => name: name
            motivation    
        })
        .catch(error => console.log(error))

    // VHxJJc0cGOV0Xt7kH8ZTjAgdy6V2
    
})

// retrieve


const inputsDiv = document.getElementById("inputs")

const inputListener = firestore.collection("answers").doc("userId").collection("questions").doc("home")
    .onSnapshot(doc => {
        console.log("inputs listener")

        if(!doc.exists)
            return

        let homeData = doc.data()

        inputsDiv.innerHTML = "Name: " + homeData.name + ", " + homeData.motivation

        querySnapshot.forEach(doc => {
             console.log(each)

             let input = doc.data()

             let inputsElement = document.createElement("p")
             inputsElement.innerHTML = "Name: " + input.name + " || Motivation = " + input.motivation
            
             inputsDiv.appendChild(inputsElement)
         })
    })

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
    inputListener()
});
