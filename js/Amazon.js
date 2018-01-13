// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function username() {
    var user = document.getElementById("user");
    localStorage.setItem("User",user.value);  
    getvalue();
}
function getvalue(){
    var userget = localStorage.getItem("User");
document.getElementById("Username").innerHTML = userget;
}

    
/*Index.html page script*/
function indexnull() {
    displaycart();
}
/*Amazon html page script*/
function dataretrieve() {

    var xhttp = new XMLHttpRequest;
    xhttp.open("GET", "data.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var i = 0;
            var jsondata = JSON.parse(this.responseText);
            var obj = jsondata.allProducts;
            var mhtml = '<div class = "col-sm-12">';
            for (i = 0; i < obj.length; i++) {
                mhtml += '<div class = "col-sm-4" id = "imgmain"><img id = "i1" src = ' + obj[i].image_pathindex + ' /><h6>' + obj[i].product_name + '</h6></div>';
            }
            mhtml += '</div>';
        }
        //console.log(mhtml);
        document.getElementById("d1").innerHTML = mhtml;
    }
    displaycart();
}

function filters() {
    var option = document.getElementById("s1");
    var selectedval = option.value;
    if (selectedval == "Women") {
        window.location.href = "pages/women.html";
    } else if (selectedval == "All") {
        window.location.href = "index.html";
    } else if (selectedval == "Men") {
        window.location.href = "pages/men.html";
    }
}
function filter() {
    var option = document.getElementById("s1");
    var selectedval = option.value;
    if (selectedval == "Women") {
        window.location.href = "../pages/women.html";
    } else if (selectedval == "All") {
        window.location.href = "../index.html";
    } else if (selectedval == "Men") {
        window.location.href = "../pages/men.html";
    }
}
/*Women html page Script*/
function womendata() {

    var option = document.getElementById("s1");
    option.value = "Women";
    var selectedval = option.value;
    console.log(selectedval);
    var xhttp = new XMLHttpRequest;
    xhttp.open("GET", "../data.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var i = 0;
            var jsondata = JSON.parse(this.responseText);
            var obj = jsondata.allProducts;
            //console.log(obj[0].category);
            var mhtml = '<div class="row">';
            for (i = 0; i < obj.length; i++) {
                //console.log(obj[i].category);
                if (selectedval == "Women" && obj[i].category == "Women") {
                    var array = obj[i].product_description.split(',');
                    mhtml += '</div><div class= "col-sm-12"><div class="col-sm-4"><img id = "i1" src = ' + obj[i].image_path + ' /></div><div class="col-sm-4"><b>' + obj[i].product_name + '</b><hr>Price: $' + obj[i].price + '<br>Availability: ' + obj[i].stock_availability + '<br>' + obj[i].no_of_items + '<br><br><button id = "button1" onclick = "findindex(' + i + ')">SHOP</button></div><div class="col-sm-4"><ul>';
                    for (j = 0; j < array.length; j++) {
                        mhtml += "<li>" + array[j] + "</li>";
                    }
                    mhtml += '</ul></div></div></div>';
                }
            }
            document.getElementById("d11").innerHTML = mhtml;
        }
    }
    displaycart();
}
/*Women's script*/
var polo = document.getElementById("polo");
var dress = document.getElementById("dress");
var nike = document.getElementById("nike");
var ua = document.getElementById("ua");
var hanes = document.getElementById("hanes");
var guess = document.getElementById("guess");
var less = document.getElementById("less");
var more = document.getElementById("more");


function womenfilter() {

    var xhttp = new XMLHttpRequest;
    xhttp.open("GET", "../data.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var i = 0;
            var jsondata = JSON.parse(this.responseText);
            var obj = jsondata.allProducts;
            var mhtml = '<div class="row">';
            for (i = 0; i < obj.length; i++) {
                if (polo.checked == true && obj[i].product_category == "polo" || dress.checked == true && obj[i].product_category == "Dress") {
                    var array = obj[i].product_description.split(',');
                    mhtml += '</div><div class= "col-sm-12"><div class="col-sm-4"><img id = "i1" src = ' + obj[i].image_path + ' /></div><div class="col-sm-4"><b>' + obj[i].product_name + '</b><hr>Price: $' + obj[i].price + '<br>Availability: ' + obj[i].stock_availability + '<br>' + obj[i].no_of_items + '<br><br><button id = "button1" onclick = "findindex(' + i + ')">SHOP</button></div><div class="col-sm-4"><ul>';
                    for (j = 0; j < array.length; j++) {
                        mhtml += "<li>" + array[j] + "</li>";
                    }
                    mhtml += '</ul></div></div></div>';
                } else if (polo.checked != true && dress.checked != true) {
                    womendata();
                }
            }
            document.getElementById("d11").innerHTML = mhtml;
        }
    }
}

