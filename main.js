let inputBox = document.getElementsByClassName('inp-box')

for (let i=0; i<4; i++){
inputBox[i].addEventListener('keypress', function(event){
    if (event.key === "Enter"){
            
        document.getElementsByClassName('add-btn')[i].click()
        }
})
}

function loaded() {
    let items = document.getElementsByClassName('tasks')
    mainList = JSON.parse(localStorage.getItem('itemjson'))
    function addStr(n) {
        string = ""
        mainList[n].forEach((element, index) => {
            string += `
        <div class="box-item">
        <i class="fa fa-right-long"></i>
        ${element}
        <button onclick="deleted(${n}, ${index})"><i class="fa fa-check"></i></button>
    </div>
        `
        })
        items[n].innerHTML=string;

    }
    for (let i = 0; i < 4; i++) {
        addStr(i)
    }
}

function addValue(n) {
    let m = inputBox[n].value
    if (m != "") {
        mainList = [[], [], [], []]
        if (localStorage['itemjson'] == undefined) {

            mainList[n].push(m)
            itemjson = JSON.stringify(mainList)
            localStorage.setItem('itemjson', itemjson)
            m = ""
            


        } else {
            mainList = JSON.parse(localStorage.getItem('itemjson'))
            mainList[n].push(m)
            itemjson = JSON.stringify(mainList)
            localStorage.setItem('itemjson', itemjson)
            m = ""
            inputBox[n].value = ""

        }
    }
    location.reload()

}
function deleted(box, itemIndex) {
    mainList = JSON.parse(localStorage.getItem('itemjson'))
    mainList[box].splice(itemIndex, 1)
    itemjson = JSON.stringify(mainList)
    localStorage.setItem('itemjson', itemjson)
    loaded()

}


loaded()