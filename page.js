function UpdateDataset()
{
       auth.onAuthStateChanged(function(user) {
           if(user){
                var uid2 = auth.currentUser.uid;
                //window.alert(uid2);
                 var Pref = db.ref('User/' + uid2);
                Pref.once('value').then(function(snapshot){
                    var PnewCode = snapshot.val();
                    //window.alert("new code is " + PnewCode.MachineCode);  
                    
                    var currentCode = PnewCode.MachineCode; 
                    //window.alert("current code is " + currentCode);
                    var type = document.getElementsByClassName("types");
                    var hour = document.getElementsByClassName("hours");
                    var minute = document.getElementsByClassName("minutes");
                    var dosage = document.getElementsByClassName("dosages");
                    for(var i=0; i<row_count; i++)
                    {
                        var sindex_type = type[i];
                        var select1 = sindex_type.selectedIndex;
                        var a=sindex_type.options[select1].text; ////value need to store
                        //window.alert(a);

                        var sindex_hour = hour[i];
                        var select2 = sindex_hour.selectedIndex;
                        var b=sindex_hour.options[select2].text; ////value need to store
                        //window.alert(b);

                        var sindex_min = minute[i];
                        var select3 = sindex_min.selectedIndex;
                        var c=sindex_min.options[select3].text; ////value need to store
                        //window.alert(c);

                        var sindex_dosage = dosage[i];
                        var select4 = sindex_dosage.selectedIndex;
                        var d=sindex_dosage.options[select4].text; ////value need to store
                        //window.alert(d);

                        //write to database 
                        var each_schedule = currentCode + i;
                        window.alert("schedule " + each_schedule +" updated success!");
                        writeSchedule(currentCode, a, b, c, d, uid2, each_schedule);

                    }
                });
           }
           else{
               //window.alert("no user sign in");
           }
       }); 
       
}


//write data
function writeSchedule(currentCode, type, hour, minute, dosage, uid,scheduleindex)
{
    //window.alert("title is " + title);
    db.ref('/Schedule/' + scheduleindex).set({
            Uid: uid,
            MachineCode: currentCode,
            Type: type,
            Hour: hour,
            Minute: minute,
            Dosage: dosage

        

    });
}
