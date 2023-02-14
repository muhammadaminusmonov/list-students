let nameEl = document.getElementById("name");
let gradeEl = document.getElementById("grade");
let facultyEl = document.getElementById("faculty");
let form = document.getElementById("form");
let tbody = document.getElementById("tbody");
let submit = document.getElementById("submit");

const isRequired = (value) => (value === "" ? false : true);

const showError = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;

  formField.classList.remove("error");
  formField.classList.add("success");

  const error = formField.querySelector("small");
  error.innerText = "passed";
};

const checkName = () => {
  let valid = false;
  const name = nameEl.value.trim();

  if (!isRequired(name)) {
    showError(nameEl, "Cannot be blank.");
  } else {
    showSuccess(nameEl);
    valid = true;
  }
  return valid;
};

const checkGrade = () => {
  let valid = false;
  const grade = gradeEl.value.trim();

  if (!isRequired(grade)) {
    showError(gradeEl, "Cannot be blank.");
  } else {
    showSuccess(gradeEl);
    valid = true;
  }
  return valid;
};

const checkFaculty = () => {
  let valid = false;
  const faculty = facultyEl.value.trim();

  if (!isRequired(faculty)) {
    showError(facultyEl, "Cannot be blank.");
  } else {
    showSuccess(facultyEl);
    valid = true;
  }
  return valid;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isNameValid = checkName(),
    isGradedValid = checkGrade(),
    isFacultyValid = checkFaculty();

  let isFormValid = isNameValid && isGradedValid && isFacultyValid;

  if (isFormValid == true) {
    tbody.innerHTML += `
    <tr>
        <td>${i++}</td>
        <td>${nameEl.value}</td>
        <td>${gradeEl.value}</td>
        <td>${facultyEl.value}</td>
    </tr>
    `;
    form.reset();
  }
});

form.addEventListener("input", function (e) {
  switch (e.target.id) {
    case "name":
      checkName();
      break;
    case "grade":
      checkGrade();
      break;
    case "faculty":
      checkFaculty();
      break;
  }
});

let i = 1;