function clothingbrands() {

    var xhttp = new XMLHttpRequest;
    xhttp.open("GET", "../data.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var i = 0;
            var jsondata = JSON.parse(this.responseText);
            var obj = jsondata.allProducts;
            var mhtml = '<div class="row">';
            for (i = 0; i < obj.length; i++) {
                if (nike.checked == true && obj[i].brand == "Nike" || ua.checked == true && obj[i].brand == "UnderArmour" || hanes.checked == true && obj[i].brand == "Hanes" || guess.checked == true && obj[i].brand == "Guess") {
                    var array = obj[i].product_description.split(',');
                    mhtml += '</div><div class= "col-sm-12"><div class="col-sm-4"><img id = "i1" src = ' + obj[i].image_path + ' /></div><div class="col-sm-4"><b>' + obj[i].product_name + '</b><hr>Price: $' + obj[i].price + '<br>Availability: ' + obj[i].stock_availability + '<br>' + obj[i].no_of_items + '<br><br><button id = "button1" onclick = "findindex(' + i + ')">SHOP</button></div><div class="col-sm-4"><ul>';
                    for (j = 0; j < array.length; j++) {
                        mhtml += "<li>" + array[j] + "</li>";
                    }
                    mhtml += '</ul></div></div></div>';
                } else if (nike.checked != true && ua.checked != true && hanes.checked != true && guess.checked != true) {
                    womenfilter();
                }
            }
            document.getElementById("d11").innerHTML = mhtml;
        }
    }
}

