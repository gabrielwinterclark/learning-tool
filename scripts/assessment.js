console.log("iteration 3")

// https://github.com/gabrielwinterclark/learning-tool

let form = document.getElementById("assessment-form")
form.addEventListener("submit", () => {
    event.preventDefault()

    let assessment1 = document.querySelector('input[name="assessment-q1-answer"]:checked').value
    let assessment2 = document.querySelector('input[name="assessment-q2-answer"]:checked').value
    let assessment3 = document.querySelector('input[name="assessment-q3-answer"]:checked').value

    //return

    let assessmentResults = {
      assessment1,
      assessment2,
      assessment3,
    };
  
    // firestore.collection("answers").doc("userId").collection("questions").doc("lo1-q1").set(q1)
    firestore.collection("answers").doc(auth.currentUser.uid).collection("questions").doc("assessment").set({
        assessment1,
        assessment2
    })
    .catch(error => console.log(error));
    response.sendRedirect("http://gabrielwinterclark.github.io/learning-tool/teacherdash")
})