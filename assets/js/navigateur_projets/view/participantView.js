class ParticipantView{

    static networkError = false;
    
    constructor(associationId, associationName, element){
        this.element = element;
        this.associationId = associationId;
        this.associationName = associationName;
        $('#participants-container .information')[0].innerHTML = this.associationName;

        Navigateur.loading(true);
        fetch("./assets/json/participants.json?" + (new Date()).getTime())
        .then(response => {
            return response.json();
            })
        .then(data => {
            this.participants = data;
            $("#participants-container .participant.clickableElement").detach();
            $("#participants-container .error").detach();
            
            let i = 0;
            Object.entries(this.participants.Participants).forEach(([key, value]) => {
                
            
                if(parseInt(associationId) == parseInt(value.association)){
                    $(this.createButton(value.nom,value.featured)).click(function(eventObject){
                        if(i>0){
                            Navigateur.openSites(key, value.nom, associationName);
                        }else{
                            createError();
                            Navigateur.openSites(key, value.nom, associationName);
                        }
                    });
                    i++;
                }
            });

            if(i<=0){
                this.createError();
            }
            Navigateur.loading(false);
        }).catch((error => {
            console.log("Participants View reports:" + error);
            if(!ParticipantView.networkError){
                this.createNetworkError(error);
                ParticipantView.networkError = true;
            }
            Navigateur.loading(false);
        }));
    }

    createButton( name, featured){
        let buttonElement = $(`<button class="participant clickableElement ">
        <div class="icon-container">
          <img src="assets/icons/user.svg">
        </div>
        <div class="clickable-heading">
          ${name}
        </div>
      </button>`)[0];
      if(featured){
        buttonElement.classList.add("featured");
      }
        return this.element.appendChild(buttonElement);
    }


    createError(){
        let element = $(`<div class="box-container error">Aucun participant trouvé</div>`)[0];
        this.element.appendChild(element)
    }

    createNetworkError(error){
        Navigateur.showcritcalError(error);
    }
}