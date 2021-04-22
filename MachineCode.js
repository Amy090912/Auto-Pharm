function LinkToPage()
{
    var machine_code = document.getElementById("machinecode").value;
    var MC_email = document.getElementById("MCemail").value;
    var uid = auth.currentUser.uid;
    //console.log(uid);
    //window.alert(uid);
    //window.alert(machine_code);

    var MCref = db.ref('User/' + uid);
    MCref.once('value').then(function(snapshot){
        var newCode = snapshot.val();
        //window.alert("new code is " + newCode.MachineCode); 
        if(newCode.MachineCode == machine_code && newCode.Email == MC_email)
        {
            window.alert("code is matched, jump to next page");
            window.location.href= "page.html";
        }
        else
        {
            window.alert("code and email not matched, please double check");
        }
    });
	
}


function AddMachineCode()
{
    var machine_code = document.getElementById("machinecode").value;
    var MC_email = document.getElementById("MCemail").value;
    var uid = auth.currentUser.uid;
   
    writeMachineCode(machine_code, MC_email, uid);
    window.alert("Machine Code " + machine_code + " email " + MC_email + " is added");

}
//write data
function writeMachineCode(machinecode, mcemail, uid)
{
    //window.alert(machinecode);
    db.ref('/User/'+uid).set({
        MachineCode: machinecode,
        Email: mcemail
    });
}

