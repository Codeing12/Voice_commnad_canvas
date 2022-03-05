x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
}
speechRecognition.onResult = function(event)
{
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "the speech has been reconized as: "+ content;
    if(content == "circle") 
    {
        x = math.floor(Math.random() * 900);
        y = math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";
    }
    if(content == "rectangle")
    {
        x = math.floor(math.random() * 900);
        y = math.floor(math.random() * 600);
        document.getElementById("status").innerHTML = "started drawing rectangle";
        draw_rect = "set";
    }
}
function setup()
{
    canvas = createCanvas(900, 600);
}
function draw()
{
    if(draw_circle == "set")
    {
        radius = math.floor(math.random() *100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "circle is drawn.";
        draw_circle = "";
    }
    if(draw_rect == "set")
    {
        radius = math.floor(math.random() * 100);
        circle(x, y, 70, 50);
        document.getElementById("status").innerHTML = "Rectangle is drawn.";
        draw_rect = "";
    }
}