class Navigateur{
    static assocoationInformation;
    static participantsInformation;
    static siteInformations;


    static associationSelector = $("#association-container")[0];
    static participantSelector = $("#participants-container")[0];
    static siteSelector =  $("#sites-container")[0];


    static associationView = new AssociationView(Navigateur.associationSelector);

    static openParticipants(associationId, associationName){
        let participantView = new ParticipantView(associationId, associationName, Navigateur.participantSelector);
        
        Navigateur.associationSelector.classList.remove("display");
        Navigateur.participantSelector.classList.add("display");
        Navigateur.siteSelector.classList.remove("display");
        
    }


    static openSites(participantId, participantName, associationName){
        console.log(associationName);
        let siteView = new SiteView(participantId, participantName, associationName, Navigateur.siteSelector);
        Navigateur.associationSelector.classList.remove("display");
        Navigateur.participantSelector.classList.remove("display");
        Navigateur.siteSelector.classList.add("display");
    }

    static showcritcalError(error){
        $("#navigateur-projets #criticalError")[0].classList.add("show");
        console.log("Error while loading data: " + error);
    }

    static loading(state){
        if(state){
            $("#navigateur-projets #loading")[0].classList.add("show");
        }else{
            $("#navigateur-projets #loading")[0].classList.remove("show");
        }
    }
}

$("#sites-container .back-button").click(function(e){
    Navigateur.associationSelector.classList.remove("display");
    Navigateur.participantSelector.classList.add("display");
    Navigateur.siteSelector.classList.remove("display");
})

$("#participants-container .back-button").click(function(e){
    Navigateur.associationSelector.classList.add("display");
    Navigateur.participantSelector.classList.remove("display");
    Navigateur.siteSelector.classList.remove("display");
})

