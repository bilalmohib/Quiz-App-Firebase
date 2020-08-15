function submitForm(e)//e event ka prameter ha jo index se lia ha event b lkh sakte ha kam wo he krega
 {
    e.preventDefault();//behaviour ko rok deta ha ye default herkat ko rok deta ha jese submit form kro to upper  ? mark ata th ab nhe aye ga
    let name = document.forms["welcome_form"]["name"].value;//yahan tamama documents k form ko acces krega jo index me dia ha "welcome_for" yah se
                                                      //name ko lia jo b is me hogi value me save hoga
      //player name save in seassion storage
    sessionStorage.setItem("name", name);//take jab b name chye ho to get name ker k lele hum "name"

  }