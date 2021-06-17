
var equation = [];
var operator = [];
var number = [];
var dot = 0;
var s = 0;

function Pushtri1() 
{
	var val = document.getElementById('tri1').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}
function Pushtri2() 
{
	var val = document.getElementById('tri2').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}
function Pushtri3() 
{
	var val = document.getElementById('tri3').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}
function Pushtri4() 
{
	var val = document.getElementById('tri4').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}
function Pushtri5() 
{
	var val = document.getElementById('tri5').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}
function Pushtri6() 
{
	var val = document.getElementById('tri6').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}
function Pushtri7() 
{
	equation.push(`C`);
	document.getElementById('data').innerText = equation.join("");
}
function Pushtri8() 
{
	equation.push(`P`);
	document.getElementById('data').innerText = equation.join("");
}
function Pushtri9() 
{
	var val = document.getElementById('tri9').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}

/////////////////////////////////////////////////////////////////////

function Pushnum1()
{
	var val = document.getElementById('n1').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}
function Pushnum2()
{
	var val = document.getElementById('n2').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}
function Pushnum3()
{
	var val = document.getElementById('n3').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");	
}
function Pushnum4()
{
	var val = document.getElementById('n4').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}
function Pushnum5()
{
	var val = document.getElementById('n5').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}
function Pushnum6()
{
	var val = document.getElementById('n6').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}
function Pushnum7()
{
	var val = document.getElementById('n7').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}
function Pushnum8()
{
	var val = document.getElementById('n8').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}
function Pushnum9()
{
	var val = document.getElementById('n9').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");
}

////////////////////////////////////////////////////////////////////////////

function Pushlow1()
{
	var val = document.getElementById('l1').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");	
}
function Pushlow2()
{
	var val = document.getElementById('l2').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");	
}
function Pushlow3()
{
	var val = document.getElementById('l3').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");	
}

//////////////////////////////////////////////////////////////////////////////

function Pushinv1()
{
	var val = document.getElementById('inv1').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");		
}
function Pushinv2()
{
	var val = document.getElementById('inv2').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");		
}
function Pushinv3()
{
	var val = document.getElementById('inv3').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");		
}
function Pushinv4()
{
	var val = document.getElementById('inv4').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");		
}
function Pushinv5()
{
	var val = document.getElementById('inv5').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");		
}
function Pushinv6()
{
	var val = document.getElementById('inv6').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");		
}
function Pushinv7()
{
	var val = document.getElementById('inv7').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");		
}
function Pushinv8()
{
	var val = document.getElementById('inv8').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");		
}
function Pushinv9()
{
	var val = document.getElementById('inv9').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");		
}

/////////////////////////////////////////////////////////////////////

function Pushm1()
{
	var val = document.getElementById('m1').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");	
}
function Pushm2()
{
	var val = document.getElementById('m2').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");	
}
function Pushm3()
{
	var val = document.getElementById('m3').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");	
}
function Pushm4()
{
	var val = document.getElementById('m4').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");	
}
function Pushm5()
{
	var val = document.getElementById('m5').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");	
}
function Pushm6()
{
	var val = document.getElementById('m6').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");	
}
function Pushm7()
{
	var val = document.getElementById('m7').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");	
}
function Pushm8()
{
	var val = document.getElementById('m8').value;
	equation.push(val);
	document.getElementById('data').innerText = equation.join("");	
}

function Pushm9()
{
	var val = document.getElementById('m9').value;
	equation.push('⎻');
	document.getElementById('data').innerText = equation.join("");	
}

function AllClear()
{
	while(equation.length!=0)
		equation.pop();
	document.getElementById('data').innerText = equation;	
}

function del()
{
	equation.pop();
	document.getElementById('data').innerText = equation.join("");	
}

function isNumber(a)
{
	if(a>=0 && a<=9)
		return 1;

	return 0;
}

function isOperator(a)
{
	if(a=='+' || a=='-'|| a=='÷'|| a=='X' || a=='^')
		return 1;

	return 0;
}

function isSymbol(a)
{
	if(a=='π' || a=='√' || a=='X10' || a=='ans' || a=='⎻' || a=='*√')
		return 1;
	return 0;
}

function isTrigno(a)
{
	if(a==='Csc' || a==='Sec'|| a==='Cot'|| a==='Sin'|| a==='Cos'|| a==='Tan')
		return 1;
	return 0;
}

