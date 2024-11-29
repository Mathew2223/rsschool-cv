1. ***My name is Matveiy Sitnikov***
2. My contacts:
* email: sitnikovmatvey3008@gmail.com
* discord-nickname: god5354
3. I'm a first year college student. I've been looking for a frontend course for a long time and came across rs-rschool. I plan to finish it with great effort.
4. My skills: 
- JS
- HTML
- CSS
- Figma
5. Code example:
Task:
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.

---

```
    function count(string) {
        if(string == null){
            return {};
        } else {
            const strObj = string.split('');
            const res = strObj.reduce((item, i) => {
                if(item.hasOwnProperty(i)) {
                    item[i] += 1;
                } else {
                    item[i] = 1;
                }
                return item
            }, {});
            return res
        }
    }
```
6. I don’t have much experience in development, I did a couple of *pet-projects*.
Example:
[https://github.com/Mathew2223/coffee-](coffee-site)
7. Now I am studying at Slobodsky College. Completed the "Code-Future" course on the basics of *JavaScript*
8. My English level is somewhere between: __A2 - B1__