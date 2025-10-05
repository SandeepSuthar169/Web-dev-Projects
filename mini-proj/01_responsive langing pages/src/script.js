function headlMenu(){
    console.log('first');
    
}

function setputIntersection(e, isTR, speed){
    const interCall = (entries) => {
        const isInter = entries[0].isInter  
    }
    const interObj = new InterObj(interCall)

    interObj.observer(e)
}
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')

setputIntersection(line1, true, 0.15)
setputIntersection(line2, false, 0.15)
setputIntersection(line3, true, 0.15)