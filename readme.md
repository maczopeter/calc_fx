## Run test
* install nodejs
* run command: "node test.js"
* ( no additional package needed )


## Function call in general
```js
Calc(inputs,fx)
```

## Function call example
```js


Calc(
    {
        $inp1: 5,
        $inp2: 2,
        $inp3: 4
    },
    'ROUND(AVERAGE($inp1,$inp2,$inp3),2)'
)

```


## Math functions
```js

    function OR(v1, v2) 
    function AND(v1, v2)
    function IF(cond, v1, v2) 
    function ABS(v) 
    function MAX() 
    function MIN()
    function MOD(v1, v2) 
    function SUM() 
    function AVERAGE()
    function POWER(base, exp) 
    function ROUND(nr, dig) 

```