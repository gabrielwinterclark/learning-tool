console.log("iteration 3")

// https://github.com/gabrielwinterclark/learning-tool

//LO1

let q1feedback = document.getElementById("lo1-q1-feedback")

let form1 = document.getElementById("lo1-q1-form")
form1.addEventListener("submit", () => {
    event.preventDefault()

    let value = document.querySelector('input[name="lo1-q1-answer"]:checked').value

    console.log("value = " + value)

    //return

    switch(value) {
        case "Correct":
            q1feedback.innerHTML = "Correct! Yes, Jeremiah values playing the cello as an end, for itself."
            break;
        case "Incorrect":
            q1feedback.innerHTML = "Not quite. Remember, something has intrinsic value when it is valuable for itself. Jeremiah does, in fact, value playing the cello for itself: he values it intrinsically."
            break;
    }

    // firestore.collection("answers").doc("userId").collection("questions").doc("lo1-q1").set(q1)
    firestore.collection("answers").doc(auth.currentUser.uid).collection("questions").doc("lo1-q1").set({
        q1: value,
    })

    // let a = { name: "Name" }
    // let b = { type: "Type" }

    // let c = {
    //     ...a,
    //     ...b
    // }

    // let doc = {
    //     q1: "value",
    //     q2: "",
    //     q3: "",
    //     name: ""
    // }

    // let name = document.getElementById("input-name").value;
    // let motivation = document.getElementById("input-motivation").value;

    // console.log("name " + name);
    // console.log("motivation " + motivation);

    // let inputs = {
    //     id: "",
    //     name,
    //     motivation,
    //     userId: "userID"
    // };

    // let inputRef = firestore.collection("inputs").doc();

    // inputs.id = inputRef.id;

    // inputRef.set(inputs);
})
