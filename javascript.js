function orderUpdate() 
{
    
    /*Save pizza size*/

    // get references to select list and display text box
    var sel = document.getElementById('sizeSelect');
    
    function getSelectedOption(sel) 
    {
        var opt;
        for ( var i = 0, len = sel.options.length; i < len; i++ ) {
            opt = sel.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }
    
    // get selected option in sel
    var opt = getSelectedOption(sel);
    
    // save pizza size
    localStorage.setItem("size", opt.text);
    localStorage.setItem("sprice", opt.value);

    var checkBoxes = document.getElementsByClassName('form-check-input');
    
    /*Save toppings*/
    function getToppings(checkBoxes)
    {
        var toppings = '';

        for ( var i = 0; i < checkBoxes.length; i++)
        {
            if (checkBoxes[i].checked == true)
            {
                toppings += checkBoxes[i].id + ", ";
            }
        }
        return toppings;
    }

    /*Save prices*/
    function getPrices(checkBoxes)
    {
        var prices = '';

        for ( var i = 0; i < checkBoxes.length; i++)
        {
            if (checkBoxes[i].checked == true)
            {
                prices += checkBoxes[i].value + ", ";
            }
        }
        return prices;
    }

    var toppings = getToppings(checkBoxes);

    var prices = getPrices(checkBoxes);

    /*save toppings and prices in local storage*/
    localStorage.setItem("toppings", toppings);
    
    function sumDigitsFromString(str) {
        var sum = 0;
        var numbers = str.match(/\d+/g).map(Number);
        for (var i = 0; i < numbers.length; i++) {
            sum += numbers[i]
        }
        return sum;
    }
    
    var str = prices;
    var totalpr = sumDigitsFromString(str);
    totalpr += parseInt(opt.value);

    localStorage.setItem("prices", prices);
    localStorage.setItem("total", totalpr);

}