function takeANumber(currentPeople, newName){
  
  currentPeople.push(newName);
  
  var spot = currentPeople.length;
  
  return `Welcome, ${newName}. You are number ${spot} in line.`;
}








function nowServing(katzDeliLine){
  
  if(katzDeliLine.length > 0){
    var firstSpot = katzDeliLine[0]
    katzDeliLine.shift();
    return `Currently serving ${firstSpot}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
  katzDeliLine.shift();
}









function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var string = "The line is currently: "
      
        for(let i=0; i<katzDeliLine.length; i++){
          
            var number = i+1;
            
            string = string + number + ". " + katzDeliLine[i] + ", ";
        }
      
    string = string.split(""); 
    string.pop();
    string.pop();
    string = string.join("");
    
    return string;
      
    
  }else{
    return "The line is currently empty.";
  }
  
  
}