function price() {
    var option = document.getElementById("s1");
    option.value = "Women";
    var selectedval = option.value;
    var xhttp = new XMLHttpRequest;
    xhttp.open("GET", "../data.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var i = 0;
            var jsondata = JSON.parse(this.responseText);
            var obj = jsondata.allProducts;
            var mhtml = '<div class="row">';
            for (i = 0; i < obj.length; i++) {
                if (selectedval == "Women" && obj[i].category == "Women") {
                    if (polo.checked == true && obj[i].product_category == "polo" || dress.checked == true && obj[i].product_category == "Dress") {
                        if (less.checked == true && parseInt(obj[i].price) < 25 || more.checked == true && parseInt(obj[i].price) >= 25) {
                            var array = obj[i].product_description.split(',');
                            mhtml += '</div><div class= "col-sm-12"><div class="col-sm-4"><img id = "i1" src = ' + obj[i].image_path + ' /></div><div class="col-sm-4"><b>' + obj[i].product_name + '</b><hr>Price: $' + obj[i].price + '<br>Availability: ' + obj[i].stock_availability + '<br>' + obj[i].no_of_items + '<br><br><button id = "button1" onclick = "findindex(' + i + ')">SHOP</button></div><div class="col-sm-4"><ul>';
                            for (j = 0; j < array.length; j++) {
                                mhtml += "<li>" + array[j] + "</li>";
                            }
                            mhtml += '</ul></div></div></div>';
                        }
                    } else if (polo.checked != true && dress.checked != true) {
                        if (less.checked == true && parseInt(obj[i].price) < 25 || more.checked == true && parseInt(obj[i].price) >= 25) {
                            var array = obj[i].product_description.split(',');
                            mhtml += '</div><div class= "col-sm-12"><div class="col-sm-4"><img id = "i1" src = ' + obj[i].image_path + ' /></div><div class="col-sm-4"><b>' + obj[i].product_name + '</b><hr>Price: $' + obj[i].price + '<br>Availability: ' + obj[i].stock_availability + '<br>' + obj[i].no_of_items + '<br><br><button id = "button1" onclick = "findindex(' + i + ')">SHOP</button></div><div class="col-sm-4"><ul>';
                            for (j = 0; j < array.length; j++) {
                                mhtml += "<li>" + array[j] + "</li>";
                            }
                            mhtml += '</ul></div></div></div>';
                        }
                    }
                }
            }
            document.getElementById("d11").innerHTML = mhtml;
        }
    }
}
/*Men's script*/
function mendata() {

    var option = document.getElementById("s1");
    option.value = "Men";
    var selectedval = option.value;
    console.log(selectedval);
    var xhttp = new XMLHttpRequest;
    xhttp.open("GET", "../data.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var i = 0;
            var jsondata = JSON.parse(this.responseText);
            var obj = jsondata.allProducts;
            //console.log(obj[0].category);
            var mhtml = '<div class="row">';
            for (i = 0; i < obj.length; i++) {
                //console.log(obj[i].category);
                if (selectedval == "Men" && obj[i].category == "Men") {
                    var array = obj[i].product_description.split(',');
                    mhtml += '</div><div class= "col-sm-12"><div class="col-sm-4"><img id = "i1" src = ' + obj[i].image_path + ' /></div><div class="col-sm-4"><b>' + obj[i].product_name + '</b><hr>Price: $' + obj[i].price + '<br>Availability: ' + obj[i].stock_availability + '<br>' + obj[i].no_of_items + '<br><br><button id = "button1" onclick = "findindex(' + i + ')">SHOP</button></div><div class="col-sm-4"><ul>';
                    for (j = 0; j < array.length; j++) {
                        mhtml += "<li>" + array[j] + "</li>";
                    }
                    mhtml += '</ul></div></div></div>';
                }
            }
            document.getElementById("d12").innerHTML = mhtml;
        }
    }
    displaycart();
}
var shirt = document.getElementById("Shirt");
var pants = document.getElementById("Pants");
var vanhusean = document.getElementById("VanHeusen");
var Wrangler = document.getElementById("Wrangler");
var less1 = document.getElementById("less1");
var more1 = document.getElementById("more1");


function menfilter() {
    var xhttp = new XMLHttpRequest;
    xhttp.open("GET", "../data.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var i = 0;
            var jsondata = JSON.parse(this.responseText);
            var obj = jsondata.allProducts;
            var mhtml = '<div class="row">';
            for (i = 0; i < obj.length; i++) {
                if (shirt.checked == true && obj[i].product_category == "Shirt" || pants.checked == true && obj[i].product_category == "Pants") {
                    var array = obj[i].product_description.split(',');
                    mhtml += '</div><div class= "col-sm-12"><div class="col-sm-4"><img id = "i1" src = ' + obj[i].image_path + ' /></div><div class="col-sm-4"><b>' + obj[i].product_name + '</b><hr>Price: $' + obj[i].price + '<br>Availability: ' + obj[i].stock_availability + '<br>' + obj[i].no_of_items + '<br><br><button id = "button1" onclick = "findindex(' + i + ')">SHOP</button></div><div class="col-sm-4"><ul>';
                    for (j = 0; j < array.length; j++) {
                        mhtml += "<li>" + array[j] + "</li>";
                    }
                    mhtml += '</ul></div></div></div>';
                } else if (shirt.checked != true && pants.checked != true) {
                    mendata();
                }
            }
            document.getElementById("d12").innerHTML = mhtml;
        }
    }
}

