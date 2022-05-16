class AssociationView{

    static networkError = false;

    constructor(element){
        this.element = element;
        fetch("./assets/json/associations.json")
        .then(response => {
            return response.json();
            })
        .then(data => {
            this.associations = data;
            console.log(data)
            Object.entries(this.associations.Associations).forEach(([associationId, associationContent]) => {
                $(this.createButton(associationId, associationContent["name"], associationContent["featured"])).click(function(eventObject){
                    Navigateur.openParticipants(associationId, associationContent["name"]);
                });
            });
        }).catch((error => {
            console.log("Association View reports:" + error);
            if(!AssociationView.networkError){
                this.createNetworkError(error);
                AssociationView.networkError = true;
            }
        }));

    }

    createButton(key, name, featured){
        let buttonElement = $(`<button data-id="${key}" class="association clickableElement "><div class="icon-container"><img src="assets/icons/package.svg" </div><div class="clickable-heading">${name}</div></button>`)[0];
        console.log(buttonElement);
        if(featured){
            buttonElement.classList.add("featured");
        }
        return this.element.appendChild(buttonElement);
    }

    createNetworkError(error){
        Navigateur.showcritcalError(error);
    }

}