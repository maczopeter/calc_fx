let Calc = require("./calcfx")

console.clear()
test_cases().forEach((c, i) => {
    console.log()
    console.log(i," ", c.fx, ' ----> ',Calc(c.inputs,c.fx ))
    console.log(c.inputs)
    console.log()
})



// --------------- test cases -----------------
function test_cases() {
    return [

        {
            fx: '$inp1*6+$inp2',
            inputs: {
                $inp1: 100,
                $inp2: 10
            },
        },

        {
            fx: '$inp1**$inp2',
            inputs: {
                $inp1: 5,
                $inp2: 2
            },
        },

        {
            fx: 'ROUND(AVG($inp1,$inp2,$inp3),2)',
            inputs: {
                $inp1: 5,
                $inp2: 2,
                $inp3: 4
            },
        },        

    ]
};