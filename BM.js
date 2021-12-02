let fs = require('fs');
let arg = process.argv;
s = fs.readFileSync('string.txt');
s = s.toString();
t = fs.readFileSync('substring.txt');
t = t.toString();
answer = new Array();
for (i = 0; i < t.length; i++){
	otr = t.slice(t.length - i, t.length);
	badsym = t[t.length - i - 1]
	flag = 0;
	k = i
	for (j = 1; j < t.length - otr.length; j++){
		if ((t.slice(j, j + otr.length) == otr) && (t[j - 1] != badsym)){
			k = j
			flag = 1
		}
	}
	if (flag == 0){
		lensuf = 0
		for (g = 0; g <= otr.length; g++){
			otr2 = otr.slice(otr.length - g, otr.length);
			///console.log(otr2);
			if (t.slice(0, otr2.length) == otr2){
				lensuf = otr2.length;
			}
		}
		k = 0 - (otr.length - lensuf);
	}
	k += 1;
	shift = t.length - k - otr.length + 1;
	answer[i] = shift;
}
lensuf = 0;
for (i = 1; i < t.length; i++){
	otr = t.slice(t.length - i, t.length);
	if (otr == t.slice(0, otr.length)){
		lensuf = otr.length
	}
}
k = 1 - (t.length - lensuf);
shift = - k + 1;
answer[t.length] = shift;



i = 0
while (i < s.length - t.length + 1){
	right = i + t.length - 1;
	count = 0;
	ind = t.length - 1;
	for (j = right; j > right - t.length; j--){
		if (s[j] != t[ind]){
			break
		}else{
			count++;
		}
		ind -= 1;
	}
	///console.log(count);
	if (count == t.length){
		console.log(right - t.length + 2);
	}
	i += answer[count];
}