document.addEventListener("DOMContentLoaded", function () {
  const editors = document.querySelectorAll(".editor");

  editors.forEach(function (editor) {
    const quill = new Quill(editor, {
      theme: "snow",
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"], // styles en ligne
          ["blockquote", "code-block"], // blocs
          [{ header: 1 }, { header: 2 }], // titres
          [{ list: "ordered" }, { list: "bullet" }], // listes
          [{ script: "sub" }, { script: "super" }], // sub/super
          [{ indent: "-1" }, { indent: "+1" }], // retrait
          [{ direction: "rtl" }], // direction du texte
          [{ size: ["small", false, "large", "huge"] }], // taille de la police
          [{ header: [1, 2, 3, 4, 5, 6, false] }], // styles d'en-tête
          [{ color: [] }, { background: [] }], // couleurs
          [{ font: [] }], // polices
          [{ align: [] }], // alignement
          ["clean"], // nettoyer les styles
          ["link", "image", "video"], // liens, images et vidéos
        ],
      },
    });

    // Trouvez l'élément du champ caché existant.
    const hiddenInput = document.getElementById("post_content");

    // Mettez à jour le champ caché avec le contenu HTML de l'éditeur lorsque le contenu change.
    quill.on("text-change", function () {
      hiddenInput.value = quill.root.innerHTML;
    });

    // Si vous êtes sur la page d'édition, chargez le contenu initial dans l'éditeur.
    if (hiddenInput.value) {
      quill.pasteHTML(hiddenInput.value);
    }
  });
});
