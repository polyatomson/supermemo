const possible_colors = ["white","yellow","blue","green","brown","black","red","orange"]
var choose_from = possible_colors
var combination = []
var n = [1,2,3,4,5]
n.forEach(function (){
    picked = possible_colors[Math.floor(Math.random()*possible_colors.length)];
    combination.push(picked)
    ind = choose_from.indexOf(picked)
    choose_from.splice(ind, 1)
})
console.log(combination)