class SiteView{

    static networkError = false;


    constructor(participantId, participantName, associationName, element){
        this.element = element;
        this.participantId =  participantId;
        $('#sites-container .information')[0].innerHTML = `Projets de ${participantName} à ${associationName}`;
        
        Navigateur.loading(true);
        fetch("./assets/json/sites.json?" + (new Date()).getTime())
        .then(response => {
            return response.json();
            })
        .then(data => {
            this.sites = data;
            let i = 0;
            $("#sites-container .site.clickableElement").remove();
            $("#sites-container .error").remove();
            Object.entries(this.sites.Sites).forEach(([key, value]) => {
                if(parseInt(value.auteur) == parseInt(participantId)){
                   this.createButton(value.lign,value.nom, value.reward);
                   i++;
                }
            });
            if(i<=0){
                this.createError();
            }
            Navigateur.loading(false);
        }).catch((error => {
            console.log("Sites View reports:" + error);
            if(!SiteView.networkError){
                this.createNetworkError(error);
                SiteView.networkError = true;
            }
            Navigateur.loading(false);
        }));
    }

    createButton(lign, name, reward){
        let buttonElement = $(`<a href="${lign}" class="site clickableElement ">
        <div class="icon-container">
          <img src="assets/icons/external-link.svg">
        </div>
        <div class="clickable-heading">
          ${name}
        </div>
      </a>`)[0];
        console.log("Created button for site: "+name);
        if(reward){
            buttonElement.classList.add("reward");
        }
        return this.element.appendChild(buttonElement);
    }

    createError(){
        let element = $(`<div class="box-container error">Aucun site trouvé</div>`)[0];
        this.element.appendChild(element)
    }

    createNetworkError(error){
        Navigateur.showcritcalError(error);
    }

}