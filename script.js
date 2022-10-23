// events
//calender.html
const eventsContainer = document.getElementById("events");

//ADD More events here
const ourEvents=[

	{
	"name":"Basketball",
	"day":"24 November 2022",
	"start":"10 am",
	"end":" 5 am",
	"venue":"Main Sports Arena",
	"facilitator":"Mr Someone",
	"contact":"someone@someemail.com"
},

	{
	"name":"Soccer",
	"day":"",
	"start":"",
	"end":"",
	"venue":"",
	"facilitator":"",
	"contact":""
},

	{
	"name":"Graduation",
	"day":"",
	"start":"",
	"end":"",
	"venue":"",
	"facilitator":"",
	"contact":""
},

	{
	"name":"Hockey",
	"day":"",
	"start":"",
	"end":"",
	"venue":"",
	"facilitator":"",
	"contact":""
},
	{
	"name":"Hockey",
	"day":"",
	"start":"",
	"end":"",
	"venue":"",
	"facilitator":"",
	"contact":""
},
	{
	"name":"Hockey",
	"day":"",
	"start":"",
	"end":"",
	"venue":"",
	"facilitator":"",
	"contact":""
},


]



ourEvents.forEach((event)=>{
const singleEvent=document.createElement("section");
singleEvent.setAttribute("class","singleEvent");
const name =document.createElement("h3");
name.innerHTML=event.name;
const day =document.createElement("h4");
day.innerHTML="Date: "+event.day;
const start =document.createElement("h4");
start.innerHTML= "Start Time: "+ event.start;
const end =document.createElement("h4");
end.innerHTML= "End Time: "+ event.end;
const venue =document.createElement("h4");
venue.innerHTML= "Venue : "+ event.venue;
const facilitator =document.createElement("h4");
facilitator.innerHTML= "Facilitator : "+ event.facilitator;
const contact =document.createElement("h4");
contact.innerHTML= "Facilitator's Email : "+ event.contact;

singleEvent.appendChild(name);
singleEvent.appendChild(day);
singleEvent.appendChild(start);
singleEvent.appendChild(end);
singleEvent.appendChild(venue);
singleEvent.appendChild(facilitator);
singleEvent.appendChild(contact);


eventsContainer.appendChild(singleEvent);
})