function menclothingbrand() {
    var xhttp = new XMLHttpRequest;
    xhttp.open("GET", "../data.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var i = 0;
            var jsondata = JSON.parse(this.responseText);
            var obj = jsondata.allProducts;
            var mhtml = '<div class="row">';
            for (i = 0; i < obj.length; i++) {
                if (shirt.checked == true && obj[i].product_category == "Shirt" || pants.checked == true && obj[i].product_category == "Pants") {
                    if (vanhusean.checked == true && obj[i].brand == "VanHeusen" || Wrangler.checked == true && obj[i].brand == "Wrangler") {
                        var array = obj[i].product_description.split(',');
                        mhtml += '</div><div class= "col-sm-12"><div class="col-sm-4"><img id = "i1" src = ' + obj[i].image_path + ' /></div><div class="col-sm-4"><b>' + obj[i].product_name + '</b><hr>Price: $' + obj[i].price + '<br>Availability: ' + obj[i].stock_availability + '<br>' + obj[i].no_of_items + '<br><br><button id = "button1" onclick = "findindex(' + i + ')">SHOP</button></div><div class="col-sm-4"><ul>';
                        for (j = 0; j < array.length; j++) {
                            mhtml += "<li>" + array[j] + "</li>";
                        }
                        mhtml += '</ul></div></div></div>';
                    } else if (vanhusean.checked != true && Wrangler.checked != true) {
                        menfilter();
                    }
                }

            }
            document.getElementById("d12").innerHTML = mhtml;
        }
    }
}

function menprice() {
    var option = document.getElementById("s1");
    option.value = "Men";
    var selectedval = option.value;
    var xhttp = new XMLHttpRequest;
    xhttp.open("GET", "../data.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var i = 0;
            var jsondata = JSON.parse(this.responseText);
            var obj = jsondata.allProducts;
            var mhtml = '<div class="row">';
            for (i = 0; i < obj.length; i++) {
                if (selectedval == "Men" && obj[i].category == "Men") {
                    if (shirt.checked == true && obj[i].product_category == "Shirt" || pants.checked == true && obj[i].product_category == "Pants") {
                        if (less1.checked == true && parseInt(obj[i].price) < 25 || more1.checked == true && parseInt(obj[i].price) >= 25) {
                            var array = obj[i].product_description.split(',');
                            mhtml += '</div><div class= "col-sm-12"><div class="col-sm-4"><img id = "i1" src = ' + obj[i].image_path + ' /></div><div class="col-sm-4"><b>' + obj[i].product_name + '</b><hr>Price: $' + obj[i].price + '<br>Availability: ' + obj[i].stock_availability + '<br>' + obj[i].no_of_items + '<br><br><button id = "button1" onclick = "findindex(' + i + ')">SHOP</button></div><div class="col-sm-4"><ul>';
                            for (j = 0; j < array.length; j++) {
                                mhtml += "<li>" + array[j] + "</li>";
                            }
                            mhtml += '</ul></div></div></div>';
                        }
                    } else if (shirt.checked != true && pants.checked != true) {
                        if (less1.checked == true && parseInt(obj[i].price) < 25 || more1.checked == true && parseInt(obj[i].price) >= 25) {
                            var array = obj[i].product_description.split(',');
                            mhtml += '</div><div class= "col-sm-12"><div class="col-sm-4"><img id = "i1" src = ' + obj[i].image_path + ' /></div><div class="col-sm-4"><b>' + obj[i].product_name + '</b><hr>Price: $' + obj[i].price + '<br>Availability: ' + obj[i].stock_availability + '<br>' + obj[i].no_of_items + '<br><br><button id = "button1" onclick = "findindex(' + i + ')">SHOP</button></div><div class="col-sm-4"><ul>';
                            for (j = 0; j < array.length; j++) {
                                mhtml += "<li>" + array[j] + "</li>";
                            }
                            mhtml += '</ul></div></div></div>';
                        }
                    }
                }
            }
        }
        document.getElementById("d12").innerHTML = mhtml;
    }
}

function findindex(index) {
    var index1 = index;
    localStorage.setItem("id", index1);
    window.location.href = "../pages/buy.html";
}
/*Buy button*/
function buyproduct() {

    var i = localStorage.getItem("id");
    var xhttp = new XMLHttpRequest;
    xhttp.open("GET", "../data.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsondata = JSON.parse(this.responseText);
            var obj = jsondata.allProducts;
            var mhtml = '<div class="row">';
            var array = obj[i].product_description.split(',');
            mhtml += '</div><div class= "col-sm-12"><div class="col-sm-4"><img id = "i11" src = ' + obj[i].image_path + ' /></div><div class="col-sm-5"><h3><b>' + obj[i].product_name + '</b></h3><hr><b>Price:</b> $ ' + obj[i].price + '<br><br><b>Availability:</b> ' + obj[i].stock_availability + '<br><br>' + obj[i].no_of_items + '<br><br><b>Fit:</b> As Expected(70%)<br><br><b>Size:</b><br><select id = "s1"><option>-Size-</option><option>Small</option><option>Medium</option><option>Large</option><option>X-Large</option></select><br><br><ul>';
            for (j = 0; j < array.length; j++) {
                mhtml += "<li>" + array[j] + "</li>";
            }
            mhtml += '</ul><hr></div><div class="col-sm-3" id= "addtolist"><div id = "top"><button id = "addtocartbutton" onclick = "Addtocart(' + i + ')">Add to Cart</button></div></div></div></div>';
        }
        document.getElementById("d13").innerHTML = mhtml;
    }
    displaycart();
}

