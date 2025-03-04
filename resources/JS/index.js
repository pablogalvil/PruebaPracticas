document.addEventListener("DOMContentLoaded", function () {
    //Guardamos los elementos a utilizar
    const buttons = document.querySelectorAll("button");
    const posts = document.querySelectorAll("main .post1, main .post2, main .post3, main .post4, main .post5");
    const nav = document.querySelector("header nav");

    //Bucle para agregar un eventListener en cada boton
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.id;

            //Si es el menu hará algo distinto
            if(category == "menu"){
                if(nav.style.display == "block"){
                    nav.style.display = "none";
                }else{
                    nav.style.display = "block";
                }
            }else{ //Si no es el menu, mostrará los posts que contengan el span correspondiente
                posts.forEach(post => {
                    if (category === "allPosts") {
                        post.style.display = "block";
                    } else {
                        const spans = post.querySelectorAll("span");
                        let hasCategory = false;
                        
                        //Bucle que pasa por cada span para detectar su categoria
                        spans.forEach(span => {
                            if (span.id === category) {
                                hasCategory = true;
                            }
                        });
                        
                        post.style.display = hasCategory ? "block" : "none";
                    }
                });
            }
        });
    });
});
