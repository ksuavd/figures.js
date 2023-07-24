

console.log('TTRIANGLE_TWO')
let result="";
for ( let i = 0; i <= 10; i++) 
	{
		for ( let j = 0; j < i; j++)
		{
			result+=' *'; 
		}
		result+= '\n';
	}
    console.log(result);

console.log('TRIANGLE_THREE')
let result3="";
let c=10;
for (let i = 0; i < c; c--)
    {
        for (let j = 1; j <= c; j++)
        {
            result3+='* ';
        }
        result3+= '\n';
    }
    console.log(result3);

console.log('SQUARE')
let result2="";
let a=10;
for (let i = 0; i < a; i++) //повторяет вывод строки на экран
	{
		for (let i = 0; i < a; i++)//выводит строку из *
		{
            result2+='* ';
		}
		result2+= '\n'; //после вывода строки переходим на новую
	}
    console.log(result2);

    console.log('TRIANGLE_ONE')
    let result4="";
    let d=9; 
    for (let i = 1; i <= d; i++)
    {
 
        for (let j = d; j > i; --j)
        {
            result4+=' ';
		}
        for (let j = 1; j < 2 * i; j++)
        {
            result4+='*';
		}
        result4+= '\n';
    }
    console.log(result4);

    console.log('RHOMBUS')
    let result5="";
    let f=10;
    for (let i = 1; i < f/2; i++)
    {
 
        for (let j = f/2; j > i; --j)
        {
            result5+=' ';
        }
        for (let j = 1; j < 2 * i; j++)
        {
            result5+='*';
        }
        result5+= '\n';

    }
    for (let i = f/2; i >= 1; --i)
    { 

        for (let j = f/2; j > i; --j)
        {
            result5+=' ';
        }
       
        for (let j = 1; j < i*2; j++)
        {
            result5+='*';
        }
        result5+= '\n';
    }
    console.log(result5);

    console.log('LINE_ONE')

    let result6="";
    let ab=5;
    for (let i = 0; i <ab; i++)
    { 
      for (let j=0;j<ab; j++)
      {
        if (i==j)
        {
            result6+='*';
        }
        else
        {
            result6+=' ';
        }
      }
      result6+= '\n';
    }
    console.log(result6);

    console.log('LINE_TWO')
    let result7="";
    let ba=5;
    for (let i = ba; i >0; i--)
    { 
      for (let j=0;j<ba; j++)
      {
        if (i==j)
        {
            result7+='*';
        }
        else
        {
            result7+=' ';
        }
      }
      result7+= '\n';
    }
    console.log(result7);