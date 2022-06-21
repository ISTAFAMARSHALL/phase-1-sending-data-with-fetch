// Add your code here
function submitData(username, useremail) {

    const postinfo = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: `${username}`,
            email: `${useremail}`,
        })
    }

return  fetch('http://localhost:3000/users', postinfo)
        .then(res => res.json())
        .then( (obj)=> {
            document.body.append(obj.id)
        })
        .catch(function (error) {
            alert('Unauthorized Access')
           document.body.append(error.message);
        })
};


function render(obj) {
console.log(obj);
    // let list = document.createElement('div');
    // document.body.append(list);
    // const ul = document.createElement('ul');
    // document.body.append(ul);
    const li = document.createElement('li');
    document.body.append(li);

    li.innerText = obj.id

}

submitData('blah', 'blah.com');