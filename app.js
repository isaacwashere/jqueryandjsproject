let voters = [];


let democratCandidates = [];

let republicanCandidates = [];

let independentCandidates = [];

let finalB = [];

class Person {
    constructor(name){
        this.name = name;
        
    }    
}    


class Voter extends Person {
    constructor(name, ideology) {
        super(name);
        this.ideology = ideology;
        
    }    
    newVoter() {
        voters.push(this);
      console.log(voters);
    }
}    


class Candidate extends Person {
    constructor(name, party, votes = 0) {
        super(name);
        this.party = party;
        this.votes = votes;
    }
    newCandidate() {
        if(this.party === "Democrat")
        {
            democratCandidates.push(this);
            console.log(democratCandidates);
        }   
        else if(this.party === "Republican")
        {
            republicanCandidates.push(this);
            console.log(republicanCandidates);
        }
        else if(this.party === "Independent") {
            
            independentCandidates.push(this);
            console.log(independentCandidates);
        }
        
    }   
}    


function vote() 
{
    return voters.forEach(function(element) 
    {
        let num = Math.ceil(Math.random() * 5);
        let num2 = Math.ceil(Math.random() * 4);
        if(element.ideology === "Liberal")
        {
            if(num <= 3){
                 myVote('Democrat');
            }
            else if(num === 4) {
                myVote('Independent');
            }
            else if(num === 5) {
                myVote('Republican');
            }
        }
        else if(element.ideology === "Neutral")
        {
            if(num2 <= 2){
                myVote('Independent');
           }
           else if(num2 === 3) {
               myVote('Democrat');
           }
           else if(num2 === 4) {
               myVote('Republican');
           } 
        }
        else if(element.ideology === "Conservative")
        {
            if(num <= 3){
                myVote('Republican');
           }
           else if(num === 4) {
               myVote('Independent');
           }
           else if(num === 5) {
               myVote('Democrat');
           }
        }
    }); 
}


function myVote(party) 
{
        if(party === 'Democrat') {
            let nNum = Math.floor(Math.random() * democratCandidates.length);
            return democratCandidates[nNum].votes += 1;
        }
        else if(party === 'Independent') {
            let nNum = Math.floor(Math.random() * independentCandidates.length);
        return  independentCandidates[nNum].votes += 1;
        }
        else if(party === 'Republican') {
            let nNum = Math.floor(Math.random() * republicanCandidates.length);
        republicanCandidates[nNum].votes += 1;
        }
}


function winner() 
{
    // let finalB = [];
    finalB.push(democratCandidates.reduce(function(current, acc){
        return leed1 = (current.votes > acc.votes) ? current : acc 
    }))

    finalB.push(independentCandidates.reduce(function(current, acc){
        return leed2 = (current.votes > acc.votes) ? current : acc 
    }))

    finalB.push(republicanCandidates.reduce(function(current, acc){
        return leed3 = (current.votes > acc.votes) ? current : acc 
    }))

     return finalB.reduce(function(current, acc) {
        return weGotOne = (current.votes > acc.votes) ? current : acc })
}





//**************************************************************************************/
//******************************* jQUERY SECTION ****************************************/





//TODO: diff between value and val 
$(document).ready(function(){


    $('#voter-form form').on('submit', function(event) {
        event.preventDefault();
        let voterName = $('#voter-name').val()
        let voterIdeology = $('#voter-ideology').val()
        let newVoterP = new Voter(voterName, voterIdeology);
        newVoterP.newVoter()
        $("#voter-list .list-group").append('<li class="list-group-item">' + newVoterP.ideology + ' - ' + newVoterP.name +  '</li>');
    });

    
    $('#candidate-form form').on('submit', function(event) {
        event.preventDefault();
        let candidateName = $('#candidate-name').val()
        let candidateParty = $('#candidate-party').val()
        let newCandidateP = new Candidate(candidateName, candidateParty);
        newCandidateP.newCandidate();
        $("#candidate-list .list-group").append('<li class="list-group-item">' + newCandidateP.name + ' - ' + newCandidateP.party + '</li>');
        
    });

    
    $("#vote-btn-div").on('click', function() {
        // event.preventDefault();
        vote();
        winner();
        alert(winner().name);
    });
})







