function isInvTrigno(a)
{
	if(a==='Csc⎻' || a==='Sec⎻'|| a==='Cot⎻'|| a==='Sin⎻'|| a==='Cos⎻'|| a==='Tan⎻')
		return 1;
	return 0;	
}

function isOrder(a)
{
	if(a=='Log' || a=='ln' || a=='e' || a=='!')
		return 1;

	return 0;
}

function highrank(a)
{
	if(a=='+' || a=='-')
		a = 1;
	else if(a=='X' || a=='÷' || a=='^')
		a = 2;

	let b = operator[operator.length-1];

	if(b=='+' || b=='-')
		b = 1;
	else if(b=='X' || b=='÷' || b=='^')
		b = 2;

	if(a>b)
		return 1;

	return 0;
}

function apply(a, b, op)
{
	if(op=='+')
	{
		let c = a + b;
		console.log(`${c}`);
		number.pop();
		number.pop();
		operator.pop();
		number.push(c);
	}

	else if(op=='-')
	{
		let c = a - b;
		console.log(`${c}`);
		number.pop();
		number.pop();
		operator.pop();
		number.push(c);
	}

	else if(op=='X')
	{
		let c = a * b;
		console.log(`${c}`);
		number.pop();
		number.pop();
		operator.pop();
		number.push(c);
	}

	else if(op=='÷')
	{
		let c = a / b;
		console.log(`${c}`);
		number.pop();
		number.pop();
		operator.pop();
		number.push(c);
	}
	else if(op=='^')
	{
		let c = Math.pow(a, b);
		number.pop();
		number.pop();
		operator.pop();
		number.push(c);
	}
}

function fact(n)
{
	let x = 1;

	if(n==0 || n==1)
		return 1;

	for(let j=2;j<=n;++j)
		x = x*j;

	return x;
}

