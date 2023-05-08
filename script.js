const list=[12,4,32,5,43]
let sum=0;
for (let i = 0; i < list.length; i++) {
    sum += list[i];
    
}

    console.log(sum);
    
    const list1=[12,4,-55,32,-12,-3,5,43]
    let sum1=0;
    for (let i = 0; i < list1.length;i++) 
    {if (list1[i]>0)
        sum1+=list1[i]
        
    }
console.log(sum1);

let para=document.querySelector('p')
console.log(para);
let arr=[]
for (let i = 0; i < para.length; i++) {
    arr.push(para[i].innerText)
    
}
console.log(arr);