function Addtocart(index) {
    var i = index;
    // created string and than i will convert into array
    var a1 = localStorage.getItem("array1");
    /* alert("Addtocart[ localStorage.getItem('array1']-> " + a1);*/
    if (a1 === null || a1 === "" || a1.length === 0 || a1 === "null") {
        a1 = index;
        /*alert("if : a1 = " + a1);*/
    } else {
        a1 = a1 + ',' + index;
        /*alert("else : a1 = " + a1);*/
    }
    /*alert("Addtocart [a1] : " + a1);*/
    localStorage.setItem("array1", a1);
    var array11 = "";
    if ((a1.toString().indexOf(',') >= 0)) {
        array11 = a1.split(',');
        document.getElementById("cart_text").innerHTML = array11.length;
    } else {
        array11 = a1.toString();
        document.getElementById("cart_text").innerHTML = 1;
    }
    /*alert("Addtocart [array11] : " + array11);*/
    var xhttp = new XMLHttpRequest;
    xhttp.open("GET", "../data.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var jsondata = JSON.parse(this.responseText);
            var obj = jsondata.allProducts;
            var mhtml = '<div class="row">';
            for (i = 0; i < array11.length; i++) {
                mhtml += '</div><div class="col-sm-12" id = "remove' + array11[i] + '"><b>' + obj[array11[i]].product_name + '</b><br><b>Price:</b> $ ' + obj[array11[i]].price + '<button id = "addtocartbutton" onclick = "removecart(' + array11[i] + ')">Remove</button></div></div>';
            }
            document.getElementById("addtolist").innerHTML = mhtml;
        }
    };
}

function removecart(index) {

    var a = localStorage.getItem("array1");
    /* alert("removecart [array1(a)] : " + a);*/
    var array2 = "";
    var a1 = "";
    if ((a.toString().indexOf(',') >= 0)) {
        array2 = a.split(',');
        a1 = array2.splice(array2.indexOf(index), 1);
        /*alert("removecart [array2(a.split)] : " + array2);*/
        document.getElementById("cart_text").innerHTML = array2.length;
        localStorage.setItem("array1", a1);
    } else {
        localStorage.setItem("array1", null);
        document.getElementById("cart_text").innerHTML = 0;
    }
    /*alert("removecart [array2(a1)] : " + a1);*/
    document.getElementById("remove" + index + '').innerHTML = "";

}

function displaycart() {
    var a1 = localStorage.getItem("array1");
    if ((a1.toString().indexOf(',') >= 0)) {
        var array11 = a1.split(',');
        document.getElementById("cart_text").innerHTML = array11.length;
    } else if (a1 === null || a1.toString() === "" || a1.toString() === "null") {
        document.getElementById("cart_text").innerHTML = 0;
    } else {
        //array11 = a1.toString();
        document.getElementById("cart_text").innerHTML = 1;
    }
}
/*addtocart.html page script*/
function additem() {
    var a = document.getElementById("cart_text").innerHTML;
    if (a == 0) {
        alert("Please Select Product");
    } else {
        window.location.href = "../pages/addtocart.html";
    }
}