function equal()
{
	while(number.length!=0)
		number.pop();
	let i = 0, k = 0;
	while(i<equation.length)
	{
		if(isNumber(equation[i]))
		{
			while(isNumber(equation[i]) && i<equation.length)
			{
				if(s)
					dot++;
				var a = parseInt(equation[i]);
				k = 10 * k + a;
				i++;
				if(equation[i]=='.')
				{
					s = 1;
					i++;
				}
				if(i==equation.length || !isNumber(equation[i]))
					break;
			}

			while(dot>0)
			{
				k /= 10;
				s = 0;
				dot--;
			}
			number.push(k);
			k = 0;

			
		}
		if(isOperator(equation[i]))
		{
			if(operator.length==0 || highrank(equation[i]))
				operator.push(equation[i]);
			else
			{
				let a = number[number.length-2];
				let b = number[number.length-1];
				let op = operator[operator.length-1];
				apply(a, b, op);
				operator.push(equation[i]);
			}
			i++;
		}
		if(isSymbol(equation[i]))
		{
			if(equation[i]=='π')
			{
				let p = Math.PI;
				number.push(p);
			}
			else if(equation[i]=='√')
			{
				i++
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
				number.push(Math.sqrt(k));
				k=0;
				i--;
			}
			else if(equation[i]=='X10')
			{
				i++;
				let c = equation[i] * 10;
				number.push(c);
			}

			else if(equation[i]=='⎻')
			{
				let z = number[number.length-1];
				z = 1/z;
				number.pop();
				number.push(z);
			}

			else if(equation[i]=='*√')
			{
				let x = 0;
				let b = 0;
				let j = i-1;
				while(isNumber(equation[j]) && j>=0)
				{
					if(s)
						dot++;
					var a = parseInt(equation[j]);
					k = 10 * k + a;
					j--;
					if(equation[j]=='.')
					{
						s = 1;
						j--;
					}
					if(j==-1 || !isNumber(equation[j]))
						break;
				}

				while(k>0)
				{
					let rem = k%10;
					x = x * 10 + rem;
					k = parseInt(k / 10);
				}

				while(dot>0)
				{
					x /= 10;
					s = 0;
					dot--;
				}

				k = 0;
				i++;

				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
	
				b = k;
				k = 0;
				let c = Math.pow(b, 1/x);
				number.pop();
				number.push(c);
				i--;
			}

			i++;
		}

		if(isTrigno(equation[i]))
		{
			if(equation[i]=='Sin')
			{
				i++
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
				let z = Math.sin(k*Math.PI/180);
				number.push(z);
				k = 0;
			}
			else if(equation[i]=='Cos')
			{
				i++
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
				let z = Math.cos(k*Math.PI/180);
				number.push(z);
				k = 0;
			}
			else if(equation[i]=='Tan')
			{
				i++
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
				let z = Math.tan(k*Math.PI/180);
				number.push(z);
				k = 0;
			}
			else if(equation[i]=='Csc')
			{
				i++
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
				let z = Math.csc(k*Math.PI/180);
				number.push(z);
				k = 0;
			}
			else if(equation[i]=='Sec')
			{
				i++
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
				let z = Math.sec(k*Math.PI/180);
				number.push(z);
				k = 0;
			}
			else if(equation[i]=='Cot')
			{
				i++
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
				let z = Math.cot(k*Math.PI/180);
				number.push(z);
				k = 0;
			}

		}

		if(isInvTrigno(equation[i]))
		{
			if(equation[i]=='Sin⎻')
			{
				i++
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
				let z = Math.asin(k);
				
				number.push(z*180/Math.PI);
				k = 0;
			}
			else if(equation[i]=='Cos⎻')
			{
				i++
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
				let z = Math.acos(k);
				number.push(z*180/Math.PI);
				k = 0;
			}
			else if(equation[i]=='Tan⎻')
			{
				i++
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
				let z = Math.atan(k);
				number.push(z*180/Math.PI);
				k = 0;
			}
			else if(equation[i]=='Csc⎻')
			{
				i++
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
				let z = Math.acsc(k);
				number.push(z*180/Math.PI);
				k = 0;
			}
			else if(equation[i]=='Sec⎻')
			{
				i++
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
				let z = Math.asec(k);
				number.push(z*180/Math.PI);
				k = 0;
			}
			else if(equation[i]=='Cot⎻')
			{
				i++
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}
				let z = Math.acot(k);
				number.push(z*180/Math.PI);
				k = 0;
			}
		}

		if(isOrder(equation[i]))
		{
			if(equation[i]=='Log')
			{
				i++;
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}

				let z = Math.log10(k);
				number.push(z);
			}

			else if(equation[i]=='ln')
			{
				i++;
				while(isNumber(equation[i]) && i<equation.length)
				{
					if(s)
						dot++;
					var a = parseInt(equation[i]);
					k = 10 * k + a;
					i++;
					if(equation[i]=='.')
					{
						s = 1;
						i++;
					}
					if(i==equation.length || !isNumber(equation[i]))
						break;
				}
				while(dot>0)
				{
					k /= 10;
					s = 0;
					dot--;
				}

				let z = Math.log(k);
				number.push(z);
			}

			else if(equation[i]=='e')
			{
				i++;
				if(equation[i]=='^')
				{
					i++;

					while(isNumber(equation[i]) && i<equation.length)
					{
						if(s)
							dot++;
						var a = parseInt(equation[i]);
						k = 10 * k + a;
						i++;
						if(equation[i]=='.')
						{
							s = 1;
							i++;
						}
						if(i==equation.length || !isNumber(equation[i]))
							break;
					}
					while(dot>0)
					{
						k /= 10;
						s = 0;
						dot--;
					}
				}
				else
				{
					k = 1;
				}

				let z = Math.exp(k);
				number.push(z);

			}
			else if(equation[i]=='!')
			{
				let f = fact(number[number.length-1]);

				number.pop();
				number.push(f);
			}
			i++;
		}

		if(equation[i]=='P' || equation[i]=='C')
		{
			if(equation[i]=='P')
			{
				let n = equation[i-1];
				let r = equation[i+1];
				let x = fact(n)/(fact(n-r));
				number.pop();
				number.push(x);
				i++;
			}
			else if(equation[i]=='C')
			{
				let n = equation[i-1];
				let r = equation[i+1];
				let x = fact(n)/((fact(r)*fact(n-r)));
				number.pop();
				number.push(x);
				i++;
			}
			i++;
		}
		

	}

	if(operator.length!=0)
	{
		while(operator.length!=0)
		{
			let a = number[number.length-2];
			let b = number[number.length-1];
			let op = operator[operator.length-1];
			apply(a, b, op);
		}
	}
	while(equation.length!=0)
		equation.pop();	
	console.log(`${equation}`)

	document.getElementById('data').innerText = number.join("");	
}

