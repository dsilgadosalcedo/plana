const processSpan = document.querySelector('#process')
const radioList = document.querySelectorAll('input[type="radio"][name="process"]')
radioList.forEach(radio => {
  const label = document.querySelector(`label[for="${radio.id}"]`);
  label.addEventListener('click', (event) => {
    backWhite()
    label.style.backgroundColor = "rgb(224, 231, 255)";
    const text = label.textContent.toLowerCase().trim()
    processSpan.innerText = ` de ${text} `
    const value = label.getAttribute("for")
    printInputs(value)
  });
});

function backWhite() {
  const labels = document.querySelectorAll("label")
  labels.forEach(element => {
    element.style.backgroundColor = "rgb(255, 255, 255)";
  });
}

function printInputs(value) {
  const process = findString(value)
  const divContainer = document.querySelector("#files");
  divContainer.innerHTML = ""
  process.documents.forEach((element, index) => {
    const label = document.createElement("label");
    label.textContent = element;
    label.setAttribute("for", `file${index}`);

    const input = document.createElement("input");
    input.setAttribute("id", `file${index}`);
    input.setAttribute("type", "file");
    input.setAttribute("class", "p-2 cursor-pointer rounded-md w-64 border-2 border-gray-300");

    const div = document.createElement("div");
    div.setAttribute("class", "flex flex-col");

    div.appendChild(label);
    div.appendChild(input);

    divContainer.appendChild(div);
  });
  
  const noteSpan = document.querySelector("#note")
  const container = noteSpan.parentNode
  
  if (process.note) {
    noteSpan.textContent = process.note
    container.classList.remove("hidden")
  } else if (!container.classList.contains("hidden")) {
    container.classList.add("hidden");
  }
}

function findString(value){
  const selectedProcess = documentLists.find(process => process.name === value);
  return selectedProcess
}

const inscription = {
  name: "inscription",
  nameES: "Inscripción",
  documents: [
    "Documento de identidad alumno (150%).",
    "Documento de identidad del padre, madre de familia o acudiente (150%).",
    "Observador del estudiante o certificado de comportamiento (no aplica para transición).",
    "Boletines de periodos cursados a la fecha (si son varias hojas unir en un solo archivo).",
    "Carnet de vacunación y crecimiento y desarrollo (solo aplica para transición)."
  ],
  note:"Registro civil para menores de 7 años, tarjeta de identidad para mayores de 7 años y cédula de ciudadanía para mayores de 18 años. Para extranjeros visa o cédula de extranjería, permiso especial de permanencia – PEP, permiso protección personal – PET o número asignado por la SEM."
};

const registration = {
  name: "registration",
  nameES: "Matrícula para nuevos",
  documents: [
    "Certificados de estudio de años anteriores al solicitado (el certificado de grado 5° avala el nivel de primaria y el de grado 9° todos los grados anteriores, en los demás casos anexar el certificado del año anterior).",
    "Liberación del SIMAT (Opcional).",
    "Certificado de afiliación a salud.",
    "Diagnóstico, certificación o concepto médico sobre la discapacidad o el trastorno específico del aprendizaje o del comportamiento emitido por el Sector Salud (según sea el caso)."
  ],
  note:"El certificado de estudio es un documento oficial donde se acredita los estudios que ha cursado y superado con éxito, el cual es expedido por la institución de donde proviene."
};

const reintegration = {
  name: "reintegration",
  nameES: "Reingreso",
  documents: [
    "Documento de identidad alumno (150%).",
    "Documento de identidad del padre, madre de familia o acudiente (150%).",
    "Observador del estudiante.",
    "Certificados de estudio de años anteriores al solicitado (el certificado de grado 5° avala el nivel de primaria y el de grado 9° todos los grados anteriores, en los demás casos anexar el certificado del año anterior).",
    "Liberación del SIMAT (Opcional)."
  ]
};

const renovation = {
  name: "renovation",
  nameES: "Renovación",
  documents: [
    "Documento de identidad del estudiante (150%).",
    "Documento de identidad del padre, madre de familia o acudiente (150%)."
  ]
};

const documentLists = [inscription, registration, reintegration, renovation];