<script>
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".quiz-question").forEach(function (q) {
    var button = q.querySelector("button.quiz-check");
    var feedback = q.querySelector(".quiz-feedback");
    if (!button) return;

    button.addEventListener("click", function () {
      var selected = q.querySelector('input[type="radio"]:checked');
      var labels = q.querySelectorAll("label");
      labels.forEach(function (l) {
        l.classList.remove("option-correct", "option-incorrect");
      });

      if (!selected) {
        feedback.textContent = "Pick an answer first.";
        feedback.className = "quiz-feedback incorrect";
        feedback.style.display = "block";
        return;
      }

      var isCorrect = selected.dataset.correct === "true";
      var selectedLabel = selected.closest("label");

      if (isCorrect) {
        selectedLabel.classList.add("option-correct");
        feedback.textContent = "Correct!";
        feedback.className = "quiz-feedback correct";
      } else {
        selectedLabel.classList.add("option-incorrect");
        var correctInput = q.querySelector('input[data-correct="true"]');
        if (correctInput) {
          correctInput.closest("label").classList.add("option-correct");
        }
        feedback.textContent = "Not quite — the correct answer is highlighted above.";
        feedback.className = "quiz-feedback incorrect";
      }
      feedback.style.display = "block";
    });
  });
});
</script>
