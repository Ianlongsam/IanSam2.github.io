var counter1 = [0, 0, 0, 0, 0];
function likePhoto(num) {
    counter1[num]++;
    console.log(counter1);
    document.getElementById("likeCount1" + num).innerHTML = counter1[num];
}

var user = {
    "name": "Ian",
    "name_last" : "Sam",
    "followers": ["bot"],
    "profile": "add image url",
}

setTimeout(function(){ document.getElementById("name").innerHTML = user.name;}, 3000);
setTimeout(function(){ document.getElementById("name_last").innerHTML = user.name_last;}, 3000);
setTimeout(function(){ document.getElementById("followers").innerHTML = "Followers: " + user.followers.length;}, 3000);
setTimeout(function(){ $("#profile_pic").attr("src", user.profile_pic);}, 3000);