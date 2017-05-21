// JavaScript Document
function validateForm() {
    var n = document.forms["myform"]["name"].value;
    if (n == "") {
        alert("Input your name");
        return false;
    }
	var a = document.forms["myform"]["address"].value;
	if (a == "") {
		alert("Input your address");
		return false;
	}
	var c = document.forms["myform"]["city"].value;
    if (c == "") {
        alert("Input your city");
        return false;
    }
	var s = document.forms["myform"]["state"].value;
    if (s == "") {
        alert("Input your state");
        return false;
    }
	var pc = document.forms["myform"]["pcode"].value;
    if (pc == "") {
        alert("Input your postal code");
        return false;
    }
	var cn = document.forms["myform"]["contactno"].value;
    if (cn == "") {
        alert("Input your contact number");
        return false;
    }
	var i = document.forms["myform"]["item"].value;
    if (i == "") {
        alert("Input your item code");
        return false;
    }
	var q = document.forms["myform"]["quantity"].value;
    if (q == "") {
        alert("Input your quantity");
        return false;
    }
	var t = document.forms["myform"]["total"].value;
    if (p == 0) {
        alert("The price is not relavant");
        return false;
    }
	var p = document.forms["myform"]["payment"].value;
    if (p == "") {
        alert("Input your payment method");
        return false;
    }
	var ccn = document.forms["myform"]["ccnumber"].value;
    if (ccn == "") {
        alert("Input your cc number");
        return false;
    }
	var cvv = document.forms["myform"]["cvv"].value;
    if (cvv == "") {
        alert("Input your cvv");
        return false;
	}
	var e = document.forms["myform"]["email"].value;
    if (e == "") {
        alert("Input your postal code");
        return false;
	}
}

