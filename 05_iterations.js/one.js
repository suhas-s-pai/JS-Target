// for(let i=0;i<10;i++)
// {
//     const theme = i
//     if( theme == 5)
//     {
//         console.log("5 is the best number")
//     }
//     console.log(theme)
// }

for(let i=0; i<=10;i++)
    {
        console.log(`Outer loop is ${i}`)
        for(let j=0; j<=10;j++)
        {
            // console.log(`Inner loop is ${j} and inner loop ${i}`)
            console.log(i + '*' + j + ' = ' + i*j)
        }
    }