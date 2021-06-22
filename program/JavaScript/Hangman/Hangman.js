
window.addEventListener('load', () =>
{
	function getRandomInt(max) 
	{
	  return Math.floor(Math.random() * max);
	}

	var riddles = ["I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", 
				   "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
				   "What goes up but never comes down?", "I come from a mine and get surrounded by wood always. Everyone uses me. What am I?",
				   "What disappears as soon as you say its name?", "First you eat me, then you get eaten. What am I?",
				   "What can run but never walk, have a mouth but never talk, have a head that never weeps, and a bed that never sleeps",
				   "What has roots that no one sees and looms much taller than trees? Up it goes but yet it never grows; what is it?",
				   "Only one color, but not one size,Stuck at the bottom, yet easily flies.Present in sun, but not in rain,Doing no harm, and feeling no pain.What is it?",
				   "The more these are taken, the more they are left behind. What are they?", "The more of this there is, the less you see. What is it?",
				   "What begins with an “e” and only contains one letter?"];

	var answer = ["ECHO", "MAP", "AGE", "PENCIL", "SILENCE", "FISHHOOK", "RIVER", "MOUNTAIN", "SHADOW", "FOOTSTEPS", "DARKNESS", "ENVELOPE"];

	var num = getRandomInt(riddles.length);
	console.log(`${num}`);
	document.getElementById('riddle').innerText = `${riddles[num]}`;
	var ans = answer[num];
	var rid = riddles[num];
	var dash = [];
	for(let i=0;i<ans.length;++i)
		dash[i] = '_';


	document.getElementById('ans').innerText = `${dash.join("")}`;

	var alpha, s = 0, count = 0, index, count_ans = 0;
	
	var Q = document.getElementById('q');
	var W = document.getElementById('w');
	var E = document.getElementById('e');
	var R = document.getElementById('r');
	var T = document.getElementById('t');
	var Y = document.getElementById('y');
	var U = document.getElementById('u');
	var I = document.getElementById('i');
	var O = document.getElementById('o');
	var P = document.getElementById('p');
	var A = document.getElementById('a');
	var S = document.getElementById('s');
	var D = document.getElementById('d');
	var F = document.getElementById('f');
	var G = document.getElementById('g');
	var H = document.getElementById('h');
	var J = document.getElementById('j');
	var K = document.getElementById('k');
	var L = document.getElementById('l');
	var Z = document.getElementById('z');
	var X = document.getElementById('x');
	var C = document.getElementById('c');
	var V = document.getElementById('v');
	var B = document.getElementById('b');
	var N = document.getElementById('n');
	var M = document.getElementById('m');

	Q.addEventListener('click', () => 
	{
		alpha = document.getElementById('q').innerText;
		
		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	W.addEventListener('click', () => 
	{
		alpha = document.getElementById('w').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			ans = ans.replace(ans[index], '0');
			s = 0;
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	E.addEventListener('click', () => 
	{
		alpha = document.getElementById('e').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	R.addEventListener('click', () => 
	{
		alpha = document.getElementById('r').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			ans = ans.replace(ans[index], '0');
			s = 0;
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	T.addEventListener('click', () => 
	{
		alpha = document.getElementById('t').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	Y.addEventListener('click', () => 
	{
		alpha = document.getElementById('y').innerText;
		
		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			ans = ans.replace(ans[index], '0');
			s = 0;
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	U.addEventListener('click', () => 
	{
		alpha = document.getElementById('u').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	I.addEventListener('click', () => 
	{
		alpha = document.getElementById('i').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	O.addEventListener('click', () => 
	{
		alpha = document.getElementById('o').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	P.addEventListener('click', () => 
	{
		alpha = document.getElementById('p').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	A.addEventListener('click', () => 
	{
		alpha = document.getElementById('a').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	S.addEventListener('click', () => 
	{
		alpha = document.getElementById('s').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	D.addEventListener('click', () => 
	{
		alpha = document.getElementById('d').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	F.addEventListener('click', () => 
	{
		alpha = document.getElementById('f').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	G.addEventListener('click', () => 
	{
		alpha = document.getElementById('g').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	H.addEventListener('click', () => 
	{
		alpha = document.getElementById('h').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	J.addEventListener('click', () => 
	{
		alpha = document.getElementById('j').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	K.addEventListener('click', () => 
	{
		alpha = document.getElementById('k').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	L.addEventListener('click', () => 
	{
		alpha = document.getElementById('l').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	Z.addEventListener('click', () => 
	{
		alpha = document.getElementById('z').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	X.addEventListener('click', () => 
	{
		alpha = document.getElementById('x').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	C.addEventListener('click', () => 
	{
		alpha = document.getElementById('c').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	V.addEventListener('click', () => 
	{
		alpha = document.getElementById('v').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	B.addEventListener('click', () => 
	{
		alpha = document.getElementById('b').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	N.addEventListener('click', () => 
	{
		alpha = document.getElementById('n').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '-1';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});

	M.addEventListener('click', () => 
	{
		alpha = document.getElementById('m').innerText;

		for(let i=0;i<ans.length;++i)
			if(alpha==ans[i])
			{
				s = 1;
				index = i;
				ans[i] = '0';
				break;
			}

		if(s)
		{
			dash[index] = alpha;
			document.getElementById('ans').innerText = `${dash.join("")}`;
			count_ans++;
			s = 0;
			ans = ans.replace(ans[index], '0');
			if(count_ans==ans.length)
			{
				setTimeout(function()
				{
					alert('You won!!');
					window.location.reload(true);
				}, 30);
			}
		}
		else
		{
			count++;

			if(count==1)
				document.getElementById('Lleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==2)
				document.getElementById('Rleg').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==3)
				document.getElementById('Lhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==4)
				document.getElementById('Rhand').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==5)
				document.getElementById('stick').style.background = "rgba(255, 0, 0, 0.0)";
			else if(count==6)
			{
				document.getElementById('face').style.background = "rgba(255, 0, 0, 0.0)";
				
				setTimeout(function()
				{
					alert('You Lost!!');
					window.location.reload(true);
				}, 30);
			}

		}
		
	});
	

});