function addtocartpage() {
    var index = localStorage.getItem("id");
    var a = document.getElementById("cart_text").innerHTML;
    // created string and than i will convert into array
    var a1 = localStorage.getItem("array1");
    /*alert("Addtocart[ localStorage.getItem('array1']-> " + a1);*/
    if (a != 0) {
        if (a1 === null || a1 === "" || a1.length === 0 || a1 === "null") {
            a1 = index;
            /*alert("if : a1 = " + a1);*/
        }
    }
    localStorage.setItem("array1", a1);
    var array11 = "";
    if ((a1.toString().indexOf(',') >= 0)) {
        array11 = a1.split(',');
        document.getElementById("cart_text").innerHTML = array11.length;
    } else if (a1 === null || a1.toString() === "" || a1.toString() === "null") {
        document.getElementById("cart_text").innerHTML = 0;
        window.location.href = "../index.html";
    } else {
        array11 = a1.toString();
        document.getElementById("cart_text").innerHTML = 1;
    }
    var xhttp = new XMLHttpRequest;
    xhttp.open("GET", "../data.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var jsondata = JSON.parse(this.responseText);
            var obj = jsondata.allProducts;
            var mhtml = '<div class="row">';
            var mhtml1 = '<div class= "row">';
            var sum = 0;
            for (i = 0; i < array11.length; i++) {
                sum = sum + parseFloat(obj[array11[i]].price);
                mhtml += '</div><div class="col-sm-12" id = "remove' + array11[i] + '"><div class = "col-sm-3"><img id = "img22" src = ' + obj[array11[i]].image_path + '></div><div class = "col-sm-3" id = "name"><b>' + obj[array11[i]].product_name + '</b></div><div class = "col-sm-3" id = "price"> $ ' + obj[array11[i]].price + '</div><div class = "col-sm-3" id = "removebtn"><button id = "addtocartbutton1" onclick = "removecart(' + array11[i] + ')">Remove</button></div></div></div>';
            }
            mhtml1 += '</div><div class= "col-sm-12"><hr><div class = "col-sm-3"><b>Total :</b> </div><div class = "col-sm-3"></div><div class = "col-sm-3">$ ' + sum.toFixed(2) + '</div><div class = "col-sm-3"><button id = "addtocartbutton1" onclick = "checkoutredirect()">Proceed to Checkout</button></div></div>';
            document.getElementById("addt").innerHTML = mhtml;
            document.getElementById("addsum").innerHTML = mhtml1;
        }
    }
}

function checkoutredirect() {
    window.location.href = "../pages/checkout.html";
    checkout();
}

function checkout() {
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var contact = document.getElementById("phone");
    var address = document.getElementById("address");
    var state = document.getElementById("state");
    var zipcode = document.getElementById("zipcode");
    var holdername = document.getElementById("holdername");
    var cardnumber = document.getElementById("cardnumber");
    var varMonth = document.getElementById("txtmonth");
    var varYear = document.getElementById("txtyear");
    var varCVV = document.getElementById("cvv");
    if (validLetters(firstname, "First name", "")) {
        if (validLetters(firstname, "Last name", "")) {
            if (validAddress(address, 'Address', "")) {
                if (validDropDown(state, "State", "")) {
                    if (validDigits(zipcode, "Zip Code", "")) {
                        if (validDigits(contact, "Contact", "")) {

                            if (validLetters(holdername, "Card Holder Name", "")) {
                                if (validDigits(cardnumber, "Card Number", "")) {
                                    if (validDigits(varMonth, "Month", "")) {
                                        if (parseInt(varMonth.value) <= 0 || parseInt(varMonth.value) > 12) {
                                            alert("Please enter  valid value for 'Month'.");
                                            return false;
                                        }
                                        if (validDigits(varYear, "Year", "")) {
                                            if (parseInt(varYear.value) < 18) {
                                                alert("Please enter  valid value for 'Year'.");
                                                return false;
                                            }
                                            if (validDigits(varCVV, "CVV", "")) {
                                                localStorage.setItem("Fname", firstname.value);
                                                localStorage.setItem("Lname", lastname.value);
                                                window.location.href = '../pages/thankyou.html';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function random() {
    var fn = localStorage.getItem("Fname");
    var ln = localStorage.getItem("Lname");
    var fnspan = document.getElementById("fn");
    var a = document.getElementById("span");
    fnspan.innerHTML = "Hello," + fn + " " + ln;
    a.innerHTML = Math.round(Math.random() * 1000000);
}
